import { useState } from 'react'

const faqItems = [
  {
    question: "Is tried available for free and public use?",
    answer: "tried offers both free and premium tiers. The free tier includes basic moderation and utility commands. For full access to all features including anti-nuke, integrations, voicemaster, and premium music, a paid subscription is required."
  },
  {
    question: "How can I pay for tried?",
    answer: "You can purchase tried through our Discord support server. We accept payments via PayPal and other common payment methods. Visit our support server for more details on available payment options."
  },
  {
    question: "How much does tried cost?",
    answer: "tried offers competitive pricing with monthly and lifetime options. Visit our support server for the most current pricing information and any available promotions."
  },
  {
    question: "Can I transfer tried to another server?",
    answer: "Yes, you can transfer your tried subscription to another server. Each subscription allows one transfer. Contact our support team in the Discord server to initiate a transfer."
  },
  {
    question: "What if I want the bot to leave a server, but transfer later?",
    answer: "If you want the bot removed from your server temporarily, you can kick it and request a transfer later through our support server. Your subscription remains active regardless."
  },
  {
    question: "If I've already transferred the bot once, can I transfer it again?",
    answer: "Additional transfers may be available on a case-by-case basis. Please reach out to our support team to discuss your specific situation."
  },
  {
    question: "I didn't buy the bot but I have it in my server, can I transfer it?",
    answer: "Only the original purchaser of the subscription can authorize transfers. If you need to transfer the bot, the original purchaser must contact our support team."
  },
  {
    question: "What happens if I do not want to continue paying monthly?",
    answer: "If you cancel your monthly subscription, the bot will remain active until the end of your current billing period. After that, premium features will be disabled but the bot will continue to function with free-tier features."
  },
  {
    question: "Where can I receive help if I'm confused or have any questions?",
    answer: "You can join our Discord support server for help. Our team and community are available to assist you with any questions about setup, features, or troubleshooting."
  },
  {
    question: "I no longer want or use tried, can I get a refund?",
    answer: "Please refer to our Refund Policy for detailed information about refund eligibility and conditions. You can also contact our support team to discuss your specific situation."
  }
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="page-content">
      <div className="section-container">
        <div className="page-header">
          <div className="section-label">FAQ</div>
          <h1>Frequently Asked Questions</h1>
          <p className="page-subtitle">Find answers to common questions about tried</p>
        </div>

        <div className="faq-list">
          {faqItems.map((item, idx) => (
            <div
              key={idx}
              className={`faq-item ${openIndex === idx ? 'open' : ''}`}
              onClick={() => toggle(idx)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <span className="faq-toggle">{openIndex === idx ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ
