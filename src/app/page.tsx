"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import NumberTicker from "@/components/NumberTicker";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter();

  const typewriterWords = [
    "Digital Marketing",
    "AI Calling Solutions",
    "Performance Ads",
    "Web & Software",
    "Business Consulting"
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(130);

  useEffect(() => {
    const fullText = typewriterWords[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(80);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % typewriterWords.length);
          setTypingSpeed(130);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const coreServices = [
    {
      title: "Digital Marketing",
      tagline: "A steady flow of relevant visitors and conversations",
      desc: "Get discovered by the right customers through search, social media and content, including visibility in AI-powered answer engines.",
      link: "/services",
      disciplines: ["SEO, AEO & GEO", "Social Media Marketing", "Influencer Marketing", "Content Marketing"]
    },
    {
      title: "Performance Marketing",
      tagline: "Clearer visibility into where enquiries come from.",
      desc: "Campaigns across Google, Meta, LinkedIn, YouTube, email, SMS and WhatsApp, planned around the enquiries you want and tracked so you can see what’s working.",
      link: "/services",
      disciplines: ["Google & Meta Ads", "LinkedIn & YouTube Ads", "Email, SMS & WhatsApp", "Voice & Call Marketing"]
    },
    {
      title: "AI Solutions",
      tagline: " Faster follow-up and faster content production, with people reviewing the work.",
      desc: " Practical AI for customer communication and content: calling in three languages, personalised video, voice-overs, graphics and written content.",
      link: "/services",
      disciplines: ["AI Calling (EN, HI, MR)", "AI Video", "AI Voice Over", "AI Graphics & Content"]
    },
    {
      title: "Business Consulting",
      tagline: "A clear plan before you spend.",
      desc: "Hands-on guidance for founders and owners: setting up, planning growth, and shaping a marketing strategy that fits your budget and goals.",
      link: "/services",
      disciplines: ["Business Setup", "Business Growth", "Marketing Strategy", "Brand Strategy"]
    },
    {
      title: "Branding & Design",
      tagline: "A consistent look at every touchpoint.",
      desc: "Logos, identity, brochures, visiting cards, company profiles and marketing material, designed and printed to a consistent standard.",
      link: "/services",
      disciplines: ["Logo & Brand Identity", "Visiting Cards", "Brochures", "Banners & Hoardings"]
    },
    {
      title: "Web & Software",
      tagline: "Systems that support your campaigns.",
      desc: "Business websites, e-commerce stores, mobile apps and custom software built to support your marketing and operations instead of holding them back.",
      link: "/services",
      disciplines: ["Website Design", "E-commerce", "Mobile Apps", "Custom Software"]
    }
  ];

  return (
    <main className="flex flex-col w-full bg-[var(--bg-primary)] text-[var(--text-body)] overflow-x-hidden font-sans transition-colors duration-300 min-h-screen">
      
      <style jsx global>{`
        /* Dynamic gradient that automatically uses your CSS variables via color-mix */
        .landing-hero {
          position: relative;
          background: radial-gradient(ellipse 80% 60% at 50% -10%, color-mix(in srgb, var(--text-primary) 5%, transparent) 0%, color-mix(in srgb, var(--text-primary) 2%, transparent) 50%, transparent 100%), var(--bg-primary);
        }

        .typewriter-cursor {
          display: inline-block;
          width: 2.5px;
          height: 1.1em;
          background-color: var(--accent-action);
          margin-left: 2px;
          animation: blink 0.7s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="landing-hero py-24 sm:py-32 overflow-hidden flex items-center min-h-[90vh] relative">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--accent-action)]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[var(--text-primary)]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* LEFT COLUMN: Typography & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Soft translucent pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--text-primary)]/5 border border-[var(--border-color)] text-[var(--text-primary)] mb-6 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-[var(--accent-action)] animate-pulse" aria-hidden="true"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-100">
                Connected Marketing & AI Communication
              </span>
            </div>

            {/* Heading: Unified size for strict WCAG alignment and readability */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.2] mb-6">
              <span className="text-[var(--text-primary)] pr-2">
                AI-powered digital agency in Pune that speaks your customers language:
              </span>
              <span className="text-[var(--accent-action)] inline-block min-w-[20px] mt-2 lg:mt-0">
                {currentText}
              </span>
              <span className="typewriter-cursor" aria-hidden="true"></span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-[var(--text-body)] text-base md:text-lg mb-10 max-w-xl leading-relaxed font-medium">
             Clearby Services is a digital marketing and business growth agency in Pune. We combine SEO, advertising and social media with AI calling in English, Hindi and Marathi, plus design, content and consulting, so your marketing works as one plan, not a set of disconnected tasks.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center mb-12 w-full">
              <Link 
                href="/contact" 
                className="bg-[var(--accent-action)] text-[var(--bg-primary)] font-bold py-4 px-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:opacity-90 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 text-sm flex items-center gap-2 group"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link 
                href="/services#ai-solutions" 
                className="bg-[var(--text-primary)]/5 hover:bg-[var(--text-primary)]/10 border border-[var(--border-color)] text-[var(--text-primary)] font-bold py-4 px-8 rounded-2xl transition-all duration-300 text-sm backdrop-blur-sm shadow-sm"
              >
                Services
              </Link>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center gap-4 bg-[var(--text-primary)]/5 px-6 py-4 rounded-2xl border border-[var(--border-color)] backdrop-blur-sm">
              <div className="flex -space-x-3" aria-hidden="true">
                {[12, 32, 44].map((id, index) => (
                  <img key={index} src={`https://i.pravatar.cc/150?u=${id}`} alt="Client" className="w-8 h-8 rounded-full border-2 border-[var(--bg-primary)]" />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-0.5">Trusted by Local & Global Brands</span>
                <span className="text-[11px] text-[var(--text-body)] opacity-90">Accepting new projects this month.</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Floating Logo Centerpiece */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center items-center w-full mt-12 lg:mt-0 h-full min-h-[400px]"
          >
            {/* Inner Floating Animation */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-20 flex items-center justify-center w-full max-w-sm lg:max-w-md aspect-square group"
            >
              <div className="absolute inset-0 rounded-full border border-[var(--accent-action)]/20 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-[var(--text-primary)]/10 animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <div className="relative w-3/4 h-3/4 bg-[var(--bg-primary)]/40 rounded-full p-12 border border-[var(--border-color)] backdrop-blur-xl shadow-2xl flex items-center justify-center overflow-hidden group-hover:border-[var(--accent-action)]/50 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-action)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="/light-favcon.png" alt="Clearby Services" className="w-full h-full object-contain drop-shadow-xl relative z-10 transform group-hover:scale-110 transition-transform duration-500 block dark:hidden [.dark_&]:hidden" />
                <img src="/dark-favcon.png" alt="Clearby Services" className="w-full h-full object-contain drop-shadow-xl relative z-10 transform group-hover:scale-110 transition-transform duration-500 hidden dark:block [.dark_&]:block" />
              </div>

              <motion.div 
                animate={{ y: [-5, 5, -5] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 -right-4 bg-[var(--card-bg)] border border-[var(--border-color)] px-4 py-2 rounded-xl shadow-lg backdrop-blur-md"
              >
                <span className="text-xs font-bold text-[var(--text-primary)]">🌐 Multilingual AI</span>
              </motion.div>

              <motion.div 
                animate={{ y: [5, -5, 5] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-16 -left-8 bg-[var(--card-bg)] border border-[var(--border-color)] px-4 py-2 rounded-xl shadow-lg backdrop-blur-md"
              >
                <span className="text-xs font-bold text-[var(--accent-action)]">Growth Partner</span>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="w-full bg-[var(--text-primary)]/5 text-[var(--text-primary)] py-16 border-y border-[var(--border-color)] transition-colors backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: 80, suffix: "+", label: "Projects Delivered", decimals: 0 },
            { value: 50, suffix: "+", label: "Clients Worldwide", decimals: 0 },
            { value: 4.9, suffix: "", label: "Client Rating", decimals: 1 },
            { value: 24, suffix: " hrs", label: "Response Time", decimals: 0 }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
                <NumberTicker 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  decimals={stat.decimals}
                  delay={idx * 0.15} 
                />
              </h3>
              <p className="text-xs uppercase tracking-widest text-[var(--text-body)] opacity-80 font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CORE SERVICES GRID */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] transition-colors">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-[var(--accent-action)] tracking-widest uppercase mb-3 block">Digital Marketing Services in Pune for Business Growth</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
            Everything your business needs to grow, in one place
          </h2>
          <p className="text-[var(--text-body)] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">Choose a starting point. Many clients begin with one service and add others as their needs grow.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((srv, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-[var(--text-primary)]/5 backdrop-blur-sm p-8 border border-[var(--border-color)] shadow-sm hover:shadow-xl hover:border-[var(--accent-action)] transition-all duration-300 rounded-3xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-bold text-[var(--accent-action)] tracking-widest uppercase bg-[var(--accent-action)]/10 px-3 py-1 rounded-full">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-action)] transition-colors">{srv.title}</h3>
                <p className="text-sm text-[var(--text-primary)] font-bold mb-3">{srv.tagline}</p>
                <p className="text-sm text-[var(--text-body)] opacity-90 mb-6 leading-relaxed">{srv.desc}</p>
                
                <div className="border-t border-[var(--border-color)] pt-5 mb-6">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-body)] mb-3">Key Solutions:</p>
                  <div className="flex flex-wrap gap-2">
                    {srv.disciplines.map((disc, dIdx) => (
                      <span key={dIdx} className="text-[11px] font-medium bg-[var(--bg-primary)] border border-[var(--border-color)] px-3 py-1 rounded-full text-[var(--text-body)] shadow-sm">
                        {disc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <Link href={srv.link} className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-action)] uppercase tracking-wider transition-colors inline-flex items-center gap-2 mt-auto">
                Explore {srv.title} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/services" className="text-sm font-medium text-[var(--text-body)] hover:text-[var(--accent-action)] underline underline-offset-4 transition-colors">
            Looking for photography, video production or something else? View all services.
          </Link>
        </div>
      </section>

      {/* 4. WHY CHOOSE US & VALUE PROPOSITION */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[var(--text-primary)]/5 border-y border-[var(--border-color)] transition-colors">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold text-[var(--accent-action)] tracking-widest uppercase mb-3 block">VALUE PROPOSITION</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-6 leading-tight">
              One team, a connected plan
            </h2>
            <p className="text-[var(--text-body)] text-base mb-8 leading-relaxed">
              Many businesses end up coordinating a consultant, an ad agency, a designer, a printer and a technology vendor, each with a different brief. Clearby Services brings strategy, marketing, creative and AI-enabled communication into a single plan, so decisions made in one area support the others.
            </p>
            <div className="space-y-6 text-base text-[var(--text-body)]">
              {[
                { title: "Strategy and execution together", desc: "Planners are connected to delivery teams, so the plan doesn't get lost in hand-offs." },
                { title: "A broad range under one roof", desc: "Marketing, AI, design, print, web and consulting from one Pune team." },
                { title: "AI where it genuinely helps", desc: "AI calling in English, Hindi and Marathi and AI-assisted content, reviewed by people." },
                { title: "Practical and clear", desc: "Plain-language plans, regular reviews and transparent reporting." }
              ].map((item, i) => (
                <div key={i} className="border-b border-[var(--border-color)] pb-5 flex items-start gap-4 transition-colors hover:text-[var(--accent-action)] group">
                  <div className="bg-[var(--accent-action)]/10 p-1 rounded-full shrink-0 group-hover:bg-[var(--accent-action)] transition-colors mt-1">
                     <CheckCircle2 className="w-4 h-4 text-[var(--accent-action)] group-hover:text-[var(--bg-primary)]" />
                  </div>
                  <div>
                    <span className="block font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-action)]">{item.title}</span>
                    <span className="text-sm opacity-90">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[var(--bg-primary)] p-4 border border-[var(--border-color)] shadow-xl rounded-3xl overflow-hidden group"
          >
            <img src="/Why-Choose.png" alt="Clearby Services Connected Team" className="w-full h-auto object-cover rounded-2xl filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
          </motion.div>
        </div>
      </section>

      {/* 5. ABOUT COMPANY */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] transition-colors">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-[var(--text-primary)]/5 p-4 border border-[var(--border-color)] shadow-xl rounded-3xl overflow-hidden group order-2 lg:order-1">
            <img src="/About.jpeg" alt="Clearby Services About" className="w-full h-auto object-cover rounded-2xl filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold text-[var(--accent-action)] tracking-widest uppercase mb-3 block">ABOUT CLEARBY SERVICES</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-6 leading-tight">
              Telling your unique story through smart automation
            </h2>
            <p className="text-[var(--text-body)] text-base md:text-lg leading-relaxed mb-8">
              At Clearby Services, we believe that every brand has a unique story - and we specialize in telling that story through innovative marketing strategies and powerful digital experiences. As a full-stack marketing and technology agency, we combine creative thinking, data-driven strategies, and smart automation to deliver measurable growth for businesses across industries.
            </p>

            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Who We Work With:</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--accent-action)] mt-2 shrink-0"></div>
                <p className="text-[var(--text-body)] text-sm"><strong>Startups and new businesses:</strong> Help with setup, brand, a first website and a simple marketing plan.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--accent-action)] mt-2 shrink-0"></div>
                <p className="text-[var(--text-body)] text-sm"><strong>Small and growing businesses:</strong> Consistent lead generation and visibility without hiring a full in-house team.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--accent-action)] mt-2 shrink-0"></div>
                <p className="text-[var(--text-body)] text-sm"><strong>Established companies:</strong> Dedicated campaigns, AI-enabled communication, content and creative at scale.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. HOW WE WORK (PROCESS) */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[var(--text-primary)]/5 border-t border-[var(--border-color)] transition-colors">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-[var(--accent-action)] tracking-widest uppercase mb-3 block">HOW WE WORK</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">A simple, transparent way to start</h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { step: "01", title: "Understand", desc: "We learn about your business, customers and goals." },
            { step: "02", title: "Assess", desc: "We review where you stand and what's realistic." },
            { step: "03", title: "Recommend", desc: "You get a clear plan and scope, with priorities." },
            { step: "04", title: "Deliver", desc: "We execute the agreed services and keep you updated." },
            { step: "05", title: "Review & Improve", desc: "We check results against your goals and adjust." },
          ].map((st, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-[var(--bg-primary)] p-6 border border-[var(--border-color)] rounded-3xl relative flex flex-col shadow-sm hover:shadow-xl hover:border-[var(--accent-action)] transition-all duration-300"
            >
              <span className="text-4xl font-bold text-[var(--text-primary)]/5 absolute top-4 right-4 select-none">{st.step}</span>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 relative z-10 mt-6">{st.title}</h3>
              <p className="text-sm text-[var(--text-body)] leading-relaxed relative z-10">{st.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] transition-colors">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold text-[var(--accent-action)] tracking-widest uppercase mb-3 block text-center">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-2">
            {[
              {
                q: "What does Clearby Services do?",
                a: "We're a Pune-based agency offering digital marketing, performance marketing and lead generation, AI-powered calling and creative production, business consulting, branding and printing, and website and software development."
              },
              {
                q: "Who do you work with?",
                a: "Startups, small and medium businesses, and established companies across various sectors looking for structured growth and efficient communication."
              },
              {
                q: "Do I have to use all your services?",
                a: "No. Many businesses start with one service. Because the services are connected, it's straightforward to add others later as your needs grow."
              },
              {
                q: "How do SEO, ads and social media work together?",
                a: "SEO builds long-term visibility, advertising delivers faster reach, and social media builds familiarity and engagement. We plan them together so each supports the others, and we explain which should lead for your specific goals."
              },
              {
                q: "What is AEO and GEO, and do I need them?",
                a: "AEO (answer engine optimisation) and GEO (generative engine optimisation) help your content be understood and referenced by tools such as AI assistants and AI-generated search summaries. Good structure, clear answers and strong credibility help. We'll tell you whether it's a priority for your business."
              },
              {
                q: "How can AI calling be used, and is it suitable for my business?",
                a: "Typical uses include following up on enquiries, appointment reminders, surveys and answering common questions, in English, Hindi or Marathi. We'll assess whether your use case suits AI calling and how human handover would work."
              },
              {
                q: "How much does it cost?",
                a: "Costs depend on the services, scope and duration. After a short conversation about your goals we provide a recommended scope and quotation based on fixed packages or project requirements."
              },
              {
                q: "How do I get started?",
                a: "Book a free consultation using our contact form or call us directly. We'll discuss your goals and suggest where to begin."
              }
            ].map((faq, idx) => (
              <div 
                key={idx} 
                className="border-b border-[var(--border-color)] last:border-b-0 group"
              >
                <button 
                  onClick={() => toggleFaq(idx)} 
                  className="w-full py-6 text-left flex justify-between items-center cursor-pointer"
                  aria-expanded={openFaq === idx}
                >
                  <span className={`text-base md:text-lg font-medium transition-colors duration-300 pr-8 ${openFaq === idx ? "text-[var(--accent-action)]" : "text-[var(--text-primary)] group-hover:text-[var(--accent-action)]"}`}>
                    {faq.q}
                  </span>
                  
                  <div className="relative w-4 h-4 flex items-center justify-center shrink-0">
                    <span className={`absolute w-full h-[2px] rounded-full transition-colors duration-300 ${openFaq === idx ? "bg-[var(--accent-action)]" : "bg-[var(--text-body)] group-hover:bg-[var(--accent-action)]"}`}></span>
                    <span className={`absolute w-full h-[2px] rounded-full transition-all duration-300 ${openFaq === idx ? "bg-[var(--accent-action)] rotate-0" : "bg-[var(--text-body)] rotate-90 group-hover:bg-[var(--accent-action)]"}`}></span>
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === idx ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm md:text-base text-[var(--text-body)] leading-relaxed pr-8">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 8. FINAL BOTTOM CTA BANNER WITH LAMP EFFECT */}
      <LampContainer>
        <motion.div 
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center max-w-4xl mx-auto px-4 relative z-50"
        >
          <span className="text-xs font-bold text-white/70 tracking-widest uppercase block mb-4">
            Next Steps
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Let&apos;s work out the right starting point
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us what you&apos;re trying to achieve. We&apos;ll suggest which services make sense, what to prioritise, and what a realistic first step looks like.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link 
              href="/contact" 
              className="bg-[var(--accent-action)] text-[var(--bg-primary)] font-bold py-4 px-10 rounded-full hover:opacity-90 transition-opacity text-sm shadow-[0_0_20px_rgba(2,132,199,0.4)] flex items-center gap-2 group"
            >
              Book a Free Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="https://wa.me/919503184448" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white font-bold py-4 px-10 rounded-full hover:bg-white/10 transition-colors text-sm backdrop-blur-sm"
            >
              Message on WhatsApp
            </Link>
          </div>
          <p className="text-white/60 text-sm mt-4">Or call +91 9503184448 / 7020112146</p>
        </motion.div>
      </LampContainer>

    </main>
  );
}