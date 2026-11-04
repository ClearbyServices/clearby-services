import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="font-sans bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 transition-colors duration-300">
      <div className="max-w-4xl w-full bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
        
        {/* Subtle background ambient glow */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[var(--accent-action)] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[var(--accent-action)] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Success Icon Badge */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[var(--accent-action)]/10 border border-[var(--accent-action)]/30 text-[var(--accent-action)] rounded-2xl flex items-center justify-center mb-8 shadow-inner relative z-10 animate-bounce">
          <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>

        {/* Heading & Subtext */}
        <span className="text-xs font-bold text-[var(--accent-action)] tracking-widest uppercase mb-3 block">
          Transmission Confirmed
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
          Thank You!
        </h1>
        <p className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] opacity-90 mb-6">
          Your submission has been successfully received.
        </p>

        {/* Divider Accent Line */}
        <div className="w-16 h-[2px] bg-[var(--accent-action)] mb-6"></div>

        <p className="text-sm sm:text-base text-[var(--text-body)] max-w-xl leading-relaxed mb-10 opacity-90">
          We appreciate you taking the time to connect with Clearby Services. Our specialists are reviewing your request and will reach out to you shortly with a practical roadmap.
        </p>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mb-10 text-left">
          <div className="bg-[var(--bg-primary)] border border-[var(--border-color)] p-4 rounded-xl flex items-center gap-3">
            <Zap className="w-5 h-5 text-[var(--accent-action)] shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[var(--text-primary)]">Fast Response</h4>
              <p className="text-[11px] text-[var(--text-body)]">Usually within 24 business hours.</p>
            </div>
          </div>

          <div className="bg-[var(--bg-primary)] border border-[var(--border-color)] p-4 rounded-xl flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[var(--accent-action)] shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[var(--text-primary)]">Strictly Confidential</h4>
              <p className="text-[11px] text-[var(--text-body)]">Your data is completely secure.</p>
            </div>
          </div>
        </div>

        {/* Back to Home Action Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-3 bg-[var(--accent-action)] text-[var(--bg-primary)] px-8 py-4 rounded-xl font-bold text-sm tracking-wide uppercase transition-all duration-300 shadow-lg hover:opacity-90 hover:scale-[1.02] cursor-pointer"
        >
          Back to Home 
          <ArrowRight className="w-4 h-4" />
        </Link>

      </div>
    </div>
  );
}