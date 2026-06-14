import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  Wrench,
  Zap,
  Sun,
  Flame,
  Wind,
  Cpu,
  Hammer,
  Shield,
  Clock,
  Users,
  MapPin,
  CheckCircle,
} from "lucide-react";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const services = [
  {
    icon: Wrench,
    title: "Mechanical Engineering Works",
    desc: "Piping fabrication, erection, installation, ducting, cladding, insulation, and utility systems for industrial applications.",
  },
  {
    icon: Zap,
    title: "Electrical Installations",
    desc: "Power cable, control cable, cable tray fabrication, electrical panels, and complete industrial wiring systems.",
  },
  {
    icon: Sun,
    title: "Solar Energy Systems",
    desc: "Industrial and commercial solar energy solutions designed to reduce costs and increase operational sustainability.",
  },
  {
    icon: Flame,
    title: "Fire Fighting Systems",
    desc: "Fire hydrant systems, booster pumps, piping design, and complete fire safety installation and commissioning.",
  },
  {
    icon: Wind,
    title: "HVAC & BMS Solutions",
    desc: "Chiller plants, AC systems, cooling towers, humidity systems, and building management system integration.",
  },
  {
    icon: Cpu,
    title: "Industrial Automation",
    desc: "Advanced automation engineering solutions for industrial facilities to boost efficiency and reduce downtime.",
  },
];

const clients = [
  "Gul Ahmed Textile",
  "Al-Karam Textiles",
  "Artistic Milliners",
  "Soorty Enterprises",
  "Yunus Textile Mills",
  "SIUT Hospital",
  "Liaquat National Hospital",
  "Dollar Industries",
  "Orient Energy System",
  "Amma Tower",
];

function StatCard({
  value,
  suffix,
  label,
  isVisible,
}: {
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
}) {
  const count = useCountUp(value, 1800, isVisible);
  return (
    <div className="text-center" data-testid={`stat-${label.toLowerCase().replace(/\s/g, "-")}`}>
      <div className="text-4xl font-serif font-bold text-white">
        {count}
        {suffix}
      </div>
      <div className="text-blue-300 text-sm mt-1 font-medium">{label}</div>
    </div>
  );
}

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-[#0a1525] overflow-hidden min-h-[88vh] flex items-center">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #f59e0b 0%, transparent 40%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, white 0, white 1px, transparent 0, transparent 60px), repeating-linear-gradient(180deg, white 0, white 1px, transparent 0, transparent 60px)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-300 text-xs font-medium tracking-widest uppercase">
                Est. 2010 &mdash; Karachi, Pakistan
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6"
              data-testid="heading-hero"
            >
              Reliable Mechanical, Electrical &{" "}
              <span className="text-blue-400">Industrial Engineering</span> Services
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl">
              Al-Zahra Engineering Services provides mechanical, electrical, solar energy, fire
              fighting, HVAC, BMS, fabrication, and automation solutions for industrial and
              commercial clients across Pakistan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <span
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-7 py-3.5 rounded text-sm tracking-wide transition-all duration-200 cursor-pointer"
                  data-testid="button-hero-quote"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link href="/services">
                <span
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-7 py-3.5 rounded text-sm tracking-wide transition-all duration-200 cursor-pointer"
                  data-testid="button-hero-services"
                >
                  View Our Services
                  <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section
        ref={statsRef}
        className="bg-blue-700 py-10"
        data-testid="section-stats"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value={15} suffix="+" label="Years Experience" isVisible={statsVisible} />
            <StatCard value={40} suffix="+" label="Major Clients" isVisible={statsVisible} />
            <StatCard value={7} suffix="" label="Service Domains" isVisible={statsVisible} />
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-white">24/7</div>
              <div className="text-blue-200 text-sm mt-1 font-medium">Emergency Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#0d1b2e] py-20" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Integrated Engineering Solutions
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
              End-to-end engineering services covering installation, fabrication, maintenance, and
              plant setup across Pakistan's industrial sector.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className="group bg-[#0a1525] border border-white/10 hover:border-blue-500/40 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                data-testid={`card-service-${i}`}
              >
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors">
                  <svc.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-white font-serif font-semibold text-base mb-3">{svc.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services">
              <span
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors cursor-pointer"
                data-testid="link-all-services"
              >
                View All Services
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission callout */}
      <section className="bg-[#060f1c] py-20 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <div className="w-12 h-1 bg-amber-500 mx-auto mb-6 rounded-full" />
            <blockquote
              className="text-2xl sm:text-3xl font-serif text-white leading-snug font-medium italic"
              data-testid="text-mission"
            >
              "At Al-Zahra Engineering Services, our mission is to deliver high-quality, reliable
              engineering solutions in mechanical, electrical, and automation systems."
            </blockquote>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
            {[
              { icon: Shield, label: "Safety First", desc: "Committed to health and safety standards on every project" },
              { icon: CheckCircle, label: "Technical Excellence", desc: "Trained engineering teams with 15+ years expertise" },
              { icon: Clock, label: "Reliability", desc: "24/7 emergency response, planned preventive maintenance" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <item.icon className="h-6 w-6 text-amber-400" />
                </div>
                <div className="text-white font-semibold text-sm mb-1">{item.label}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients strip */}
      <section className="bg-[#0d1b2e] py-16" data-testid="section-clients">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-2">
              Trusted By
            </p>
            <h2 className="text-2xl font-serif font-bold text-white">
              Pakistan's Leading Industrial Clients
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {clients.map((client) => (
              <div
                key={client}
                className="bg-[#0a1525] border border-white/10 rounded px-4 py-2.5 text-slate-400 text-xs font-medium hover:text-slate-200 hover:border-blue-500/30 transition-all"
                data-testid={`badge-client-${client.replace(/\s+/g, "-").toLowerCase()}`}
              >
                {client}
              </div>
            ))}
            <Link href="/clients">
              <span className="bg-blue-600/20 border border-blue-500/30 rounded px-4 py-2.5 text-blue-400 text-xs font-semibold hover:bg-blue-600/30 transition-all cursor-pointer">
                + View All Clients
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-[#060f1c] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
                Why Al-Zahra
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6 leading-tight">
                The Engineering Partner You Can Depend On
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                For over 15 years, we've been the trusted engineering partner for Pakistan's
                industrial sector — from textile mills and power plants to hospitals and commercial
                complexes.
              </p>
              <div className="space-y-4">
                {[
                  "15+ years of industrial engineering experience",
                  "End-to-end project delivery from design to commissioning",
                  "Trained and certified engineering teams",
                  "24/7 emergency response and planned maintenance",
                  "Strong commitment to health, safety & sustainability",
                  "Long-term client relationships across Pakistan",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "Integrity", color: "blue" },
                { icon: CheckCircle, label: "Quality", color: "amber" },
                { icon: Clock, label: "Reliability", color: "blue" },
                { icon: Users, label: "Professionalism", color: "amber" },
                { icon: Zap, label: "Safety", color: "blue" },
                { icon: MapPin, label: "Karachi-Based", color: "amber" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`bg-[#0a1525] border rounded-lg p-5 text-center ${
                    item.color === "blue"
                      ? "border-blue-500/20 hover:border-blue-500/40"
                      : "border-amber-500/20 hover:border-amber-500/40"
                  } transition-all`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 ${
                      item.color === "blue" ? "bg-blue-500/10" : "bg-amber-500/10"
                    }`}
                  >
                    <item.icon
                      className={`h-5 w-5 ${
                        item.color === "blue" ? "text-blue-400" : "text-amber-400"
                      }`}
                    />
                  </div>
                  <div className="text-white text-sm font-semibold">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-16" data-testid="section-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-blue-200 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Contact our team today for a consultation. We're available 24/7 for emergency
            engineering support across Pakistan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <span
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-3.5 rounded text-sm tracking-wide hover:bg-blue-50 transition-colors cursor-pointer"
                data-testid="button-cta-contact"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link href="/projects">
              <span
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded text-sm tracking-wide hover:border-white/60 transition-colors cursor-pointer"
                data-testid="button-cta-projects"
              >
                View Our Projects
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
