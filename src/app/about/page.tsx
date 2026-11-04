import Link from "next/link";
import { 
  Megaphone, 
  MonitorSmartphone, 
  Briefcase, 
  Bot, 
  Palette, 
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  ShieldCheck,
  Clock,
  GraduationCap,
  Scale
} from "lucide-react";
import VisionCards from "@/components/VisionCards";
import FaqAccordion from "@/components/FaqAccordion";
import FacultyCards from "@/components/FacultyCards";

export const metadata = {
  title: 'About Us | Clearby Services',
  description: 'Clearby Services is a Pune-based digital marketing and technology agency helping startups, small and medium businesses and established companies get found online.',
};

export default function AboutPage() {
  const coreValues = [
    { title: "Clarity", desc: "We explain options in plain language so you can decide with confidence.", icon: <Lightbulb className="w-6 h-6" /> },
    { title: "Honesty", desc: "We say what is realistic and avoid promises we cannot control.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Practicality", desc: "We recommend what fits your budget and stage, not the biggest package.", icon: <Clock className="w-6 h-6" /> },
    { title: "Collaboration", desc: "Your knowledge of your customers and ours of the channels work best together.", icon: <GraduationCap className="w-6 h-6" /> },
    { title: "Integrity", desc: "Responsible digital practices that respect your business goals and ethics.", icon: <Scale className="w-6 h-6" /> },
  ];

  const servicesList = [
    { 
      title: "Digital Marketing", 
      desc: "SEO (including AEO and GEO), social media, influencer and content marketing, and Google Business Profile management.", 
      icon: <Megaphone className="w-6 h-6 text-[var(--accent-action)]" /> 
    },
    { 
      title: "Performance Marketing & Lead Generation", 
      desc: "Google Ads, email, SMS, WhatsApp and call-based campaigns, with tracking.", 
      icon: <TrendingUpIcon className="w-6 h-6 text-[var(--accent-action)]" /> 
    },
    { 
      title: "AI Solutions", 
      desc: "AI calling in English, Hindi and Marathi, plus AI-assisted video, voice-over, graphics and content. [Confirm]", 
      icon: <Bot className="w-6 h-6 text-[var(--accent-action)]" /> 
    },
    { 
      title: "Business Consulting & Startup Setup", 
      desc: "planning, growth and marketing strategy guidance.", 
      icon: <Briefcase className="w-6 h-6 text-[var(--accent-action)]" /> 
    },
    { 
      title: "Branding, Design & Printing", 
      desc: "logos, visiting cards, brochures, company profiles and marketing collateral.", 
      icon: <Palette className="w-6 h-6 text-[var(--accent-action)]" /> 
    },
    { 
      title: "Website & Software Development", 
      desc: "websites, e-commerce, mobile apps and custom software.", 
      icon: <MonitorSmartphone className="w-6 h-6 text-[var(--accent-action)]" /> 
    },
  ];

  const teamRoles = [
    "SEO and digital marketing specialists",
    "Paid media and performance marketers",
    "Content writers and social media managers",
    "Graphic and UI/UX designers",
    "Web and software developers",
    "Business and marketing consultants"
  ];

  const differentiators = [
    { title: "One team for strategy and delivery.", desc: "Consulting, marketing, creative and development can work from the same plan." },
    { title: "AI-enabled communication and creative.", desc: "We offer AI calling in English, Hindi and Marathi and AI-assisted content, with people reviewing the output. [Confirm]" },
    { title: "A broad portfolio, explained clearly.", desc: "You can start with one service and add others as your needs grow." },
    { title: "Honest expectations.", desc: "We do not promise rankings, leads or sales. We explain what is realistic and how we will measure it." },
    { title: "Plain language.", desc: "We explain choices without jargon, so you can decide with confidence." },
    { title: "Local and accessible.", desc: "We are a Pune team you can meet. [Confirm]" }
  ];

  const faqs = [
    {
      question: "What is Clearby Services?",
      answer: "Clearby Services is a digital marketing and technology agency in Pune. We offer digital marketing, performance marketing, AI solutions, business consulting, branding and printing, and website and software development."
    },
    {
      question: "Where is Clearby Services located?",
      answer: "We are based in Pashan, Pune, Maharashtra. We work with businesses in Pune and across India. [Confirm address and service areas]"
    },
    {
      question: "Who do you work with?",
      answer: "Startups, small and medium businesses and established companies. Our plans are tailored to your stage, budget and goals. [Confirm sectors served]"
    },
    {
      question: "Do I have to use all your services?",
      answer: "No. Many clients start with one service, such as SEO or a website, and add others later. Because the services are connected, adding them is straightforward."
    },
    {
      question: "What is AI calling?",
      answer: "AI calling uses automated voice agents to handle routine calls, such as follow-ups or reminders, in English, Hindi or Marathi. We assess whether it suits your use case and how human handover and consent would work. [Confirm]"
    },
    {
      question: "How do you price your services?",
      answer: "Pricing depends on scope, platforms, volume and duration. After a short conversation about your goals, we provide a written scope and quotation. [Confirm pricing approach]"
    },
    {
      question: "How do you report results?",
      answer: "We agree measures at the start, such as enquiries, calls, rankings or conversions, and share regular reports in plain language. [Confirm reporting frequency]"
    },
    {
      question: "Can you guarantee rankings or leads?",
      answer: "No agency can honestly guarantee them, because search engines, platforms and markets are outside our control. We commit to clear plans, transparent reporting and regular reviews."
    },
    {
      question: "Do you offer a free consultation?",
      answer: "Yes, we offer a first conversation to understand your goals and suggest where to begin. [Confirm that it is free and what it includes]"
    },
    {
      question: "How can I contact Clearby Services?",
      answer: "You can reach us through the contact page on our website, by email or by phone using the details listed there."
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] overflow-hidden text-[var(--text-primary)] font-sans">
      
      {/* 1. HEADER & INTRO SECTION */}
      <section className="pt-24 md:pt-32 pb-16 px-4 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="mb-8 text-xs font-bold text-[var(--text-body)] uppercase tracking-widest flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--accent-action)] transition-colors">HOME</Link> 
          <span className="text-[var(--accent-action)]">›</span> 
          <span className="text-[var(--text-primary)]">ABOUT US</span>
        </div>
        
        <span className="text-xs font-bold text-[var(--accent-action)] uppercase tracking-widest block mb-4">
          About Clearby Services
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 max-w-4xl text-[var(--text-primary)] leading-tight">
          Your Digital Marketing and Technology Partner in <span className="text-[var(--accent-action)]">Pune</span>
        </h1>
        
        <div className="max-w-3xl space-y-6 text-base md:text-lg text-[var(--text-body)] leading-relaxed text-left">
          <p>
            <strong className="text-[var(--text-primary)] font-semibold">Clearby Services</strong> is a Pune-based digital marketing and technology agency. We help startups, small and medium businesses and established companies get found online, reach the right customers and run their digital operations with more clarity.
          </p>
          <p>
            Our work covers digital marketing, performance marketing and lead generation, AI-powered solutions, business consulting, branding and printing, and website and software development. Many businesses end up coordinating several vendors who never talk to each other. We aim to bring strategy and execution into one plan, so each piece supports the others.
          </p>
          <p>
            We are based in Pashan, Pune, and work with businesses locally and across India.
          </p>
          
          <div className="bg-[var(--card-bg)] border border-[var(--border-color)] p-6 rounded-2xl space-y-2 mt-4">
            <h3 className="font-bold text-[var(--text-primary)]">Who we help.</h3>
            <p className="text-sm">Startups preparing to launch, growing businesses that want more enquiries, and established companies planning new campaigns, systems or markets.</p>
          </div>
          
          <div className="bg-[var(--card-bg)] border border-[var(--border-color)] p-6 rounded-2xl space-y-2">
            <h3 className="font-bold text-[var(--text-primary)]">How we work with you.</h3>
            <p className="text-sm">We begin with a conversation about your goals, agree on a clear scope, and keep you informed with plain-language updates. You choose how much support you need.</p>
          </div>
        </div>
      </section>

      {/* 2. VISION & MISSION SECTION */}
      <section className="w-full bg-[var(--card-bg)] py-24 px-4 sm:px-6 lg:px-8 border-y border-[var(--border-color)] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="mb-6 flex flex-col gap-2">
              <span className="text-xs font-bold text-[var(--accent-action)] tracking-widest uppercase">OUR VISION & MISSION</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">Clarity & Practical Growth</h2>
            </div>
            
            <div className="space-y-6 text-[var(--text-body)] text-base md:text-lg leading-relaxed mb-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--accent-action)] mb-1">Our vision</h3>
                <p>To be a trusted growth partner for businesses in Pune and beyond, known for clarity, practical thinking and honest work.</p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--accent-action)] mb-2">Our mission</h3>
                <ul className="space-y-2.5 text-sm">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-action)] shrink-0 mt-0.5" />
                    Understand your business before recommending anything
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-action)] shrink-0 mt-0.5" />
                    Connect strategy with execution, so plans turn into action
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-action)] shrink-0 mt-0.5" />
                    Use technology and AI where they genuinely help
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-action)] shrink-0 mt-0.5" />
                    Report results plainly, including what did not work
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-action)] shrink-0 mt-0.5" />
                    Build long-term relationships, not one-off transactions
                  </li>
                </ul>
              </div>
            </div>

            <blockquote className="border-l-2 border-[var(--accent-action)] pl-6 py-2 italic text-lg md:text-xl text-[var(--text-primary)] leading-relaxed font-medium">
              &ldquo;Connecting strategy and execution into one plan, so each piece supports the others.&rdquo;
            </blockquote>
          </div>
          
          <div className="relative w-full h-full flex items-center justify-center">
            <VisionCards />
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-[var(--accent-action)] uppercase tracking-widest block mb-2">Pillars</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">Our Approach</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {coreValues.map((val, idx) => (
            <div key={idx} className="bg-[var(--card-bg)] p-8 border border-[var(--border-color)] hover:border-[var(--accent-action)] rounded-2xl shadow-sm transition-all duration-300 flex flex-col items-start group">
              <div className="mb-6 text-[var(--text-body)] group-hover:text-[var(--accent-action)] group-hover:scale-110 transition-all duration-300">
                {val.icon}
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">{val.title}</h3>
              <p className="text-sm text-[var(--text-body)] leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHAT WE DO */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[var(--card-bg)] border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-[var(--accent-action)] uppercase tracking-widest block mb-2">Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">What We Do</h2>
          <p className="text-[var(--text-body)] max-w-2xl mx-auto">Comprehensive digital solutions designed to scale your business operations.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((srv, idx) => (
            <div key={idx} className="bg-[var(--bg-primary)] p-8 border border-[var(--border-color)] rounded-2xl shadow-sm hover:border-[var(--accent-action)] transition-all">
              <div className="p-3 w-fit rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] mb-6">
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{srv.title}</h3>
              <p className="text-sm text-[var(--text-body)] leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. OUR TEAM */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-[var(--accent-action)] uppercase tracking-widest block mb-2">Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-6">Our Team</h2>
          <p className="text-[var(--text-body)] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Our team brings together digital marketing, creative and technology skills, so most projects can be handled without handing work between unrelated vendors.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Faculty Cards Component (65% width = lg:col-span-8) */}
          <div className="lg:col-span-8 relative w-full py-12 flex items-center justify-center overflow-hidden">
            <FacultyCards />
          </div>

          {/* Right Column: Typical Roles (35% width = lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--accent-action)] mb-3">Typical roles include:</h3>
            <div className="grid grid-cols-1 gap-3">
              {teamRoles.map((role, idx) => (
                <div key={idx} className="bg-[var(--card-bg)] p-3.5 rounded-xl border border-[var(--border-color)] text-xs md:text-sm flex items-center gap-3 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-action)] shrink-0" />
                  <span className="font-medium text-[var(--text-primary)] leading-tight">{role}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. ABOUT THE FOUNDER */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[var(--card-bg)] border-y border-[var(--border-color)]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold text-[var(--accent-action)] uppercase tracking-widest block mb-2">Leadership</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-8">About the Founder</h2>
          
          <div className="bg-[var(--bg-primary)] p-8 md:p-10 border border-[var(--border-color)] rounded-2xl space-y-4 text-sm text-[var(--text-body)]">
            <p className="italic">[Founder name] founded Clearby Services in [year]. [Add three or four sentences: professional background, why Clearby was started, areas of expertise and what clients can expect when they work with the founder.]</p>
            <p className="italic opacity-80">[Add a photo, a LinkedIn link and one short quote on the founder’s approach, with approval. Include only facts that can be verified.]</p>
          </div>
        </div>
      </section>

     {/* 7. WHAT MAKES US DIFFERENT */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)]">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <span className="text-xs font-bold text-[var(--accent-action)] uppercase tracking-widest block mb-2">Differentiation</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-2">What Makes Us Different?</h2>
          <p className="text-[var(--text-body)] text-xs md:text-sm">Plenty of agencies offer marketing or technology. Here is how we approach it.</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {differentiators.map((item, idx) => (
            <div key={idx} className="bg-[var(--card-bg)] p-5 rounded-xl border border-[var(--border-color)] flex items-start gap-3.5 shadow-sm">
              <div className="p-1.5 rounded-full bg-[var(--bg-primary)] text-[var(--accent-action)] shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">{item.title}</h3>
                <p className="text-xs text-[var(--text-body)] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <FaqAccordion faqs={faqs.map(({ question, answer }) => ({ q: question, a: answer }))} />

      {/* 9. FINAL CTA BANNER */}
      <section className="w-full py-24 bg-[var(--card-bg)] border-t border-[var(--border-color)] text-center px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-6">
            Let’s Talk About Your Business
          </h2>
          <p className="text-[var(--text-body)] text-base md:text-lg mb-10 leading-relaxed">
            Tell us what you are trying to achieve. We will suggest a practical starting point and explain what to expect, with no obligation. [Confirm]
          </p>
          <Link 
            href="/contact" 
            className="bg-[var(--accent-action)] text-[var(--bg-primary)] font-bold py-4 px-8 rounded-xl hover:opacity-90 transition-opacity inline-flex items-center gap-2 text-sm md:text-base shadow-lg mb-4"
          >
            Book a Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}

function TrendingUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}