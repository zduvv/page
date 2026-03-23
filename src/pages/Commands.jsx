import { useState } from 'react'

const commandCategories = [
  {
    name: "Moderation",
    icon: "🛡️",
    commands: [
      { name: "ban", usage: "ban <user> [reason]", description: "Ban a member from the server" },
      { name: "kick", usage: "kick <user> [reason]", description: "Kick a member from the server" },
      { name: "mute", usage: "mute <user> [duration] [reason]", description: "Mute a member in the server" },
      { name: "unmute", usage: "unmute <user>", description: "Unmute a muted member" },
      { name: "warn", usage: "warn <user> [reason]", description: "Warn a member" },
      { name: "purge", usage: "purge <amount>", description: "Delete a number of messages from a channel" },
      { name: "slowmode", usage: "slowmode <seconds>", description: "Set channel slowmode" },
      { name: "lock", usage: "lock [channel]", description: "Lock a channel to prevent messages" },
      { name: "unlock", usage: "unlock [channel]", description: "Unlock a locked channel" },
      { name: "role", usage: "role <user> <role>", description: "Add or remove a role from a member" },
      { name: "massban", usage: "massban <users...>", description: "Ban multiple members at once" },
      { name: "softban", usage: "softban <user> [reason]", description: "Softban a member (ban and instantly unban)" },
      { name: "strip", usage: "strip <user>", description: "Remove all roles from a member" },
      { name: "jail", usage: "jail <user> [reason]", description: "Jail a member restricting their access" },
      { name: "unjail", usage: "unjail <user>", description: "Release a jailed member" },
    ]
  },
  {
    name: "Security",
    icon: "🔐",
    commands: [
      { name: "antinuke", usage: "antinuke <on/off>", description: "Toggle anti-nuke protection" },
      { name: "antinuke threshold", usage: "antinuke threshold <number>", description: "Set the anti-nuke action threshold" },
      { name: "antinuke whitelist", usage: "antinuke whitelist <user>", description: "Whitelist a user from anti-nuke" },
      { name: "antiraid", usage: "antiraid <on/off>", description: "Toggle anti-raid protection" },
      { name: "antiraid massjoin", usage: "antiraid massjoin <limit>", description: "Set mass join threshold" },
      { name: "fakepermissions", usage: "fakepermissions <user> <permission>", description: "Grant fake permissions to a member" },
      { name: "filter", usage: "filter <add/remove> <word>", description: "Manage word filters" },
      { name: "automod", usage: "automod <setting>", description: "Configure automod settings" },
    ]
  },
  {
    name: "Music",
    icon: "🎵",
    commands: [
      { name: "play", usage: "play <query>", description: "Play a song or playlist" },
      { name: "skip", usage: "skip", description: "Skip the current track" },
      { name: "pause", usage: "pause", description: "Pause the current track" },
      { name: "resume", usage: "resume", description: "Resume playback" },
      { name: "queue", usage: "queue", description: "View the current queue" },
      { name: "volume", usage: "volume <1-100>", description: "Adjust playback volume" },
      { name: "shuffle", usage: "shuffle", description: "Shuffle the queue" },
      { name: "loop", usage: "loop <track/queue/off>", description: "Set loop mode" },
      { name: "nowplaying", usage: "nowplaying", description: "Show the currently playing track" },
      { name: "filter", usage: "filter <preset>", description: "Apply an audio filter preset" },
      { name: "seek", usage: "seek <time>", description: "Seek to a position in the track" },
      { name: "disconnect", usage: "disconnect", description: "Disconnect from voice channel" },
    ]
  },
  {
    name: "Voicemaster",
    icon: "🎛️",
    commands: [
      { name: "voicemaster setup", usage: "voicemaster setup", description: "Set up Voicemaster in your server" },
      { name: "voicemaster lock", usage: "voicemaster lock", description: "Lock your voice channel" },
      { name: "voicemaster unlock", usage: "voicemaster unlock", description: "Unlock your voice channel" },
      { name: "voicemaster rename", usage: "voicemaster rename <name>", description: "Rename your voice channel" },
      { name: "voicemaster limit", usage: "voicemaster limit <number>", description: "Set user limit for your channel" },
      { name: "voicemaster claim", usage: "voicemaster claim", description: "Claim ownership of a channel" },
      { name: "voicemaster permit", usage: "voicemaster permit <user>", description: "Permit a user to join" },
      { name: "voicemaster reject", usage: "voicemaster reject <user>", description: "Reject a user from joining" },
      { name: "voicemaster ghost", usage: "voicemaster ghost", description: "Hide your channel" },
      { name: "voicemaster unghost", usage: "voicemaster unghost", description: "Unhide your channel" },
    ]
  },
  {
    name: "Integrations",
    icon: "🔗",
    commands: [
      { name: "lastfm", usage: "lastfm <subcommand>", description: "Last.fm integration commands" },
      { name: "spotify", usage: "spotify <subcommand>", description: "Spotify integration commands" },
      { name: "instagram", usage: "instagram <user>", description: "View an Instagram profile" },
      { name: "twitter", usage: "twitter <user>", description: "View a Twitter/X profile" },
      { name: "tiktok", usage: "tiktok <user>", description: "View a TikTok profile" },
      { name: "pinterest", usage: "pinterest <query>", description: "Search Pinterest" },
      { name: "soundcloud", usage: "soundcloud <query>", description: "Search SoundCloud" },
    ]
  },
  {
    name: "Utility",
    icon: "⚙️",
    commands: [
      { name: "avatar", usage: "avatar [user]", description: "View a user's avatar" },
      { name: "banner", usage: "banner [user]", description: "View a user's banner" },
      { name: "userinfo", usage: "userinfo [user]", description: "View information about a user" },
      { name: "serverinfo", usage: "serverinfo", description: "View information about the server" },
      { name: "snipe", usage: "snipe [index]", description: "Snipe a deleted message" },
      { name: "editsnipe", usage: "editsnipe [index]", description: "Snipe an edited message" },
      { name: "reactionsnipe", usage: "reactionsnipe", description: "Snipe a removed reaction" },
      { name: "translate", usage: "translate <lang> <text>", description: "Translate text to another language" },
      { name: "tts", usage: "tts <voice> <text>", description: "Generate text-to-speech audio" },
      { name: "image", usage: "image <effect> [user]", description: "Apply effects to images" },
      { name: "google", usage: "google <query>", description: "Search Google" },
      { name: "define", usage: "define <word>", description: "Look up a word definition" },
    ]
  },
  {
    name: "Configuration",
    icon: "🔧",
    commands: [
      { name: "prefix", usage: "prefix <new prefix>", description: "Change the bot prefix" },
      { name: "welcome", usage: "welcome <channel> [message]", description: "Set up welcome messages" },
      { name: "goodbye", usage: "goodbye <channel> [message]", description: "Set up goodbye messages" },
      { name: "boost", usage: "boost <channel> [message]", description: "Set up boost messages" },
      { name: "autorole", usage: "autorole <role>", description: "Set auto-assigned roles for new members" },
      { name: "counter", usage: "counter <type> <channel>", description: "Set up counter channels" },
      { name: "giveaway", usage: "giveaway <duration> <winners> <prize>", description: "Start a giveaway" },
      { name: "autoresponder", usage: "autoresponder <trigger> <response>", description: "Create an auto responder" },
      { name: "bumpreminder", usage: "bumpreminder <channel>", description: "Set up bump reminders" },
      { name: "levels", usage: "levels <on/off>", description: "Toggle the leveling system" },
      { name: "reactiontrigger", usage: "reactiontrigger <trigger> <emoji>", description: "Set up reaction triggers" },
    ]
  }
]

function Commands() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredCategories = commandCategories
    .map(cat => ({
      ...cat,
      commands: cat.commands.filter(cmd =>
        cmd.name.toLowerCase().includes(search.toLowerCase()) ||
        cmd.description.toLowerCase().includes(search.toLowerCase())
      )
    }))
    .filter(cat => activeCategory === 'all' || cat.name === activeCategory)
    .filter(cat => cat.commands.length > 0)

  const totalCommands = commandCategories.reduce((acc, cat) => acc + cat.commands.length, 0)

  return (
    <div className="page-content">
      <div className="section-container">
        <div className="page-header">
          <h1>Commands</h1>
          <p className="page-subtitle">Browse all {totalCommands}+ commands available in tried</p>
        </div>

        <div className="commands-search">
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search commands..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="commands-categories">
          <button
            className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>
          {commandCategories.map((cat) => (
            <button
              key={cat.name}
              className={`category-btn ${activeCategory === cat.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.name)}
            >
              <span>{cat.icon}</span> {cat.name}
            </button>
          ))}
        </div>

        <div className="commands-list">
          {filteredCategories.map((category) => (
            <div key={category.name} className="command-category">
              <h2 className="category-title">
                <span>{category.icon}</span> {category.name}
                <span className="category-count">{category.commands.length}</span>
              </h2>
              <div className="command-items">
                {category.commands.map((cmd, idx) => (
                  <div key={idx} className="command-item">
                    <div className="command-name">
                      <code>,{cmd.name}</code>
                    </div>
                    <div className="command-details">
                      <span className="command-usage">{cmd.usage}</span>
                      <p className="command-desc">{cmd.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="no-results">
              <p>No commands found matching "{search}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Commands
