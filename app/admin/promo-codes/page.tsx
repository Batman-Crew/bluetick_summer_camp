'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { AgGridReact } from 'ag-grid-react'
import { ColDef, ModuleRegistry, AllCommunityModule } from 'ag-grid-community'
import AdminSidebar from '@/components/admin/AdminSidebar'

ModuleRegistry.registerModules([AllCommunityModule])

interface PromoCode {
  id: number
  code: string
  discount: number
  label: string
  active: boolean
  usageCount: number
  createdAt: string
}

interface FormState {
  code: string
  discount: string
  label: string
  active: boolean
}

const EMPTY_FORM: FormState = { code: '', discount: '', label: '', active: true }

export default function PromoCodesPage() {
  const router = useRouter()
  const [promoCodes, setPromoCodes] = useState<PromoCode[]>([])
  const [loading, setLoading] = useState(true)
  const [adminName, setAdminName] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [editing, setEditing] = useState<PromoCode | null>(null)
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const getToken = useCallback(() => localStorage.getItem('admin_token') ?? '', [])

  const fetchCodes = useCallback(async () => {
    const token = getToken()
    if (!token) { router.push('/admin/login'); return }
    const res = await fetch('/api/admin/promo-codes', { headers: { Authorization: `Bearer ${token}` } })
    if (res.status === 401) { router.push('/admin/login'); return }
    setPromoCodes(await res.json())
    setLoading(false)
  }, [getToken, router])

  useEffect(() => {
    setAdminName(localStorage.getItem('admin_name') ?? 'Admin')
    fetchCodes()
  }, [fetchCodes])

  const openCreate = () => { setEditing(null); setForm(EMPTY_FORM); setError(''); setShowModal(true) }
  const openEdit = (promo: PromoCode) => {
    setEditing(promo)
    setForm({ code: promo.code, discount: String(promo.discount), label: promo.label, active: promo.active })
    setError('')
    setShowModal(true)
  }

  const handleSave = async () => {
    if (!form.code || !form.discount || !form.label) { setError('All fields are required'); return }
    setSaving(true)
    setError('')
    const token = getToken()
    const url = editing ? `/api/admin/promo-codes/${editing.id}` : '/api/admin/promo-codes'
    const method = editing ? 'PATCH' : 'POST'
    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ ...form, discount: Number(form.discount) }),
      })
      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Save failed')
        return
      }
      setShowModal(false)
      fetchCodes()
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this promo code?')) return
    const token = getToken()
    await fetch(`/api/admin/promo-codes/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    })
    fetchCodes()
  }

  const handleToggleActive = async (promo: PromoCode) => {
    const token = getToken()
    await fetch(`/api/admin/promo-codes/${promo.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ active: !promo.active }),
    })
    fetchCodes()
  }

  const colDefs = useMemo<ColDef<PromoCode>[]>(() => [
    { field: 'code', headerName: 'Code', flex: 1, minWidth: 140,
      cellRenderer: (p: { value: string }) => (
        <code className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-xs font-mono">{p.value}</code>
      )
    },
    { field: 'discount', headerName: 'Discount', width: 120, valueFormatter: (p) => `${p.value}%` },
    { field: 'label', headerName: 'Label', flex: 1, minWidth: 150 },
    { field: 'usageCount', headerName: 'Used', width: 100, type: 'numericColumn' },
    {
      field: 'active', headerName: 'Status', width: 120,
      cellRenderer: (p: { value: boolean; data: PromoCode }) => (
        <button
          onClick={() => handleToggleActive(p.data)}
          className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium cursor-pointer ${p.value ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}
        >
          {p.value ? 'Active' : 'Inactive'}
        </button>
      ),
    },
    { field: 'createdAt', headerName: 'Created', width: 130, valueFormatter: (p) => new Date(p.value).toLocaleDateString('en-IN') },
    {
      headerName: 'Actions', width: 140, sortable: false, filter: false,
      cellRenderer: (p: { data: PromoCode }) => (
        <div className="flex items-center gap-2 h-full">
          <button onClick={() => openEdit(p.data)} className="text-blue-600 hover:text-blue-800 text-xs font-medium">Edit</button>
          <span className="text-gray-300">|</span>
          <button onClick={() => handleDelete(p.data.id)} className="text-red-500 hover:text-red-700 text-xs font-medium">Delete</button>
        </div>
      ),
    },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [promoCodes])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#f1f5f9' }}>
        <div className="text-center">
          <div className="w-10 h-10 border-[3px] border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-gray-400 text-sm">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: '#f1f5f9' }}>
      <AdminSidebar adminName={adminName} />

      {/* Content — offset by collapsed sidebar on md+, full width on mobile */}
      <div className="md:pl-[60px] flex flex-col min-h-screen">
        <header className="sticky top-0 z-30 bg-white border-b border-gray-100 flex items-center justify-between px-4 py-3.5 md:px-8 md:py-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 shrink-0 md:hidden" />
            <div className="min-w-0">
              <h1 className="text-[17px] font-bold text-gray-900 leading-tight">Promo Codes</h1>
              <p className="text-xs text-gray-400 mt-0.5 hidden sm:block">Manage discount codes for enrollments</p>
            </div>
          </div>
          <button
            onClick={openCreate}
            className="flex items-center gap-1.5 px-3 py-2 md:px-4 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition shrink-0"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span className="hidden sm:inline">New Promo Code</span>
            <span className="sm:hidden">New</span>
          </button>
        </header>

        <div className="flex-1 p-4 md:p-8">
          {/* Summary row */}
          <div className="grid grid-cols-3 gap-3 md:gap-5 mb-5 md:mb-8">
            <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100">
              <p className="text-xs md:text-sm text-gray-500">Total Codes</p>
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">{promoCodes.length}</p>
            </div>
            <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100">
              <p className="text-xs md:text-sm text-gray-500">Active Codes</p>
              <p className="text-2xl md:text-3xl font-bold text-green-600 mt-1">{promoCodes.filter((c) => c.active).length}</p>
            </div>
            <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100">
              <p className="text-xs md:text-sm text-gray-500">Total Uses</p>
              <p className="text-2xl md:text-3xl font-bold text-blue-600 mt-1">{promoCodes.reduce((s, c) => s + c.usageCount, 0)}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-base font-semibold text-gray-900">All Promo Codes</h2>
            </div>
            <div className="ag-theme-alpine" style={{ height: 450 }}>
              <AgGridReact
                rowData={promoCodes}
                columnDefs={colDefs}
                defaultColDef={{ sortable: true, filter: true, resizable: true }}
                pagination={true}
                paginationPageSize={10}
                suppressCellFocus={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-900">{editing ? 'Edit Promo Code' : 'New Promo Code'}</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-6 py-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Code</label>
                <input
                  type="text"
                  value={form.code}
                  onChange={(e) => setForm({ ...form, code: e.target.value.toUpperCase() })}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono uppercase"
                  placeholder="SUMMER10"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Discount (%)</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={form.discount}
                  onChange={(e) => setForm({ ...form, discount: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="10"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Label</label>
                <input
                  type="text"
                  value={form.label}
                  onChange={(e) => setForm({ ...form, label: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="10% off"
                />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="active"
                  checked={form.active}
                  onChange={(e) => setForm({ ...form, active: e.target.checked })}
                  className="w-4 h-4 accent-blue-600"
                />
                <label htmlFor="active" className="text-sm text-gray-700">Active</label>
              </div>

              {error && <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>}
            </div>

            <div className="px-6 py-4 border-t border-gray-100 flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition disabled:opacity-60"
              >
                {saving ? 'Saving...' : editing ? 'Update' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
