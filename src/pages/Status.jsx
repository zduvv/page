import { useState, useEffect } from 'react'

function Status() {
  const [shards, setShards] = useState([])

  useEffect(() => {
    // Generate mock shard data
    const mockShards = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      status: Math.random() > 0.1 ? 'online' : 'degraded',
      ping: Math.floor(Math.random() * 80) + 20,
      guilds: Math.floor(Math.random() * 500) + 50,
      uptime: `${Math.floor(Math.random() * 72) + 1}h ${Math.floor(Math.random() * 60)}m`,
    }))
    setShards(mockShards)
  }, [])

  const onlineShards = shards.filter(s => s.status === 'online').length
  const avgPing = shards.length > 0
    ? Math.round(shards.reduce((acc, s) => acc + s.ping, 0) / shards.length)
    : 0
  const totalGuilds = shards.reduce((acc, s) => acc + s.guilds, 0)

  return (
    <div className="page-content">
      <div className="section-container">
        <div className="page-header">
          <h1>Shards</h1>
          <p className="page-subtitle">Real-time status of all tried shards</p>
        </div>

        <div className="status-overview">
          <div className="status-stat">
            <div className="status-stat-value">{onlineShards}/{shards.length}</div>
            <div className="status-stat-label">Shards Online</div>
          </div>
          <div className="status-stat">
            <div className="status-stat-value">{avgPing}ms</div>
            <div className="status-stat-label">Avg Latency</div>
          </div>
          <div className="status-stat">
            <div className="status-stat-value">{totalGuilds.toLocaleString()}</div>
            <div className="status-stat-label">Total Guilds</div>
          </div>
        </div>

        <div className="shards-grid">
          {shards.map((shard) => (
            <div key={shard.id} className={`shard-card ${shard.status}`}>
              <div className="shard-header">
                <span className="shard-id">Shard {shard.id}</span>
                <span className={`shard-status-dot ${shard.status}`}></span>
              </div>
              <div className="shard-details">
                <div className="shard-detail">
                  <span className="shard-label">Ping</span>
                  <span className="shard-value">{shard.ping}ms</span>
                </div>
                <div className="shard-detail">
                  <span className="shard-label">Guilds</span>
                  <span className="shard-value">{shard.guilds}</span>
                </div>
                <div className="shard-detail">
                  <span className="shard-label">Uptime</span>
                  <span className="shard-value">{shard.uptime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Status
