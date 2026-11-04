"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

interface ServiceLink {
  name: string;
  href: string;
}

export default function Footer() {
  const [columnThreeServices, setColumnThreeServices] = useState<ServiceLink[]>([
    { name: "Web & Full-Stack", href: "/services/web-fullstack" },
    { name: "Mobile App Dev", href: "/services/mobile-apps" },
    { name: "CMS & E-Commerce", href: "/services/cms-ecommerce" },
    { name: "Enterprise & QA", href: "/services/enterprise-qa" },
    { name: "AI & Automation", href: "/services/ai-automation" },
    { name: "AI Marketing Services", href: "/services/ai-marketing" },
  ]);

  const [columnFourServices, setColumnFourServices] = useState<ServiceLink[]>([
    { name: "Lead Gen & Ads", href: "/services/lead-gen-performance" },
    { name: "Social Media Marketing", href: "/services/social-media" },
    { name: "Search Engine Optimisation", href: "/services/seo" },
    { name: "Influencer Marketing", href: "/services/influencer" },
    { name: "Startup Branding", href: "/services/startup-branding" },
    { name: "UI/UX & Product Design", href: "/services/ui-ux-design" },
  ]);

  useEffect(() => {
    async function fetchFooterServices() {
      const { data, error } = await supabase
        .from('services')
        .select('slug, title, sub_menu, menu_order')
        .order('menu_order', { ascending: true });

      if (data && !error && data.length > 0) {
        const mapped = data.map((item) => ({
          name: item.sub_menu || item.title,
          href: `/services/${item.slug}`
        }));

        const midPoint = Math.ceil(mapped.length / 2);
        setColumnThreeServices(mapped.slice(0, midPoint));
        setColumnFourServices(mapped.slice(midPoint));
      }
    }

    fetchFooterServices();
  }, []);

  const pagesAndLegal = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="w-full bg-[var(--bg-primary)] border-t border-[var(--border-color)] pt-32 pb-28 md:pt-44 md:pb-40 transition-colors duration-300 relative overflow-hidden">
      
      {/* Giant Background Watermark Text Effect */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0">
        <span className="text-[14vw] font-black tracking-tighter text-[var(--text-primary)] opacity-[0.03] uppercase whitespace-nowrap">
          Clearby
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-12 mb-20">
          
          {/* COLUMN 1: Logo, Contact Info & Socials */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-start space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <img 
                src="/dark-favcon.png" 
                alt="Clearby Services Logo" 
                className="w-10 h-10 object-contain rounded-md shadow-sm group-hover:scale-105 transition-transform block dark:hidden [.dark_&]:hidden" 
              />
              <img 
                src="/light-favcon.png" 
                alt="Clearby Services Logo" 
                className="w-10 h-10 object-contain rounded-md shadow-sm group-hover:scale-105 transition-transform hidden dark:block [.dark_&]:block" 
              />
              <span className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
                Clearby <span className="text-[var(--accent-action)]">Services</span>
              </span>
            </Link>

            <div className="space-y-4 text-xs text-[var(--text-body)]">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[var(--accent-action)] shrink-0 mt-0.5" />
                <a href="mailto:contact@clearbyresearch.com" className="hover:text-[var(--accent-action)] transition">
                  contact@clearbyresearch.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[var(--accent-action)] shrink-0 mt-0.5" />
                <a href="tel:+917020112146" className="hover:text-[var(--accent-action)] transition">
                  +91-7020112146
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--accent-action)] shrink-0 mt-0.5" />
                <a 
                  href="https://maps.app.goo.gl/FLBdZ5kPNpmFqYFT7" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[var(--accent-action)] transition leading-relaxed opacity-95 not-italic"
                >
                  VJ Indilife Sus-Pashan Road,<br />
                  Vardayani Society, Sutarwadi,<br />
                  Pashan Pune, Maharashtra 411021
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center lg:justify-start gap-4 items-center mb-2 pt-2">
              <a href="https://www.linkedin.com/company/clearbyresearch/" target="_blank" rel="noopener noreferrer" className="w-5 h-5 text-[var(--text-body)] hover:text-[var(--accent-action)] transition-colors" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="https://www.facebook.com/share/19QAdaiSpy/" target="_blank" rel="noopener noreferrer" className="w-5 h-5 text-[var(--text-body)] hover:text-[var(--accent-action)] transition-colors" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </a>
              <a href="https://www.instagram.com/clearbyresearch?stkn=MWZxNGVvdDZoNHV6Zw==" target="_blank" rel="noopener noreferrer" className="w-5 h-5 text-[var(--text-body)] hover:text-[var(--accent-action)] transition-colors" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://in.pinterest.com/0yz8vbtp9coatnn6btjos1aqmuxcmg/" target="_blank" rel="noopener noreferrer" className="w-5 h-5 text-[var(--text-body)] hover:text-[var(--accent-action)] transition-colors" aria-label="Pinterest">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.545.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: Pages & Legal */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-6 tracking-wide">
              Pages & Legal
            </h3>
            <ul className="space-y-3">
              {pagesAndLegal.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href} 
                    className="text-xs md:text-sm text-[var(--text-body)] hover:text-[var(--accent-action)] transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Services (Tech & AI) */}
          <div className="col-span-1 md:col-span-3 flex flex-col">
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-6 tracking-wide">
              Services (Tech & AI)
            </h3>
            <ul className="space-y-3">
              {columnThreeServices.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href} 
                    className="text-xs md:text-sm text-[var(--text-body)] hover:text-[var(--accent-action)] transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Services (Marketing & Design) */}
          <div className="col-span-1 md:col-span-3 flex flex-col">
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-6 tracking-wide">
              Services (Marketing & Design)
            </h3>
            <ul className="space-y-3">
              {columnFourServices.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href} 
                    className="text-xs md:text-sm text-[var(--text-body)] hover:text-[var(--accent-action)] transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* COPYRIGHT BOTTOM BAR */}
        <div className="border-t border-[var(--border-color)] pt-8 mt-16 flex flex-col sm:flex-row justify-between items-center text-xs text-[var(--text-body)] opacity-80">
          <p>© copyright Clearby Services {new Date().getFullYear()}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Digital agency platform built for high-performance execution.</p>
        </div>

      </div>
    </footer>
  );
}