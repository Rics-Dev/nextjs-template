import React from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Dashboard header */}
      <header className="border-b bg-background sticky top-0 z-10">
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <h1 className="text-lg font-semibold">Hackathon Dashboard</h1>
          <nav className="ml-auto flex gap-4">
            <a href="/dashboard" className="text-sm font-medium hover:underline">Overview</a>
            <a href="/dashboard/analytics" className="text-sm font-medium hover:underline">Analytics</a>
            <a href="/dashboard/settings" className="text-sm font-medium hover:underline">Settings</a>
          </nav>
        </div>
      </header>
      
      {/* Dashboard content */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}