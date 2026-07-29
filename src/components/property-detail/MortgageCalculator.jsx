import React, { useState } from 'react';
import { Calculator, DollarSign, Percent, Calendar, PieChart, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function MortgageCalculator({ defaultPrice = 24500000, hoaMonthly = 8500 }) {
  const [price, setPrice] = useState(defaultPrice); // ₹2.45 Cr
  const [downPct, setDownPct] = useState(20);
  const [interestRate, setInterestRate] = useState(8.45); // Indian Repo Rate Avg
  const [loanTermYears, setLoanTermYears] = useState(20);

  // Math Calculations (Indian Banking EMI Formula)
  const downPaymentAmount = (price * downPct) / 100;
  const loanAmount = price - downPaymentAmount;

  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;

  const monthlyEMI = loanAmount > 0 && monthlyRate > 0
    ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    : 0;

  const stampDutyAndReg = price * 0.06; // Approx 6% Stamp Duty & Reg in MH/TS/KA
  const taxBenefitSec24b = Math.min(monthlyEMI * 12 * 0.6, 200000); // Max ₹2 Lakhs tax rebate

  const formatINR = (val) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} Lakhs`;
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="glass-card" style={{
      padding: '1.5rem',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-light)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{
            background: 'var(--grad-gold)',
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0b132b'
          }}>
            <Calculator size={20} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Indian Banking EMI & Tax Calculator
            </h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Repo-linked interest rates, Stamp Duty & Sec 24B tax benefits
            </span>
          </div>
        </div>
        <span className="badge-emerald">
          <ShieldCheck size={14} /> SBI / HDFC Repo-Linked Rates
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
        
        {/* Sliders Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          
          {/* Purchase Price Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
              <span style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>Property Purchase Price</span>
              <strong style={{ color: 'var(--accent-gold)' }}>{formatINR(price)}</strong>
            </div>
            <input
              type="range"
              min={2500000} // ₹25 L
              max={100000000} // ₹10 Cr
              step={2500000}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--accent-gold)' }}
            />
          </div>

          {/* Down Payment Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
              <span style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>Down Payment ({downPct}%)</span>
              <strong style={{ color: 'var(--accent-emerald-light)' }}>{formatINR(downPaymentAmount)}</strong>
            </div>
            <input
              type="range"
              min={10}
              max={50}
              step={5}
              value={downPct}
              onChange={(e) => setDownPct(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--accent-emerald-light)' }}
            />
          </div>

          {/* Repo Rate Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
              <span style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>Repo-Linked Home Loan Rate</span>
              <strong style={{ color: 'var(--text-primary)' }}>{interestRate.toFixed(2)}% p.a.</strong>
            </div>
            <input
              type="range"
              min={7.5}
              max={11.0}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#3b82f6' }}
            />
          </div>

          {/* Loan Tenure */}
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>
              Loan Tenure (Years)
            </span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[10, 15, 20, 25, 30].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setLoanTermYears(yr)}
                  style={{
                    flex: 1,
                    padding: '0.4rem 0',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    background: loanTermYears === yr ? 'var(--accent-navy)' : 'var(--bg-primary)',
                    color: loanTermYears === yr ? 'white' : 'var(--text-muted)',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  {yr} Yrs
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Output Column */}
        <div style={{
          background: 'var(--bg-primary)',
          borderRadius: 'var(--radius-md)',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1px solid var(--border-light)'
        }}>
          <div>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Estimated Monthly EMI
            </span>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-gold)', margin: '0.2rem 0 1rem 0' }}>
              {formatINR(monthlyEMI)}<span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>/mo</span>
            </div>

            {/* List Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Principal Loan Amount:</span>
                <strong>{formatINR(loanAmount)}</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Est. Stamp Duty & Reg. (~6%):</span>
                <strong style={{ color: '#f59e0b' }}>{formatINR(stampDutyAndReg)}</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Sec 24B Annual Tax Rebate:</span>
                <strong style={{ color: 'var(--accent-emerald-light)' }}>- {formatINR(taxBenefitSec24b)}</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Monthly Maintenance Dues:</span>
                <strong>{formatINR(hoaMonthly)}</strong>
              </div>
            </div>
          </div>

          <div style={{
            marginTop: '1rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid var(--border-light)',
            fontSize: '0.78rem',
            color: 'var(--accent-emerald-light)',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}>
            <CheckCircle2 size={15} /> Preferred festive rate @ 8.35% available via SBI & HDFC Capital
          </div>

        </div>

      </div>
    </div>
  );
}
