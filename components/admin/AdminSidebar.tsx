'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'

const NAV_ITEMS = [
  {
    href: '/admin/dashboard',
    label: 'Dashboard',
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} style={{ flexShrink: 0 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    href: '/admin/promo-codes',
    label: 'Promo Codes',
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} style={{ flexShrink: 0 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
]

const SIDEBAR_BG = '#0d1833'
const SIDEBAR_BORDER = '#1a2d52'
const SIDEBAR_ACTIVE = '#1e3d7a'
const SIDEBAR_HOVER = '#152848'
const SIDEBAR_TEXT = '#7a94b8'
const SIDEBAR_LABEL = '#3b5a8a'

function NavItem({
  item,
  active,
  showText,
  onClick,
}: {
  item: typeof NAV_ITEMS[0]
  active: boolean
  showText: boolean
  onClick?: () => void
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={item.href}
      title={!showText ? item.label : undefined}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: showText ? 12 : 0,
        justifyContent: showText ? 'flex-start' : 'center',
        padding: '9px 10px',
        borderRadius: 8,
        textDecoration: 'none',
        color: active ? '#fff' : hovered ? '#d0dff0' : SIDEBAR_TEXT,
        background: active ? SIDEBAR_ACTIVE : hovered ? SIDEBAR_HOVER : 'transparent',
        transition: 'background 0.15s, color 0.15s',
        fontSize: 13.5,
        fontWeight: 500,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      }}
    >
      {item.icon}
      <span
        style={{
          opacity: showText ? 1 : 0,
          width: showText ? 'auto' : 0,
          overflow: 'hidden',
          transition: 'opacity 0.15s',
          whiteSpace: 'nowrap',
        }}
      >
        {item.label}
      </span>
      {active && showText && (
        <span
          style={{
            marginLeft: 'auto',
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#60a5fa',
            flexShrink: 0,
          }}
        />
      )}
    </a>
  )
}

function SidebarInner({
  adminName,
  showText,
  onClose,
  onLogout,
}: {
  adminName: string
  showText: boolean
  onClose?: () => void
  onLogout: () => void
}) {
  const pathname = usePathname()
  const [logoutHovered, setLogoutHovered] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      {/* Logo */}
      <div
        style={{
          height: 60,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '0 12px',
          borderBottom: `1px solid ${SIDEBAR_BORDER}`,
          flexShrink: 0,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            flexShrink: 0,
            width: 36,
            height: 36,
            background: SIDEBAR_ACTIVE,
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: 'white', fontWeight: 800, fontSize: 11, letterSpacing: '-0.5px' }}>BT</span>
        </div>
        <div
          style={{
            overflow: 'hidden',
            opacity: showText ? 1 : 0,
            transition: 'opacity 0.18s',
            whiteSpace: 'nowrap',
            flex: 1,
          }}
        >
          <Image
            src="/logo 1.png"
            alt="BlueTick AI Academy"
            width={128}
            height={36}
            style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
          />
        </div>
        {onClose && (
          <button
            onClick={onClose}
            style={{
              flexShrink: 0,
              color: SIDEBAR_TEXT,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 6,
              borderRadius: 6,
              display: 'flex',
            }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Section label */}
      <div
        style={{
          padding: '18px 16px 4px',
          opacity: showText ? 1 : 0,
          transition: 'opacity 0.15s',
          flexShrink: 0,
        }}
      >
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: SIDEBAR_LABEL, whiteSpace: 'nowrap' }}>
          Main Menu
        </p>
      </div>

      {/* Nav */}
      <nav
        style={{
          flex: 1,
          padding: '4px 8px',
          overflowY: 'auto',
          overflowX: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.href}
            item={item}
            active={pathname === item.href}
            showText={showText}
            onClick={onClose}
          />
        ))}
      </nav>

      {/* User footer */}
      <div style={{ borderTop: `1px solid ${SIDEBAR_BORDER}`, padding: 8, flexShrink: 0 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: showText ? 10 : 0,
            justifyContent: showText ? 'flex-start' : 'center',
            padding: '8px 10px',
            marginBottom: 2,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              flexShrink: 0,
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: SIDEBAR_ACTIVE,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 700,
              fontSize: 12,
            }}
          >
            {adminName.charAt(0).toUpperCase()}
          </div>
          <div
            style={{
              overflow: 'hidden',
              opacity: showText ? 1 : 0,
              transition: 'opacity 0.15s',
              whiteSpace: 'nowrap',
            }}
          >
            <p style={{ color: 'white', fontSize: 13, fontWeight: 500, lineHeight: 1.3 }}>{adminName}</p>
            <p style={{ color: SIDEBAR_LABEL, fontSize: 11 }}>Administrator</p>
          </div>
        </div>

        <button
          onClick={onLogout}
          title={!showText ? 'Sign Out' : undefined}
          onMouseEnter={() => setLogoutHovered(true)}
          onMouseLeave={() => setLogoutHovered(false)}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: showText ? 12 : 0,
            justifyContent: showText ? 'flex-start' : 'center',
            padding: '9px 10px',
            borderRadius: 8,
            background: logoutHovered ? SIDEBAR_HOVER : 'none',
            border: 'none',
            cursor: 'pointer',
            color: logoutHovered ? '#d0dff0' : SIDEBAR_TEXT,
            transition: 'background 0.15s, color 0.15s',
            fontSize: 13,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} style={{ flexShrink: 0 }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span style={{ opacity: showText ? 1 : 0, width: showText ? 'auto' : 0, overflow: 'hidden', transition: 'opacity 0.15s' }}>
            Sign Out
          </span>
        </button>
      </div>
    </div>
  )
}

export default function AdminSidebar({ adminName }: { adminName: string }) {
  const [expanded, setExpanded] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Close mobile drawer on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    localStorage.removeItem('admin_name')
    router.push('/admin/login')
  }

  return (
    <>
      {/* ─── Desktop: fixed, collapsed by default, expands on hover ─── */}
      <aside
        className="hidden md:flex fixed left-0 top-0 h-screen z-40 flex-col"
        style={{
          background: SIDEBAR_BG,
          borderRight: `1px solid ${SIDEBAR_BORDER}`,
          width: expanded ? 240 : 60,
          transition: 'width 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden',
        }}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <SidebarInner adminName={adminName} showText={expanded} onLogout={handleLogout} />
      </aside>

      {/* ─── Mobile: hamburger button (fixed top-left) ─── */}
      <button
        className="md:hidden fixed top-3.5 left-3.5 z-50 w-9 h-9 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center"
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
      >
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="text-gray-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* ─── Mobile: overlay backdrop ─── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ─── Mobile: slide-in drawer ─── */}
      <aside
        className="fixed left-0 top-0 h-screen z-50 flex flex-col md:hidden"
        style={{
          background: SIDEBAR_BG,
          borderRight: `1px solid ${SIDEBAR_BORDER}`,
          width: 260,
          transform: mobileOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <SidebarInner
          adminName={adminName}
          showText={true}
          onClose={() => setMobileOpen(false)}
          onLogout={handleLogout}
        />
      </aside>
    </>
  )
}
