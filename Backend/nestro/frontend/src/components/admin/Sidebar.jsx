'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    LayoutDashboard,
    Users,
    Car,
    Wrench,
    Receipt,
    ChevronLeft,
    ChevronRight,
    Gauge,
    LogOut,
} from 'lucide-react'

export default function Sidebar() {
    const pathname = usePathname()
    const [collapsed, setCollapsed] = useState(false)

    const navItems = [
        { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { label: 'Category', href: '/admin/category', icon: Users },
        { label: 'Room-type', href: '/admin/room-type', icon: Car },
        { label: 'Product', href: '/admin/product', icon: Wrench },
        { label: 'Orders', href: '/admin/order', icon: Receipt },
    ]

    return (
        <aside className={`sticky top-0 left-0 h-screen bg-[#0d1b2a] text-white border-r border-white/5 transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>

            {/* Header */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-white/5">

                <div className="flex items-center gap-3 overflow-hidden">

                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 shrink-0">
                        <Gauge onClick={() => setCollapsed(!collapsed)} className="w-5 h-5" />
                    </div>

                    {!collapsed && (
                        <div>
                            <p className="text-sm font-bold">AdminPanel</p>
                            <p className="text-[10px] text-teal-400">
                                Pro Dashboard
                            </p>
                        </div>
                    )}

                </div>
                {
                    !collapsed &&
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/10"
                    >

                        <ChevronRight className="w-4 h-4" />

                    </button>

                }



            </div>

            {!collapsed && (
                <p className="px-4 pt-5 pb-2 text-[10px] uppercase tracking-widest text-slate-500">
                    Main Menu
                </p>
            )}

            {/* Navigation */}
            <nav className="px-2 space-y-1">

                {navItems.map((item) => {

                    const Icon = item.icon
                    const active = pathname === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`relative flex items-center rounded-xl transition-all duration-200 ${collapsed ? 'justify-center px-0 h-12' : 'gap-3 px-3 py-2.5'} ${active
                                ? 'bg-gradient-to-r from-teal-500/20 to-teal-600/10 text-teal-400 border border-teal-500/20'
                                : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                }`}
                        >

                            {active && (
                                <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r bg-teal-400"></span>
                            )}

                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-500/20 shrink-0">
                                <Icon className="w-5 h-5" />
                            </div>

                            {!collapsed && (
                                <span className="text-sm font-medium">
                                    {item.label}
                                </span>
                            )}

                        </Link>
                    )

                })}

            </nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 w-full p-3 border-t border-white/5">

                <div className={`flex items-center ${collapsed ? 'justify-center' : 'justify-between'}`}>

                    {!collapsed && (
                        <div>
                            <p className="text-sm font-semibold">
                                Admin
                            </p>
                            <p className="text-[10px] text-slate-500">
                                Super Admin
                            </p>
                        </div>
                    )}

                    <button className="p-2 rounded-lg hover:bg-white/10 hover:text-red-400">
                        <LogOut className="w-4 h-4" />
                    </button>

                </div>

            </div>

        </aside>
    )
}