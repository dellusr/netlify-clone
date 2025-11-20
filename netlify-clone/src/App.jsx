import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Deploy from './pages/Deploy'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
    setCurrentPage('dashboard')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentPage('home')
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <div className="app">
      <Header onLogout={handleLogout} />
      <div className="main-container">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="main-content">
          {currentPage === 'home' && <Home />}
          {currentPage === 'dashboard' && <Dashboard />}
          {currentPage === 'deploy' && <Deploy />}
        </main>
      </div>
    </div>
  )
}

export default App