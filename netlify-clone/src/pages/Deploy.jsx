import React, { useState } from 'react'

export default function Deploy() {
  const [deployLogs, setDeployLogs] = useState([])
  const [isDeploying, setIsDeploying] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState([])
  const [siteName, setSiteName] = useState('')
  const [deployMethod, setDeployMethod] = useState('files') // 'files' or 'github'

  // GitHub deployment state
  const [repoUrl, setRepoUrl] = useState('')
  const [branch, setBranch] = useState('main')

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files)
    setSelectedFiles(files)
    
    // Add to logs
    addToLogs(`📁 Selected ${files.length} files for deployment`)
    files.forEach(file => {
      addToLogs(`📄 ${file.name} (${(file.size / 1024).toFixed(2)} KB)`)
    })
  }

  const addToLogs = (message) => {
    setDeployLogs(prev => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] ${message}`
    ])
  }

  const simulateDeployment = async () => {
    setIsDeploying(true)
    setDeployLogs([])
    
    try {
      addToLogs('🚀 Starting deployment process...')
      
      if (deployMethod === 'files' && selectedFiles.length > 0) {
        addToLogs('📦 Processing files...')
        
        // Simulate file processing
        await new Promise(resolve => setTimeout(resolve, 1000))
        addToLogs('✅ Files processed successfully')
        
        await new Promise(resolve => setTimeout(resolve, 500))
        addToLogs('🔨 Building project...')
        
        await new Promise(resolve => setTimeout(resolve, 1500))
        addToLogs('✅ Build completed')
        
        await new Promise(resolve => setTimeout(resolve, 800))
        addToLogs('🌐 Deploying to global CDN...')
        
        await new Promise(resolve => setTimeout(resolve, 1200))
        addToLogs('🎉 Deployment successful!')
        addToLogs(`🔗 Your site is live at: https://${siteName || 'my-site'}.netlify-clone.app`)
        
      } else if (deployMethod === 'github' && repoUrl) {
        addToLogs(`🔗 Connecting to repository: ${repoUrl}`)
        
        await new Promise(resolve => setTimeout(resolve, 1000))
        addToLogs(`🌿 Using branch: ${branch}`)
        
        await new Promise(resolve => setTimeout(resolve, 1500))
        addToLogs('📥 Cloning repository...')
        
        await new Promise(resolve => setTimeout(resolve, 2000))
        addToLogs('✅ Repository cloned successfully')
        
        await new Promise(resolve => setTimeout(resolve, 1000))
        addToLogs('🔨 Building project from source...')
        
        await new Promise(resolve => setTimeout(resolve, 2000))
        addToLogs('✅ Build completed')
        
        await new Promise(resolve => setTimeout(resolve, 1000))
        addToLogs('🌐 Deploying to global CDN...')
        
        await new Promise(resolve => setTimeout(resolve, 1500))
        addToLogs('🎉 Deployment successful!')
        addToLogs(`🔗 Your site is live at: https://${getRepoName(repoUrl)}.netlify-clone.app`)
        
      } else {
        addToLogs('❌ Please select files or provide repository URL')
      }
      
    } catch (error) {
      addToLogs(`❌ Deployment failed: ${error.message}`)
    } finally {
      setIsDeploying(false)
    }
  }

  const getRepoName = (url) => {
    const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/)
    return match ? match[2] : 'my-repo'
  }

  const clearLogs = () => {
    setDeployLogs([])
  }

  return (
    <section className="page-container">
      <h2 className="page-title">Deploy</h2>
      
      <div className="card">
        <h3>New Deployment</h3>
        
        <div className="deploy-method-selector">
          <button 
            className={`method-btn ${deployMethod === 'files' ? 'active' : ''}`}
            onClick={() => setDeployMethod('files')}
          >
            📁 Upload Files
          </button>
          <button 
            className={`method-btn ${deployMethod === 'github' ? 'active' : ''}`}
            onClick={() => setDeployMethod('github')}
          >
            🔗 GitHub Repository
          </button>
        </div>

        {deployMethod === 'files' ? (
          <div className="deploy-form">
            <div className="form-group">
              <label>Site Name (Optional)</label>
              <input 
                type="text" 
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                placeholder="my-awesome-site"
              />
            </div>
            
            <div className="form-group">
              <label>Upload Project Files</label>
              <div className="file-upload-area">
                <input 
                  type="file"
                  multiple
                  onChange={handleFileSelect}
                  className="file-input"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="file-upload-label">
                  📁 Choose Files or Drag & Drop
                </label>
                {selectedFiles.length > 0 && (
                  <div className="selected-files">
                    <strong>Selected files:</strong>
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="file-item">
                        {file.name} ({(file.size / 1024).toFixed(1)} KB)
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="deploy-form">
            <div className="form-group">
              <label>GitHub Repository URL</label>
              <input 
                type="text" 
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                placeholder="https://github.com/username/repository"
              />
            </div>
            
            <div className="form-group">
              <label>Branch</label>
              <input 
                type="text" 
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                placeholder="main"
              />
            </div>
          </div>
        )}

        <div className="deploy-actions">
          <button 
            className={`btn btn-primary ${isDeploying ? 'deploying' : ''}`}
            onClick={simulateDeployment}
            disabled={isDeploying || 
              (deployMethod === 'files' && selectedFiles.length === 0) ||
              (deployMethod === 'github' && !repoUrl)
            }
          >
            {isDeploying ? '🔄 Deploying...' : '🚀 Deploy Site'}
          </button>
          
          <button 
            className="btn btn-secondary"
            onClick={clearLogs}
            disabled={isDeploying}
          >
            Clear Logs
          </button>
        </div>
      </div>

      <div className="card">
        <div className="logs-header">
          <h3>Deployment Logs</h3>
          <span className="logs-count">{deployLogs.length} entries</span>
        </div>
        
        <div className="logs-container">
          {deployLogs.length === 0 ? (
            <div className="empty-logs">
              <p>No deployment logs yet. Start a deployment to see logs here.</p>
            </div>
          ) : (
            deployLogs.map((log, index) => (
              <div key={index} className="log-entry">
                {log}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}