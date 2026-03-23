import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [isVisible, setIsVisible] = useState({})
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observerRef.current.observe(el)
    })
    return () => observerRef.current?.disconnect()
  }, [])

  const servers = [
    { name: "Velocity", members: "312,450" },
    { name: "Nightfall Gaming", members: "198,230" },
    { name: "Creative Hub", members: "145,890" },
    { name: "Music Lounge", members: "89,420" },
    { name: "Anime World", members: "256,100" },
    { name: "Tech Talks", members: "67,850" },
    { name: "Art & Design", members: "43,210" },
    { name: "Chill Zone", members: "178,650" },
    { name: "Sports Central", members: "92,340" },
    { name: "Study Together", members: "54,780" },
    { name: "Meme Factory", members: "221,500" },
    { name: "Movie Nights", members: "38,920" },
  ]

  const testimonials = [
    {
      name: "Marcus",
      title: "Server Owner",
      server: "Velocity",
      members: "312k",
      text: "Switching to tried was one of the best decisions for our community. The setup was effortless and the moderation tools genuinely work. Our staff can focus on engagement instead of firefighting."
    },
    {
      name: "Sophie",
      title: "Server Owner",
      server: "Nightfall Gaming",
      members: "198k",
      text: "tried keeps our gaming server running smoothly around the clock. The integrations with streaming platforms and the music system are exactly what we needed."
    },
    {
      name: "Jay",
      title: "Server Manager",
      server: "Creative Hub",
      members: "145k",
      text: "We manage a large creative community and tried handles everything — from welcoming new members to tracking engagement. The voicemaster feature is a favorite among our artists."
    },
    {
      name: "Elena",
      title: "Server Manager",
      server: "Anime World",
      members: "256k",
      text: "After trying several bots, tried stood out for its reliability and feature depth. The anti-raid protection alone has saved us from multiple targeted attacks."
    }
  ]

  const features = [
    { title: "Filters", description: "Keep any chat clean with our many automated filtering options.", icon: "🛡️" },
    { title: "Fake Permissions", description: "Remove all dangerous Discord permissions that can be exploited through API abuse.", icon: "🔐" },
    { title: "Anti-Nuke", description: "Prevent your server from malicious attacks and griefing, with a customizable threshold.", icon: "💣" },
    { title: "Anti-Raid", description: "Protect against targeted bot raids with mass join, avatar, and account age filters.", icon: "🚫" }
  ]

  const integrations = [
    { name: "Last.fm", features: "View your current track, Recent Tracks. Search Artists, Profiles. Track Leaderboards. and 50+ more.", icon: "🎵" },
    { name: "Spotify", features: "Play, Queue, Control your Music. Listen in any Voice Channel. and 14+ more.", icon: "🎧" },
    { name: "Instagram", features: "Search, View Profiles. Track Feeds. Notify any channel about New Posts.", icon: "📸" },
    { name: "X", features: "Search, View Profiles. Track Feeds. Notify any channel about New Posts, Retweets.", icon: "𝕏" },
    { name: "Pinterest", features: "Use Lens Search on images. Search, View Profiles. Embed Live Feed into any channel.", icon: "📌" },
    { name: "SoundCloud", features: "Search Songs. Track Feeds. Notify any channel about New Posts.", icon: "🔊" },
    { name: "TikTok", features: "Search Profiles. Track Feeds. Notify any channel about New Posts.", icon: "🎬" }
  ]

  const otherFeatures = [
    { title: "Browser Searching", desc: "Reverse search images, query images or search online for any website result.", icon: "🔍" },
    { title: "Text To Speech", desc: "Convert text into generated voice audio, or have tried speak live in any channel. Over 80+ voices.", icon: "🗣️" },
    { title: "Levels", desc: "Leveling system for users in your server to level up and track experience.", icon: "📈" },
    { title: "Snipe", desc: "Advanced sniping system to get images, videos, edits & reactions.", icon: "🎯" },
    { title: "Giveaways", desc: "Host giveaways fast and easily for your server's members.", icon: "🎁" },
    { title: "Games", desc: "Play blacktea and tic-tac-toe with your friends.", icon: "🎮" },
    { title: "Auto Responders", desc: "Set up automatic replies to messages that match a trigger.", icon: "⚡" },
    { title: "Bump Reminder", desc: "Get reminders to /bump your server on Disboard.", icon: "🔔" },
    { title: "Counters", desc: "Create counter channels for simple server statistics.", icon: "📊" },
    { title: "Reaction Triggers", desc: "Set up advanced triggers to messages or previous messages.", icon: "💥" },
    { title: "Image Manipulation", desc: "Turn images, videos and GIFs into memes easily.", icon: "🖼️" },
    { title: "Translation", desc: "Translate text quickly. Over 100+ languages.", icon: "🌐" }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-content">
          <h1>
            <span className="hero-title-line">tried is Discord's</span>
            <span className="hero-title-accent">premier all-in-one app</span>
          </h1>
          <p>The ultimate bot for management and engagement. Built to elevate your community's experience, streamline server management, and give you access to premium resources for every necessity.</p>
          
          <div className="hero-buttons">
            <a href="https://discord.gg/tried" target="_blank" rel="noopener noreferrer">
              <button className="btn-primary">
                <span className="btn-icon">🚀</span>
                Invite to Discord
              </button>
            </a>
            <a href="https://discord.gg/tried" target="_blank" rel="noopener noreferrer">
              <button className="btn-secondary">
                <span className="btn-icon">💎</span>
                Purchase
              </button>
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-dot"></span>
              <p>Powering <strong>50,000+</strong> users across <strong>500+</strong> communities</p>
            </div>
          </div>
        </div>

        <div className="hero-features">
          <div className="feature-badge">
            <span className="badge-icon">📊</span>
            <span>boost perks</span>
          </div>
          <div className="feature-badge">
            <span className="badge-icon">🎁</span>
            <span>vanity rewards</span>
          </div>
          <div className="feature-badge">
            <span className="badge-icon">📱</span>
            <span>social media</span>
          </div>
        </div>
      </section>

      {/* Servers Marquee */}
      <section className="servers-section">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...servers, ...servers].map((server, idx) => (
              <div key={idx} className="server-card">
                <div className="server-avatar">
                  <span>{server.name.charAt(0)}</span>
                </div>
                <div className="server-info">
                  <h3>{server.name}</h3>
                  <p>{server.members} members</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moderation Section */}
      <section className="moderation-section animate-on-scroll" id="section-mod">
        <div className="section-container">
          <div className="section-label">Security</div>
          <h2>Premium Moderation and Security</h2>
          <p className="section-desc">We provide you with the best tools to keep your community clean and secure.</p>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="card-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="section-link">
            <Link to="/commands">100+ more commands →</Link>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="integrations-section animate-on-scroll" id="section-int">
        <div className="section-container">
          <div className="section-label">Platforms</div>
          <h2>Integrations with your favorite Platforms</h2>
          <p className="section-desc">Effortlessly track, view, search, play, notify updates and more from many platforms.</p>
          <div className="marquee-wrapper integrations-marquee">
            <div className="marquee-track marquee-slow">
              {[...integrations, ...integrations].map((integration, idx) => (
                <div key={idx} className="integration-card">
                  <div className="card-icon">{integration.icon}</div>
                  <h3>{integration.name}</h3>
                  <p>{integration.features}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Voicemaster Section */}
      <section className="voicemaster-section animate-on-scroll" id="section-vm">
        <div className="section-container">
          <div className="section-label">Voice</div>
          <h2>Personal channels with Voicemaster</h2>
          <p className="section-desc">Temporary personalized voice channels for your community.</p>
          <div className="voicemaster-features">
            <div className="vm-feature">
              <div className="card-icon">🎛️</div>
              <h3>Voicemaster Interface</h3>
              <p>Powerful control for your personal voice channel, with an intuitive, built-in chat interface.</p>
            </div>
            <div className="vm-feature">
              <div className="card-icon">⚡</div>
              <h3>Easy Setup</h3>
              <p>Spend seconds not hours. One command, it's ready to go.</p>
            </div>
            <div className="vm-feature">
              <div className="card-icon">🎭</div>
              <h3>Roles</h3>
              <p>Grant custom roles to members joined in your voice channel.</p>
            </div>
          </div>
          <div className="section-link">
            <Link to="/commands">20+ more commands →</Link>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="music-section animate-on-scroll" id="section-music">
        <div className="section-container">
          <div className="section-label">Music</div>
          <h2>Music features built For Everyone</h2>
          <p className="section-desc">Premium audio quality and commands for a superior music experience.</p>
          <div className="music-features">
            <div className="music-feature">
              <div className="card-icon">🎚️</div>
              <h3>Preset Filters</h3>
              <p>On-the-fly generation to transform any music into an immersive listening experience.</p>
            </div>
            <div className="music-feature">
              <div className="card-icon">📋</div>
              <h3>Queue</h3>
              <p>Listen to music after music, uninterrupted, all day.</p>
            </div>
            <div className="music-feature">
              <div className="card-icon">🎧</div>
              <h3>Spotify</h3>
              <p>Fully integrated and capable, with Spotify.</p>
            </div>
          </div>
          <div className="section-link">
            <Link to="/commands">20+ more commands →</Link>
          </div>
        </div>
      </section>

      {/* More Features Section */}
      <section className="more-features-section animate-on-scroll" id="section-more">
        <div className="section-container">
          <div className="section-label">And More</div>
          <h2>Countless more Features</h2>
          <p className="section-desc">Never worry about needing another bot for anything else, we've got all your needs covered.</p>
          <div className="features-grid-large">
            {otherFeatures.map((feature, idx) => (
              <div key={idx} className="feature-item" style={{ animationDelay: `${idx * 0.05}s` }}>
                <div className="feature-item-icon">{feature.icon}</div>
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="section-link">
            <Link to="/commands">All Commands →</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section animate-on-scroll" id="section-test">
        <div className="section-container">
          <h2>Loved and Trusted by the largest Servers</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <span>{testimonial.name.charAt(0)}</span>
                  </div>
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.title}</p>
                    <span className="server-badge">{testimonial.server} • {testimonial.members} members</span>
                  </div>
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-glow"></div>
        <div className="section-container">
          <h2>Enhance your community's experience.</h2>
          <p className="cta-subtitle">Get tried in your server today.</p>
          <a href="https://discord.gg/tried" target="_blank" rel="noopener noreferrer">
            <button className="btn-primary btn-cta">
              <span className="btn-icon">🚀</span>
              Get started
            </button>
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
