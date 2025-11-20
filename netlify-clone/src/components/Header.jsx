import React from 'react'

export default function Header({ onLogout }) {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon">▲</span>
        <span className="logo-text">Netlify Clone</span>
      </div>
      <div className="header-actions">
        <button className="btn btn-secondary" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  )
}