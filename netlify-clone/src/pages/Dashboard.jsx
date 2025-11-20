import React from 'react'
import DashboardCard from '../components/Dashboardcard'

export default function Dashboard() {
  const stats = [
    { title: 'Total Sites', value: '12', subtitle: 'All time', icon: '🌐', color: '#00AD9F' },
    { title: 'Active Deploys', value: '3', subtitle: 'In progress', icon: '🚀', color: '#FF6B6B' },
    { title: 'Bandwidth', value: '45GB', subtitle: 'This month', icon: '📊', color: '#4ECDC4' },
    { title: 'Team Members', value: '5', subtitle: 'Active', icon: '👥', color: '#45B7D1' }
  ]

  const recentSites = [
    { name: 'my-portfolio', status: 'Published', lastDeploy: '2 hours ago' },
    { name: 'blog-site', status: 'Building', lastDeploy: '5 minutes ago' },
    { name: 'ecommerce-app', status: 'Published', lastDeploy: '1 day ago' }
  ]

  return (
    <section className="page-container">
      <h2 className="page-title">Dashboard</h2>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <DashboardCard key={index} {...stat} />
        ))}
      </div>

      <div className="card">
        <h3>Recent Sites</h3>
        <div className="sites-list">
          {recentSites.map((site, index) => (
            <div key={index} className="site-item">
              <div className="site-info">
                <strong>{site.name}</strong>
                <span className={`status ${site.status.toLowerCase()}`}>
                  {site.status}
                </span>
              </div>
              <div className="site-meta">
                <span>Last deploy: {site.lastDeploy}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}