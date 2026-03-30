'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { AgGridReact } from 'ag-grid-react'
import { ColDef, ModuleRegistry, AllCommunityModule } from 'ag-grid-community'
import AdminSidebar from '@/components/admin/AdminSidebar'

ModuleRegistry.registerModules([AllCommunityModule])

interface Lead {
  id: string
  name: string
  phone: string
  email: string
  grade: string | null
  school: string | null
  batch: string | null
  paymentStatus: string
  leadStatus: string
  createdAt: string
  enrollment?: {
    batch: string
    paymentOption: string
    amount: number | null
    finalAmount: number | null
  }
}

const LEAD_STATUS_OPTIONS = [
  { value: 'new', label: 'New' },
  { value: 'contacted', label: 'Contacted' },
  { value: 'qualified', label: 'Qualified' },
  { value: 'converted', label: 'Converted' },
  { value: 'lost', label: 'Lost' },
]

const LEAD_STATUS_STYLES: Record<string, { bg: string; text: string; dot: string }> = {
  new:        { bg: '#eff6ff', text: '#2563eb', dot: '#60a5fa' },
  contacted:  { bg: '#fefce8', text: '#ca8a04', dot: '#eab308' },
  qualified:  { bg: '#f5f3ff', text: '#7c3aed', dot: '#a78bfa' },
  converted:  { bg: '#f0fdf4', text: '#16a34a', dot: '#22c55e' },
  lost:       { bg: '#fef2f2', text: '#dc2626', dot: '#f87171' },
}

const PAYMENT_STATUS_STYLES: Record<string, { bg: string; text: string; dot: string }> = {
  paid:   { bg: '#f0fdf4', text: '#16a34a', dot: '#22c55e' },
  unpaid: { bg: '#fff7ed', text: '#ea580c', dot: '#fb923c' },
}

interface StatCardProps {
  title: string
  value: string | number
  subtitle: string
  iconPath: string
  accent: string
  accentBg: string
}

function StatCard({ title, value, subtitle, iconPath, accent, accentBg }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{title}</p>
          <p className="text-[28px] font-bold text-gray-900 mt-1.5 leading-none">{value}</p>
          <p className="text-xs text-gray-400 mt-2">{subtitle}</p>
        </div>
        <div className="rounded-xl p-3 shrink-0" style={{ background: accentBg }}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={accent} strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function LeadsPage() {
  const router = useRouter()
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [adminName, setAdminName] = useState('')
  const [updating, setUpdating] = useState<string | null>(null)

  const getToken = useCallback(() => localStorage.getItem('admin_token') ?? '', [])

  const fetchLeads = useCallback(async () => {
    const token = getToken()
    if (!token) { router.push('/admin/login'); return }

    const res = await fetch('/api/admin/leads', {
      headers: { Authorization: `Bearer ${token}` }
    })

    if (res.status === 401) {
      router.push('/admin/login')
      return
    }

    const data = await res.json()
    setLeads(data)
    setLoading(false)
  }, [getToken, router])

  useEffect(() => {
    setAdminName(localStorage.getItem('admin_name') ?? 'Admin')
    fetchLeads()
  }, [fetchLeads])

  const updateLeadStatus = async (id: string, leadStatus: string) => {
    const token = getToken()
    if (!token) return

    setUpdating(id)
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id, leadStatus }),
      })

      if (!res.ok) throw new Error('Failed to update lead')

      // Update local state
      setLeads((prev) =>
        prev.map((lead) =>
          lead.id === id ? { ...lead, leadStatus } : lead
        )
      )
    } catch (error) {
      console.error(error)
      alert('Failed to update lead status')
    } finally {
      setUpdating(null)
    }
  }

  const stats = useMemo(() => ({
    total: leads.length,
    paid: leads.filter((l) => l.paymentStatus === 'paid').length,
    unpaid: leads.filter((l) => l.paymentStatus === 'unpaid').length,
    new: leads.filter((l) => l.leadStatus === 'new').length,
    converted: leads.filter((l) => l.leadStatus === 'converted').length,
  }), [leads])

  const colDefs = useMemo<ColDef<Lead>[]>(() => [
    {
      field: 'createdAt', headerName: 'Date', width: 130, sort: 'desc',
      valueFormatter: (p) => new Date(p.value).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
    },
    { field: 'name', headerName: 'Name', flex: 1, minWidth: 150 },
    { field: 'phone', headerName: 'Phone', width: 130 },
    { field: 'email', headerName: 'Email', flex: 1, minWidth: 180 },
    { field: 'grade', headerName: 'Grade', width: 100, valueFormatter: (p) => p.value || '—' },
    {
      field: 'batch', headerName: 'Batch', flex: 1, minWidth: 140,
      valueGetter: (p) => p.data?.batch || p.data?.enrollment?.batch || '—',
    },
    {
      field: 'paymentStatus', headerName: 'Payment', width: 120,
      cellRenderer: (p: { value: string }) => {
        const style = PAYMENT_STATUS_STYLES[p.value] ?? { bg: '#f3f4f6', text: '#6b7280', dot: '#9ca3af' }
        return (
          <span
            className="inline-flex items-center gap-1.5 h-5 px-2.5 py-1 rounded-full text-[11px] font-semibold capitalize"
            style={{ color: style.text }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: style.dot }} />
            {p.value}
          </span>
        )
      },
    },
    {
      field: 'leadStatus', headerName: 'Lead Status', width: 160,
      cellRenderer: (p: { value: string; data: Lead }) => {
        const isUpdating = updating === p.data.id
        const style = LEAD_STATUS_STYLES[p.value] ?? { bg: '#f3f4f6', text: '#6b7280', dot: '#9ca3af' }

        return (
          <div className="flex items-center gap-2 h-full">
            <select
              value={p.value}
              onChange={(e) => updateLeadStatus(p.data.id, e.target.value)}
              disabled={isUpdating}
              className="px-2 py-1 rounded-lg text-[11px] font-semibold border-0 cursor-pointer disabled:opacity-50"
              style={{color: style.text }}
            >
              {LEAD_STATUS_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )
      },
    },
    {
      field: 'enrollment.finalAmount', headerName: 'Amount', width: 110,
      valueFormatter: (p) => {
        const amount = p.data?.enrollment?.finalAmount
        return amount != null ? `₹${amount.toLocaleString('en-IN')}` : '—'
      },
    },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [updating])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#f1f5f9' }}>
        <div className="text-center">
          <div className="w-10 h-10 border-[3px] border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-gray-400 text-sm">Loading leads...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: '#f1f5f9' }}>
      <AdminSidebar adminName={adminName} />

      {/* Content — offset by collapsed sidebar width on md+, full width on mobile */}
      <div className="md:pl-[60px] flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-100 flex items-center justify-between px-4 py-3.5 md:px-8 md:py-4">
          {/* Spacer on mobile so title doesn't sit under hamburger */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 shrink-0 md:hidden" />
            <div className="min-w-0">
              <h1 className="text-[17px] font-bold text-gray-900 leading-tight">Leads Management</h1>
              <p className="text-xs text-gray-400 mt-0.5 hidden sm:block">Track and manage all leads through the pipeline</p>
            </div>
          </div>
          <button
            onClick={fetchLeads}
            className="flex items-center gap-2 px-3 py-2 md:px-4 rounded-lg text-sm font-medium transition-all border border-gray-200 text-gray-600 hover:bg-gray-50 shrink-0"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="hidden sm:inline">Refresh</span>
          </button>
        </header>

        <div className="flex-1 p-4 md:p-8 space-y-5 md:space-y-7">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">
            <StatCard
              title="Total Leads"
              value={stats.total}
              subtitle="All-time leads"
              accent="#2563eb"
              accentBg="#eff6ff"
              iconPath="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
            <StatCard
              title="Paid Leads"
              value={stats.paid}
              subtitle="Converted to payment"
              accent="#16a34a"
              accentBg="#f0fdf4"
              iconPath="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <StatCard
              title="Unpaid Leads"
              value={stats.unpaid}
              subtitle="Pending payment"
              accent="#ea580c"
              accentBg="#fff7ed"
              iconPath="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <StatCard
              title="New Leads"
              value={stats.new}
              subtitle="Need attention"
              accent="#3b82f6"
              accentBg="#dbeafe"
              iconPath="M13 10V3L4 14h7v7l9-11h-7z"
            />
            <StatCard
              title="Converted"
              value={stats.converted}
              subtitle="Successfully closed"
              accent="#7c3aed"
              accentBg="#f5f3ff"
              iconPath="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-[15px] font-semibold text-gray-900">All Leads</h2>
                <p className="text-xs text-gray-400 mt-0.5">{leads.length} total records</p>
              </div>
            </div>
            <div className="ag-theme-alpine" style={{ height: 520 }}>
              <AgGridReact
                rowData={leads}
                columnDefs={colDefs}
                defaultColDef={{ sortable: true, filter: true, resizable: true }}
                pagination={true}
                paginationPageSize={15}
                suppressCellFocus={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
