import React from 'react'

export default function DashboardCard({ title, value, subtitle, icon, color = '#00AD9F' }) {
  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h3>{title}</h3>
        <span className="card-icon" style={{ backgroundColor: color }}>
          {icon}
        </span>
      </div>
      <div className="card-content">
        <h2>{value}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}