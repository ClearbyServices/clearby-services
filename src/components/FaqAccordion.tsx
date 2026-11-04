"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ faqs }: { faqs?: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) {
    return null;
  }

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold text-[var(--accent-action)] tracking-widest uppercase mb-3 block text-center">
          FAQ
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] text-center mb-16">
          Frequently Asked Questions
        </h2>
        
        {/* Minimalist Accordion List */}
        <div className="space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="border-b border-[var(--border-color)] last:border-b-0 group"
              >
                <button 
                  onClick={() => toggleFaq(idx)} 
                  className="w-full py-6 text-left flex justify-between items-center cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg font-medium transition-colors duration-300 pr-8 ${isOpen ? "text-[var(--accent-action)]" : "text-[var(--text-primary)] group-hover:text-[var(--accent-action)]"}`}>
                    {faq.q}
                  </span>
                  
                  {/* Animated + / - Icon */}
                  <div className="relative w-4 h-4 flex items-center justify-center shrink-0">
                    {/* Horizontal Line (Always stays flat) */}
                    <span 
                      className={`absolute w-full h-[2px] rounded-full transition-colors duration-300 ${
                        isOpen ? "bg-[var(--accent-action)]" : "bg-[var(--text-body)] group-hover:bg-[var(--accent-action)]"
                      }`}
                    ></span>
                    
                    {/* Vertical Line (Rotates 90 degrees to form a minus sign when open) */}
                    <span 
                      className={`absolute w-full h-[2px] rounded-full transition-all duration-300 ${
                        isOpen 
                          ? "bg-[var(--accent-action)] rotate-0" 
                          : "bg-[var(--text-body)] rotate-90 group-hover:bg-[var(--accent-action)]"
                      }`}
                    ></span>
                  </div>
                </button>
                
                {/* Smooth Expandable Answer */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-base text-[var(--text-body)] leading-relaxed pr-8 opacity-90">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}