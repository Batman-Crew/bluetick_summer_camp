'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { AgGridReact } from 'ag-grid-react'
import { ColDef, ModuleRegistry, AllCommunityModule } from 'ag-grid-community'
import AdminSidebar from '@/components/admin/AdminSidebar'

ModuleRegistry.registerModules([AllCommunityModule])

interface Stats {
  totalEnrollments: number
  paidEnrollments: number
  pendingEnrollments: number
  activePromoCodes: number
  totalRevenue: number
}

interface Enrollment {
  id: string
  name: string
  phone: string
  email: string
  grade: string
  school: string
  batch: string
  paymentOption: string
  amount: number | null
  finalAmount: number | null
  paymentStatus: string
  razorpayOrderId: string | null
  razorpayPaymentId: string | null
  createdAt: string
  promoCode: { code: string; discount: number } | null
}

const STATUS_STYLES: Record<string, { bg: string; text: string; dot: string }> = {
  paid:    { bg: '#f0fdf4', text: '#16a34a', dot: '#22c55e' },
  pending: { bg: '#fefce8', text: '#ca8a04', dot: '#eab308' },
  enquiry: { bg: '#eff6ff', text: '#2563eb', dot: '#60a5fa' },
  failed:  { bg: '#fef2f2', text: '#dc2626', dot: '#f87171' },
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

export default function AdminDashboard() {
  const router = useRouter()
  const [stats, setStats] = useState<Stats | null>(null)
  const [enrollments, setEnrollments] = useState<Enrollment[]>([])
  const [loading, setLoading] = useState(true)
  const [adminName, setAdminName] = useState('')

  const getToken = useCallback(() => localStorage.getItem('admin_token') ?? '', [])

  const fetchData = useCallback(async () => {
    const token = getToken()
    if (!token) { router.push('/admin/login'); return }

    const headers = { Authorization: `Bearer ${token}` }
    const [statsRes, enrollRes] = await Promise.all([
      fetch('/api/admin/stats', { headers }),
      fetch('/api/admin/enrollments', { headers }),
    ])

    if (statsRes.status === 401 || enrollRes.status === 401) {
      router.push('/admin/login')
      return
    }

    setStats(await statsRes.json())
    setEnrollments(await enrollRes.json())
    setLoading(false)
  }, [getToken, router])

  useEffect(() => {
    setAdminName(localStorage.getItem('admin_name') ?? 'Admin')
    fetchData()
  }, [fetchData])

  const colDefs = useMemo<ColDef<Enrollment>[]>(() => [
    {
      field: 'createdAt', headerName: 'Date', width: 130, sort: 'desc',
      valueFormatter: (p) => new Date(p.value).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
    },
    { field: 'name', headerName: 'Student Name', flex: 1, minWidth: 150 },
    { field: 'email', headerName: 'Email', flex: 1, minWidth: 180 },
    { field: 'phone', headerName: 'Phone', width: 130 },
    { field: 'grade', headerName: 'Grade', width: 100 },
    { field: 'batch', headerName: 'Batch', flex: 1, minWidth: 140 },
    {
      field: 'finalAmount', headerName: 'Amount', width: 110,
      valueFormatter: (p) => p.value != null ? `₹${p.value.toLocaleString('en-IN')}` : '—',
    },
    {
      field: 'paymentStatus', headerName: 'Status', width: 120,
      cellRenderer: (p: { value: string }) => {
        const style = STATUS_STYLES[p.value] ?? { bg: '#f3f4f6', text: '#6b7280', dot: '#9ca3af' }
        return (
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold capitalize"
            style={{ background: style.bg, color: style.text }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: style.dot }} />
            {p.value}
          </span>
        )
      },
    },
    {
      field: 'promoCode', headerName: 'Promo', width: 110,
      valueFormatter: (p) => p.value?.code ?? '—',
    },
    { field: 'razorpayPaymentId', headerName: 'Payment ID', flex: 1, minWidth: 190 },
  ], [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#f1f5f9' }}>
        <div className="text-center">
          <div className="w-10 h-10 border-[3px] border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-gray-400 text-sm">Loading dashboard...</p>
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
              <h1 className="text-[17px] font-bold text-gray-900 leading-tight">Dashboard</h1>
              <p className="text-xs text-gray-400 mt-0.5 hidden sm:block">Overview of enrollments and payments</p>
            </div>
          </div>
          <button
            onClick={fetchData}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            <StatCard
              title="Total Enrollments"
              value={stats?.totalEnrollments ?? 0}
              subtitle="All-time registrations"
              accent="#2563eb"
              accentBg="#eff6ff"
              iconPath="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <StatCard
              title="Paid Enrollments"
              value={stats?.paidEnrollments ?? 0}
              subtitle="Successful payments"
              accent="#16a34a"
              accentBg="#f0fdf4"
              iconPath="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <StatCard
              title="Total Revenue"
              value={`₹${(stats?.totalRevenue ?? 0).toLocaleString('en-IN')}`}
              subtitle="From paid enrollments"
              accent="#7c3aed"
              accentBg="#f5f3ff"
              iconPath="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <StatCard
              title="Active Promo Codes"
              value={stats?.activePromoCodes ?? 0}
              subtitle="Live discount codes"
              accent="#ea580c"
              accentBg="#fff7ed"
              iconPath="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            />
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-[15px] font-semibold text-gray-900">All Enrollments</h2>
                <p className="text-xs text-gray-400 mt-0.5">{enrollments.length} total records</p>
              </div>
            </div>
            <div className="ag-theme-alpine" style={{ height: 520 }}>
              <AgGridReact
                rowData={enrollments}
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
