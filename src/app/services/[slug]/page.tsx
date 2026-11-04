import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

interface ServiceData {
  slug: string;
  title: string;
  subMenu?: string;
  category: string;
  h1: string;
  introParagraphs: string[];
  featuresSection: {
    heading: string;
    reasons: { title: string; description: string }[];
    process?: string[];
  };
  subServices: { name: string; description: string }[];
  comparisonSection?: {
    title?: string;
    who_benefits?: string[];
    deliverables_summary?: string[];
    data?: { feature: string; generic: string; clearby: string }[];
  };
  faqs: { question: string; answer: string }[];
  ctaSection: {
    footer_heading?: string;
    footer_text?: string;
    primary_button_label?: string;
    primary_button_url?: string;
    title?: string;
    text?: string;
    buttonText?: string;
  };
}

async function getService(slug: string): Promise<ServiceData | null> {
  const decodedSlug = decodeURIComponent(slug).trim();

  const { data: initialData, error } = await supabase
    .from('services')
    .select('*')
    .eq('slug', decodedSlug)
    .single();
  let data = initialData;

  if (error || !data) {
    const { data: fallbackData } = await supabase
      .from('services')
      .select('*')
      .ilike('slug', `%${decodedSlug}%`)
      .limit(1);

    if (fallbackData && fallbackData.length > 0) {
      data = fallbackData[0];
    }
  }

  if (!data) {
    return null;
  }

  return {
    slug: data.slug,
    title: data.title,
    subMenu: data.sub_menu,
    category: data.category,
    h1: data.h1 || data.title,
    introParagraphs: data.intro_paragraphs || [],
    featuresSection: data.features_section || { heading: "Key Features", reasons: [] },
    subServices: data.sub_services || [],
    comparisonSection: data.comparison_section,
    faqs: data.faqs || [],
    ctaSection: data.cta_section || {},
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = await getService(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const breadcrumbLabel = service.subMenu || service.h1 || service.title;
  
  // Resolve CTA copy dynamically from db fields
  const ctaHeading = service.ctaSection.footer_heading || service.ctaSection.title || "Ready to Get Started?";
  const ctaText = service.ctaSection.footer_text || service.ctaSection.text || "Connect with our experts today to discuss your project requirements.";
  const ctaButtonLabel = service.ctaSection.primary_button_label || service.ctaSection.buttonText || "Get a Consultation";
  const ctaButtonUrl = service.ctaSection.primary_button_url || "/contact";

  return (
    <div className="w-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">

      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="mb-4 text-[11px] font-bold text-[var(--text-body)] opacity-80 uppercase tracking-widest">
          <Link href="/" className="hover:text-[var(--accent-action)]">Home</Link> <span className="text-[var(--accent-action)]">›</span> <Link href="/services" className="hover:text-[var(--accent-action)]">Services</Link> <span className="text-[var(--accent-action)]">›</span> <span className="text-[var(--text-primary)]">{breadcrumbLabel}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold text-[var(--accent-action)] uppercase tracking-widest block mb-2">{service.category}</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--text-primary)] mb-6 leading-tight">
              {service.h1}
            </h1>

            <div className="space-y-4 mb-8 max-w-2xl">
              {service.introParagraphs.map((para, idx) => (
                <p key={idx} className="text-[var(--text-body)] text-base leading-relaxed opacity-95">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <ContactForm variant="hero" />
          </div>
        </div>
      </section>

      {/* 2. CORE FEATURES / KEY FEATURES OF OUR WEBSITES */}
      {service.featuresSection?.reasons && service.featuresSection.reasons.length > 0 && (
        <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[var(--card-bg)] border-t border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-[var(--text-primary)] mb-3">
              {service.featuresSection.heading || "Key Features"}
            </h2>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.featuresSection.reasons.map((feat, idx) => (
              <div key={idx} className="bg-[var(--bg-primary)] p-8 border border-[var(--border-color)] rounded-2xl shadow-sm flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[var(--accent-action)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-serif font-bold text-[var(--text-primary)] mb-2">{feat.title}</h3>
                  <p className="text-xs text-[var(--text-body)] leading-relaxed opacity-85">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Execution Process Timeline */}
          {service.featuresSection.process && service.featuresSection.process.length > 0 && (
            <div className="max-w-4xl mx-auto mt-20 pt-12 border-t border-[var(--border-color)]">
              <h3 className="text-2xl font-serif font-bold text-center mb-8">Our Development Process</h3>
              <div className="space-y-4">
                {service.featuresSection.process.map((step, idx) => (
                  <div key={idx} className="bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-color)] text-sm opacity-90 flex items-start gap-3">
                    <span className="font-bold text-[var(--accent-action)]">{idx + 1}.</span>
                    <span>{step.replace(/^\d+\.\s*/, '')}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* 3. SUB-SERVICES / TYPES OF WEBSITES & SERVICES */}
      {service.subServices && service.subServices.length > 0 && (
        <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-[var(--text-primary)] mb-3">Our Services & Solutions</h2>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.subServices.map((sub, idx) => (
              <div key={idx} className="bg-[var(--card-bg)] p-6 border border-[var(--border-color)] rounded-2xl shadow-sm transition-all hover:border-[var(--accent-action)]/50">
                <h3 className="font-serif font-bold text-[var(--text-primary)] mb-2">{sub.name}</h3>
                <p className="text-xs text-[var(--text-body)] leading-relaxed opacity-85">{sub.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. COMPARISON / WHO BENEFITS */}
      {service.comparisonSection && (
        <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[var(--card-bg)] border-t border-[var(--border-color)] text-[var(--text-primary)]">
          <div className="max-w-5xl mx-auto">
            {service.comparisonSection.who_benefits && service.comparisonSection.who_benefits.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-serif font-bold mb-6 text-center">Benefits & Who This Is For</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.comparisonSection.who_benefits.map((item, idx) => (
                    <div key={idx} className="bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-color)] text-sm flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[var(--accent-action)] shrink-0"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 5. FAQ SECTION */}
      {service.faqs && service.faqs.length > 0 && (
        <FaqAccordion 
          faqs={service.faqs.map(f => ({
            q: f.question,
            a: f.answer
          }))} 
        />
      )}

      {/* 6. BOTTOM CTA */}
      <section className="w-full py-20 bg-[var(--card-bg)] border-t border-[var(--border-color)] text-[var(--text-primary)] px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            {ctaHeading}
          </h2>
          <p className="text-[var(--text-body)] text-sm max-w-xl mx-auto mb-8 leading-relaxed opacity-90">
            {ctaText}
          </p>
          <Link 
            href={ctaButtonUrl} 
            className="bg-[var(--accent-action)] text-[var(--bg-primary)] font-bold py-3.5 px-8 rounded-xl hover:opacity-90 transition inline-flex items-center gap-2 text-xs uppercase tracking-wider shadow-lg"
          >
            <span>{ctaButtonLabel}</span> <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}