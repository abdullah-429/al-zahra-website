import { Link } from "wouter";
import { CheckCircle, Shield, Award, Clock, Users, Zap, ArrowRight } from "lucide-react";

const values = [
  { icon: Shield, label: "Integrity", desc: "We operate with full transparency and honesty in every client relationship." },
  { icon: Award, label: "Quality", desc: "Every installation meets the highest engineering standards and specifications." },
  { icon: Zap, label: "Reliability", desc: "Consistent delivery and dependable performance on every project." },
  { icon: CheckCircle, label: "Safety", desc: "Strict health and safety protocols on every job site, every day." },
  { icon: Users, label: "Professionalism", desc: "Trained engineering teams with certified expertise across all disciplines." },
  { icon: Clock, label: "Accountability", desc: "We take full ownership of our work from planning through commissioning." },
];

const milestones = [
  { year: "2010", event: "Al-Zahra Engineering Services established in Karachi" },
  { year: "2012", event: "Expanded into HVAC and BMS solutions for commercial clients" },
  { year: "2015", event: "Completed first major textile mill project in Kotri" },
  { year: "2018", event: "Added solar energy and industrial automation divisions" },
  { year: "2020", event: "Partnered with hospitals including SIUT and Liaquat National" },
  { year: "2025", event: "15+ years serving Pakistan's industrial sector" },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0a1525] py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-tight mb-6" data-testid="heading-about">
              15+ Years of Industrial Engineering Excellence
            </h1>
            <p className="text-slate-400 text-base leading-relaxed">
              Established in 2010, Al-Zahra Engineering Services has grown from a local engineering
              outfit to one of Karachi's most trusted industrial partners — delivering integrated
              mechanical, electrical, solar, and automation solutions across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#0d1b2e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
                Our Story
              </p>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">
                Built on Experience, Driven by Excellence
              </h2>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                <p>
                  Al-Zahra Engineering Services was founded in 2010 in the heart of Karachi's
                  Korangi Industrial Area with a single mission: to provide industrial clients with
                  engineering solutions they could genuinely depend on.
                </p>
                <p>
                  Over 15 years, we've built a reputation for technical rigor, professional delivery,
                  and a deep understanding of Pakistan's industrial landscape. Our work spans textile
                  mills, power generation facilities, hospitals, commercial complexes, and heavy
                  manufacturing plants.
                </p>
                <p>
                  We offer end-to-end services — from project design and equipment procurement
                  through installation, fabrication, erection, and commissioning. When something
                  goes wrong in the middle of the night, our teams are ready.
                </p>
                <p>
                  Today, we serve over 40 major clients across Pakistan, with a growing portfolio
                  in solar energy and industrial automation as the sector modernizes.
                </p>
              </div>
            </div>
            <div className="space-y-0">
              <h3 className="text-white font-serif font-semibold text-lg mb-8">Our Journey</h3>
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-5 pb-8 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white text-xs font-bold">{m.year.slice(2)}</span>
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px bg-blue-500/20 flex-1 mt-2" />
                    )}
                  </div>
                  <div className="pt-2">
                    <div className="text-amber-400 text-xs font-semibold mb-1">{m.year}</div>
                    <div className="text-slate-300 text-sm">{m.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#060f1c] py-20 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-1 bg-amber-500 mx-auto mb-6 rounded-full" />
          <h2 className="text-2xl font-serif font-bold text-white mb-6">Our Mission</h2>
          <blockquote className="text-xl sm:text-2xl font-serif text-slate-300 leading-relaxed italic mb-10" data-testid="text-mission-quote">
            "At Al-Zahra Engineering Services, our mission is to deliver high-quality, reliable
            engineering solutions in mechanical, electrical, and automation systems."
          </blockquote>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              { label: "Exceed Expectations", desc: "Through technical excellence, integrity, and safety on every project." },
              { label: "Long-Term Partnerships", desc: "Building relationships that extend beyond single projects." },
              { label: "Industrial Growth", desc: "Contributing to Pakistan's industrial development and success." },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#0a1525] border border-white/10 rounded-lg p-5"
              >
                <div className="w-8 h-1 bg-blue-500 mb-4 rounded-full" />
                <div className="text-white font-semibold text-sm mb-2">{item.label}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0d1b2e] py-20" data-testid="section-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
              Our Ethos
            </p>
            <h2 className="text-3xl font-serif font-bold text-white">
              The Values That Drive Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.label}
                className="bg-[#0a1525] border border-white/10 hover:border-blue-500/30 rounded-lg p-6 transition-all group"
                data-testid={`card-value-${v.label.toLowerCase()}`}
              >
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <v.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-white font-serif font-semibold text-base mb-2">{v.label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="bg-[#060f1c] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
                Health & Safety
              </p>
              <h2 className="text-3xl font-serif font-bold text-white mb-6 leading-tight">
                Safety Is Not Negotiable
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Our commitment to health and safety goes beyond compliance. Every team member is
                trained in site safety procedures, and all projects are planned with full risk
                assessments before work begins.
              </p>
              <div className="space-y-3">
                {[
                  "Rigorous pre-job safety planning on all sites",
                  "Continuous health and safety training for all engineers",
                  "PPE compliance enforced across all operations",
                  "Emergency response protocols in place 24/7",
                  "Regular safety audits and site inspections",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0a1525] border border-white/10 rounded-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "15+", label: "Years Zero Incident Policy" },
                  { value: "100%", label: "PPE Compliance Rate" },
                  { value: "24/7", label: "Safety Hotline Active" },
                  { value: "40+", label: "Certified Site Engineers" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-[#060f1c] rounded-lg border border-white/5">
                    <div className="text-2xl font-serif font-bold text-amber-400 mb-1">{stat.value}</div>
                    <div className="text-slate-500 text-xs leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-blue-200 text-sm mb-6">
            Contact our team to discuss your project requirements.
          </p>
          <Link href="/contact">
            <span
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-7 py-3 rounded text-sm hover:bg-blue-50 transition-colors cursor-pointer"
              data-testid="button-about-cta"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
