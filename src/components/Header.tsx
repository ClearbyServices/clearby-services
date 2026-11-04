"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { 
  ChevronDown, Menu, X, PhoneCall, Sun, Moon, ArrowRight, 
  Megaphone, MonitorSmartphone, Code, Smartphone, Layers, RefreshCw, Box, Briefcase
} from "lucide-react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

interface ServiceItem {
  slug: string;
  title: string;
  desc?: string;
  category: string;
}

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(true);

  // Supabase fetched services & active category tab state
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("Digital Marketing");

  useEffect(() => {
    async function fetchServices() {
      const { data, error } = await supabase
        .from('services')
        .select('slug, title, sub_menu, category, intro_paragraphs, menu_order')
        .order('menu_order', { ascending: true });

      if (data && !error) {
        const formatted = data.map((item) => ({
          slug: item.slug,
          title: item.sub_menu || item.title,
          category: item.category || "Other Services",
          desc: item.intro_paragraphs?.[0] || "Professional solution tailored to your business goals."
        }));
        setServices(formatted);

        // Set initial active category if available
        if (formatted.length > 0) {
          setActiveCategory(formatted[0].category);
        }
      }
    }

    fetchServices();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setDarkMode(isDark);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const isActive = (path: string) => pathname === path;

  // Unique categories list for left sidebar
  const categories = Array.from(new Set(services.map(s => s.category)));

  // Filtered solutions for the selected category tab
  const currentSolutions = services.filter(s => s.category === activeCategory);

  // Icon mapping for categories
  const getCategoryIcon = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("market")) return <Megaphone className="w-4 h-4" />;
    if (cat.includes("web")) return <MonitorSmartphone className="w-4 h-4" />;
    if (cat.includes("software")) return <Code className="w-4 h-4" />;
    if (cat.includes("mobile")) return <Smartphone className="w-4 h-4" />;
    if (cat.includes("transform")) return <RefreshCw className="w-4 h-4" />;
    if (cat.includes("product")) return <Box className="w-4 h-4" />;
    return <Layers className="w-4 h-4" />;
  };

  return (
    <header className="w-full bg-[var(--bg-primary)] border-b border-[var(--border-color)] sticky top-0 z-[100] transition-colors duration-200 flex flex-col">
      
      {/* TOP ACTION BAR */}
      <div className="hidden xl:flex justify-end items-center gap-6 px-4 sm:px-6 lg:px-8 py-2.5 border-b border-[var(--border-color)] bg-[var(--card-bg)]">
        <a 
          href="tel:+917020112146" 
          className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-primary)] hover:text-[var(--accent-action)] transition-colors"
        >
          <PhoneCall className="w-3.5 h-3.5 text-[var(--accent-action)] animate-pulse" />
          <span>+91-7020112146</span>
        </a>

        <div className="h-4 w-px bg-[var(--border-color)]"></div>

        <button
          onClick={toggleTheme}
          className="text-[var(--text-primary)] hover:opacity-70 transition cursor-pointer flex items-center gap-2 text-xs font-semibold"
          aria-label="Toggle Theme"
        >
          {darkMode ? (
            <><Sun className="w-3.5 h-3.5" /> Light Mode</>
          ) : (
            <><Moon className="w-3.5 h-3.5 text-[var(--accent-action)]" /> Dark Mode</>
          )}
        </button>

        <div className="h-4 w-px bg-[var(--border-color)]"></div>

        <Link 
          href="/contact" 
          className="bg-[var(--accent-action)] text-[var(--bg-primary)] px-4 py-1.5 text-xs font-bold hover:opacity-90 transition rounded-sm shadow-sm"
        >
          Get Free Consultation
        </Link>
      </div>

      {/* MAIN NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-20">

          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <img 
                src={darkMode ? "/dark-favcon.png" : "/light-favcon.png"} 
                alt="Clearby Services Logo" 
                className="w-14 h-14 object-contain rounded-md shadow-sm group-hover:scale-105 transition-transform" 
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-serif font-bold text-[var(--text-primary)] leading-tight group-hover:text-[var(--accent-action)] transition">
                  Clearby <span className="text-[var(--accent-action)]">Services</span>
                </span>
                <span className="text-[10px] tracking-widest text-[var(--text-body)] uppercase font-sans">Digital Marketing & Tech Agency</span>
              </div>
            </Link>
          </div>

          <nav className="hidden xl:flex items-center space-x-8 text-sm font-bold text-[var(--text-primary)]">
            
            {/* Mega Menu Dropdown */}
            <div className="relative group py-8 -my-8 cursor-pointer">
              <Link href="/services" className={`transition flex items-center gap-1 ${isActive("/services") ? "text-[var(--accent-action)]" : "hover:text-[var(--accent-action)]"}`}>
                Services
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              
              {/* 3-Column Interactive Mega Menu Dropdown */}
              <div className="absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 w-[1100px] bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-2xl rounded-2xl hidden group-hover:flex z-[110] overflow-hidden">
                
                {/* COLUMN 1: Categories Sidebar */}
                <div className="w-[300px] bg-[var(--card-bg)] border-r border-[var(--border-color)] p-6 flex flex-col justify-between shrink-0">
                  <div>
                    <h3 className="text-base font-serif font-bold text-[var(--text-primary)] mb-1">Our Services</h3>
                    <p className="text-[11px] text-[var(--text-body)] opacity-80 mb-6">Incubating a culture of innovation & creativity</p>
                    
                    <div className="space-y-1.5">
                      {categories.map((cat, idx) => (
                        <button
                          key={idx}
                          onMouseEnter={() => setActiveCategory(cat)}
                          onClick={() => setActiveCategory(cat)}
                          className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold transition-all text-left ${
                            activeCategory === cat 
                              ? 'bg-[var(--accent-action)]/15 text-[var(--accent-action)] border border-[var(--accent-action)]/30 shadow-sm' 
                              : 'text-[var(--text-primary)] hover:bg-[var(--text-primary)]/5'
                          }`}
                        >
                          <span className={`${activeCategory === cat ? 'text-[var(--accent-action)]' : 'text-[var(--text-body)]'}`}>
                            {getCategoryIcon(cat)}
                          </span>
                          <span className="truncate">{cat}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* COLUMN 2: Solutions Grid (Scrollable) */}
                <div className="flex-1 p-8 bg-[var(--bg-primary)] overflow-y-auto max-h-[500px]">
                  <div className="text-[10px] uppercase font-bold text-[var(--text-body)] tracking-widest mb-6">Solutions</div>
                  
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    {currentSolutions.map((srv, idx) => (
                      <Link 
                        key={idx} 
                        href={`/services/${srv.slug}`}
                        className="group/item block"
                      >
                        <h4 className="text-xs font-bold text-[var(--text-primary)] group-hover/item:text-[var(--accent-action)] transition-colors mb-1">
                          {srv.title}
                        </h4>
                        <p className="text-[11px] text-[var(--text-body)] opacity-80 leading-relaxed line-clamp-2">
                          {srv.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* COLUMN 3: Engagement Models / CTA */}
                <div className="w-[300px] bg-[var(--card-bg)] border-l border-[var(--border-color)] p-6 flex flex-col justify-between shrink-0">
                  <div>
                    <h3 className="text-sm font-serif font-bold text-[var(--text-primary)] mb-1">Engagement Models</h3>
                    <p className="text-[11px] text-[var(--text-body)] opacity-80 mb-6">Flexible Partnerships. Predictable Outcomes.</p>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                        <div className="p-2 rounded-lg bg-[var(--accent-action)]/10 text-[var(--accent-action)] mt-0.5">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-[var(--text-primary)] mb-0.5">Staff Augmentation</h4>
                          <p className="text-[10px] text-[var(--text-body)] opacity-80 leading-tight">Access top-tier talent on demand: Dedicated, Hourly, or Flexible.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                        <div className="p-2 rounded-lg bg-[var(--accent-action)]/10 text-[var(--accent-action)] mt-0.5">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-[var(--text-primary)] mb-0.5">Project-Based Delivery</h4>
                          <p className="text-[10px] text-[var(--text-body)] opacity-80 leading-tight">End-to-end ownership of outcomes with full-cycle delivery.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[var(--border-color)] mt-6">
                    <Link 
                      href="/contact" 
                      className="w-full bg-[var(--accent-action)] text-[var(--bg-primary)] text-center text-xs font-bold py-2.5 px-3 rounded-xl hover:opacity-90 transition shadow-md flex items-center justify-center gap-1.5"
                    >
                      <span>Discuss Your Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>

              </div>
            </div>

            <Link href="/work" className={`transition py-2 ${isActive("/work") ? "text-[var(--text-primary)] font-bold border-b-2 border-[var(--accent-action)]" : "text-[var(--text-body)] hover:text-[var(--accent-action)]"}`}>Work</Link>
            <Link href="/about" className={`transition py-2 ${isActive("/about") ? "text-[var(--text-primary)] font-bold border-b-2 border-[var(--accent-action)]" : "text-[var(--text-body)] hover:text-[var(--accent-action)]"}`}>About Us</Link>
            <Link href="/blog" className={`transition py-2 ${isActive("/blog") ? "text-[var(--text-primary)] font-bold border-b-2 border-[var(--accent-action)]" : "text-[var(--text-body)] hover:text-[var(--accent-action)]"}`}>Blog</Link>
          </nav>

          <div className="hidden xl:flex">
             <Link 
              href="/contact" 
              className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-2.5 text-sm font-bold rounded-xl hover:bg-[var(--accent-action)] hover:text-white transition-colors shadow-sm"
            >
              Book Consultation
            </Link>
          </div>

          <div className="flex xl:hidden items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[var(--card-bg)] text-[var(--text-primary)] cursor-pointer border border-[var(--border-color)] hover:border-[var(--accent-action)]"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-[var(--accent-action)]" />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[var(--text-primary)] p-2 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-[var(--bg-primary)] border-b border-[var(--border-color)] shadow-2xl max-h-[85vh] overflow-y-auto px-6 py-6 space-y-4 z-[110] text-[var(--text-primary)]">
          <div>
            <button 
              onClick={() => toggleSection("services")}
              className="w-full flex justify-between items-center text-sm font-bold py-2 hover:text-[var(--accent-action)] cursor-pointer"
            >
              <span>Services Catalog</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openSection === "services" ? "rotate-180" : ""}`} />
            </button>

            {openSection === "services" && (
              <div className="pl-3 pt-2 space-y-4 border-l-2 border-[var(--accent-action)] ml-2 my-2 text-xs">
                {categories.map((cat, gIdx) => {
                  const catServices = services.filter(s => s.category === cat);
                  return (
                    <div key={gIdx}>
                      <span className="text-[10px] uppercase font-bold text-[var(--accent-action)] tracking-widest block mb-2">
                        {cat}
                      </span>
                      <ul className="space-y-2 pl-1">
                        {catServices.map((srv, sIdx) => (
                          <li key={sIdx}>
                            <Link 
                              href={`/services/${srv.slug}`} 
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-xs font-semibold text-[var(--text-primary)] hover:text-[var(--accent-action)] flex flex-col py-0.5"
                            >
                              <span>{srv.title}</span>
                              <span className="text-[10px] opacity-70 font-normal">{srv.desc}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <Link href="/work" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold py-2 hover:text-[var(--accent-action)]">Work / Portfolio</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold py-2 hover:text-[var(--accent-action)]">About Us</Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold py-2 hover:text-[var(--accent-action)]">Blog</Link>

          <div className="pt-6 pb-2 space-y-3">
            <a 
              href="tel:+917020112146" 
              className="flex items-center justify-center gap-2 w-full bg-[var(--card-bg)] border border-[var(--border-color)] py-3 text-sm font-semibold rounded-lg text-[var(--text-primary)] hover:border-[var(--accent-action)] transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[var(--accent-action)]" />
              <span>Call: +91-7020112146</span>
            </a>
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="flex justify-center items-center gap-2 w-full bg-[var(--accent-action)] text-[var(--bg-primary)] py-3 text-sm font-bold rounded-lg shadow-md hover:opacity-90"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}