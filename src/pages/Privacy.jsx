function Privacy() {
  return (
    <div className="page-content">
      <div className="section-container">
        <div className="page-header">
          <h1>Privacy Policy</h1>
          <p className="page-subtitle">Effective Date: March 23, 2026</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>This Privacy Policy governs the collection, use, storage, and disclosure of information obtained from users of tried ("the Service"). By using the Service, you acknowledge that you have read, understood, and agree to be bound by this Policy.</p>
          </section>

          <section className="legal-section">
            <h2>2. Information Collection</h2>
            <p>We collect and process the following categories of data:</p>
            <ul>
              <li>User Identifiers: User IDs, usernames, and nicknames</li>
              <li>Guild Information: Guild IDs and Guild names</li>
              <li>Communication Data: Channel IDs, Role IDs, Message IDs, and timestamps</li>
              <li>Command Arguments: Information provided when executing commands</li>
              <li>Historical Data: Recently deleted message content (maximum 19 entries, retained no more than 2 hours) and message edit history (maximum 19 entries, retained no more than 2 hours)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Purpose of Data Collection</h2>
            <p>We collect and process data solely for legitimate operational purposes, including:</p>
            <ul>
              <li>Facilitating command execution and system functionality</li>
              <li>Debugging and technical maintenance</li>
              <li>Supporting specific features such as name history tracking</li>
              <li>Data aggregation for system operation</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Third-Party Disclosure</h2>
            <p>We do not sell, trade, rent, or otherwise transfer user information to external parties. We reserve the right to disclose information as required by law or to comply with legal processes.</p>
          </section>

          <section className="legal-section">
            <h2>5. Data Subject Rights</h2>
            <p><strong>Right to Erasure:</strong> Users may request deletion of their personal data by contacting our support team. Requests must identify the information to be deleted, provide evidence of account ownership, and allow up to 14 days for processing.</p>
            <p><strong>Right to Access:</strong> Users may request access to all stored data by contacting support. Response time may extend up to 7 days.</p>
            <p><strong>Self-Service:</strong> Users may independently clear their name history through available bot commands.</p>
          </section>

          <section className="legal-section">
            <h2>6. Policy Amendments</h2>
            <p>We reserve the right to modify this Policy at any time without prior notice. Continued use of the Service following modifications constitutes acceptance of changes.</p>
          </section>

          <section className="legal-section">
            <h2>7. Contact</h2>
            <p>For questions or concerns regarding this Privacy Policy, please contact us through our official Discord support server.</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Privacy
