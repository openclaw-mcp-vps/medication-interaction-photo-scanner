export default function Home() {
  const faqs = [
    {
      q: 'How does the medication scanner work?',
      a: 'Point your phone camera at any pill bottle label. Our OCR technology reads the medication name, then instantly checks it against a comprehensive drug interaction database to flag dangerous combinations.'
    },
    {
      q: 'Is my medication data private and secure?',
      a: 'Yes. Your medication history is encrypted and never sold to third parties. You control your data and can delete it at any time from your account settings.'
    },
    {
      q: 'What happens if a dangerous interaction is found?',
      a: 'You receive an immediate alert with a severity rating (mild, moderate, severe), a plain-language explanation of the risk, and a recommendation to consult your pharmacist or doctor.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-4 pt-20 pb-16 text-center">
        <div className="inline-block bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Mobile-First · OCR Powered · Instant Results
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Scan Pill Bottles for<br />
          <span className="text-[#58a6ff]">Dangerous Drug Interactions</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Managing multiple medications is risky. MedScan uses your phone camera and OCR to identify your pills and instantly flag life-threatening combinations — before you take them.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg shadow-[#58a6ff]/20"
        >
          Start Scanning — $9/mo
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">Cancel anytime. No hidden fees.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '📷', title: 'Snap a Photo', desc: 'Point your camera at any pill bottle label — no typing required.' },
            { icon: '🔍', title: 'Instant OCR', desc: 'We extract the medication name in seconds using advanced text recognition.' },
            { icon: '⚠️', title: 'Interaction Alert', desc: 'Get a clear severity rating and plain-language explanation of any risks.' }
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{icon}</div>
              <h3 className="font-semibold text-white mb-1">{title}</h3>
              <p className="text-sm text-[#8b949e]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center shadow-xl shadow-[#58a6ff]/10">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay safe</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited medication scans',
              'Full drug interaction database',
              'Medication history tracking',
              'Severity ratings & explanations',
              'Caregiver sharing (up to 3 profiles)',
              'Priority email support'
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} MedScan. Not a substitute for professional medical advice.
      </footer>
    </main>
  )
}
