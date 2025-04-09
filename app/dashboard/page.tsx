import React from 'react'

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dashboard cards */}
        <DashboardCard 
          title="Statistics" 
          value="1,234" 
          description="Total users"
        />
        <DashboardCard 
          title="Revenue" 
          value="$5,678" 
          description="This month"
        />
        <DashboardCard 
          title="Activity" 
          value="89%" 
          description="Engagement rate"
        />
      </div>
    </div>
  )
}

// Example dashboard component
function DashboardCard({ 
  title, 
  value, 
  description 
}: { 
  title: string
  value: string
  description: string
}) {
  return (
    <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-6">
      <h3 className="font-medium text-muted-foreground mb-2">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </div>
  )
}