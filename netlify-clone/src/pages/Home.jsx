import React from 'react'

export default function Home() {
  return (
    <section className="page-container">
      <div className="hero-section">
        <h1>Welcome to Netlify Clone</h1>
        <p>Deploy your websites with ease using our Netlify-inspired platform</p>
        <div className="hero-features">
          <div className="feature-card">
            <h3>🚀 Fast Deploys</h3>
            <p>Deploy your sites in seconds</p>
          </div>
          <div className="feature-card">
            <h3>🔒 Secure</h3>
            <p>HTTPS and SSL included</p>
          </div>
          <div className="feature-card">
            <h3>⚡ CDN</h3>
            <p>Global content delivery network</p>
          </div>
        </div>
      </div>
    </section>
  )
}