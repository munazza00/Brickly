import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Building2, ShieldCheck, ArrowRight, Bot } from 'lucide-react';
import { PROPERTIES } from '../../data/mockData';

export default function BricklyAIChat({ onSelectProperty, hasCompareDrawer = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hi there! I am your Brickly assistant. Ask me anything in plain English — like "2BHK under ₹1.5 Cr in Gachibowli" or "how does Section 24B home loan tax relief work?"'
    }
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const QUICK_PROMPTS = [
    '2BHK under ₹1.5 Cr near HITEC City',
    'How does Section 24B tax relief work?',
    'Show sea-facing homes in Worli'
  ];

  const handleSend = (textToSend) => {
    const text = textToSend || inputMsg;
    if (!text.trim()) return;

    // Add user message
    const userMsg = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMsg('');
    setIsTyping(true);

    // Simulate AI response logic after 1s delay
    setTimeout(() => {
      let botResponse = '';
      let propertyMatch = null;

      const lower = text.toLowerCase();
      if (lower.includes('worli') || lower.includes('sea') || lower.includes('mumbai')) {
        propertyMatch = PROPERTIES.find(p => p.id === 'prop-in-101');
        botResponse = 'I found a prime match! The "Sea Face Duplex Penthouse, Worli" at ₹8.75 Cr features uninterrupted views of the Bandra-Worli Sea Link and Italian marble finishes.';
      } else if (lower.includes('gachibowli') || lower.includes('hitec') || lower.includes('1.5')) {
        propertyMatch = PROPERTIES.find(p => p.id === 'prop-in-106');
        botResponse = 'Great choice! The "Modern 2BHK Apartment, Gachibowli" at ₹1.15 Cr is 5 minutes from HITEC City & Financial District, offering an estimated 8.2% annual rental yield.';
      } else if (lower.includes('tax') || lower.includes('24b') || lower.includes('loan') || lower.includes('deduction')) {
        botResponse = 'Under Section 24B of the Income Tax Act, individual buyers can claim up to ₹2 Lakhs annually on home loan interest payments. If buying jointly with your spouse, both can claim up to ₹2 Lakhs each (total ₹4L/year)!';
      } else if (lower.includes('yield') || lower.includes('roi') || lower.includes('invest') || lower.includes('bangalore')) {
        propertyMatch = PROPERTIES.find(p => p.id === 'prop-in-103');
        botResponse = 'High rental yields are currently led by Indiranagar, Bengaluru (8.5% yield) and Gachibowli, Hyderabad (8.2% yield), driven by tech expansion and steady tenant demand.';
      } else {
        botResponse = 'Based on market records across Mumbai, Hyderabad, Bengaluru, Gurgaon, Pune, and Chennai, verified RERA projects have shown steady 7% to 10% annual appreciation. Tell me your preferred city or budget range, and I\'ll find exact matches!';
      }

      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: botResponse, matchedProp: propertyMatch }
      ]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            bottom: hasCompareDrawer ? '100px' : '24px',
            right: '24px',
            zIndex: 900,
            background: 'var(--grad-gold)',
            color: '#0b132b',
            padding: '0.85rem 1.4rem',
            borderRadius: 'var(--radius-full)',
            fontWeight: 800,
            fontSize: '0.92rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            boxShadow: 'var(--shadow-glow-gold)',
            border: '2px solid white'
          }}
        >
          <Bot size={22} />
          <span>Ask Brickly AI</span>
          <span style={{
            background: '#0b132b',
            color: 'var(--accent-gold)',
            fontSize: '0.7rem',
            padding: '0.15rem 0.4rem',
            borderRadius: '4px',
            fontWeight: 800
          }}>LIVE</span>
        </button>
      )}

      {/* Chat Drawer Widget */}
      {isOpen && (
        <div className="glass-panel animate-fade-in" style={{
          position: 'fixed',
          bottom: hasCompareDrawer ? '100px' : '24px',
          right: '24px',
          zIndex: 1000,
          width: '380px',
          maxWidth: 'calc(100vw - 32px)',
          height: '520px',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--bg-modal)',
          border: '1.5px solid var(--accent-gold)',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            background: 'var(--grad-hero)',
            padding: '1rem',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ background: 'var(--grad-gold)', padding: '0.35rem', borderRadius: '8px', color: '#0b132b' }}>
                <Bot size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800 }}>Brickly AI Concierge</h4>
                <span style={{ fontSize: '0.72rem', color: 'var(--accent-emerald-light)', fontWeight: 700 }}>● Online & Ready</span>
              </div>
            </div>

            <button onClick={() => setIsOpen(false)} style={{ color: 'white' }}>
              <X size={20} />
            </button>
          </div>

          {/* Messages Body */}
          <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  background: msg.sender === 'user' ? 'var(--accent-navy)' : 'var(--bg-secondary)',
                  color: msg.sender === 'user' ? 'white' : 'var(--text-primary)',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.88rem',
                  lineHeight: '1.5',
                  border: `1px solid ${msg.sender === 'user' ? 'var(--accent-gold)' : 'var(--border-light)'}`
                }}
              >
                {msg.text}

                {/* Inline Property Link Card */}
                {msg.matchedProp && (
                  <div style={{
                    marginTop: '0.75rem',
                    paddingTop: '0.5rem',
                    borderTop: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <img
                      src={msg.matchedProp.images[0]}
                      alt={msg.matchedProp.title}
                      style={{ width: '45px', height: '45px', borderRadius: '6px', objectFit: 'cover' }}
                    />
                    <div style={{ flex: 1 }}>
                      <strong style={{ fontSize: '0.8rem', display: 'block', color: 'var(--accent-gold)' }}>
                        {msg.matchedProp.title}
                      </strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {msg.matchedProp.displayPrice}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        onSelectProperty(msg.matchedProp);
                      }}
                      className="btn-primary"
                      style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }}
                    >
                      View
                    </button>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div style={{
                alignSelf: 'flex-start',
                background: 'var(--bg-secondary)',
                padding: '0.6rem 1rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                fontStyle: 'italic'
              }}>
                Brickly AI is searching Indian real estate database...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div style={{ padding: '0.5rem 0.75rem', background: 'var(--bg-primary)', display: 'flex', gap: '0.4rem', overflowX: 'auto' }}>
            {QUICK_PROMPTS.map((prompt, pIdx) => (
              <button
                key={pIdx}
                onClick={() => handleSend(prompt)}
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.6rem',
                  borderRadius: 'var(--radius-full)',
                  whiteSpace: 'nowrap'
                }}
              >
                + {prompt}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            style={{
              padding: '0.75rem',
              background: 'var(--bg-modal)',
              borderTop: '1px solid var(--border-light)',
              display: 'flex',
              gap: '0.5rem'
            }}
          >
            <input
              type="text"
              placeholder="Ask anything about homes or loans..."
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              style={{ flex: 1, fontSize: '0.88rem' }}
            />
            <button type="submit" className="btn-primary" style={{ padding: '0.6rem 0.9rem' }}>
              <Send size={16} />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
