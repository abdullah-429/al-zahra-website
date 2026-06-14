import { Link } from "wouter";
import { Wrench, Zap, Sun, Flame, Wind, Cpu, Hammer, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    id: "mechanical",
    icon: Wrench,
    title: "Mechanical Engineering Works",
    tagline: "Heavy-duty piping and mechanical systems",
    desc: "Comprehensive mechanical engineering services covering all aspects of industrial piping and mechanical installation.",
    points: [
      "Piping fabrication, erection, and installation",
      "Ducting, cladding, and insulation systems",
      "Chiller piping and boiler piping",
      "Compressor and engine piping",
      "Utility system installation and commissioning",
      "HDPE pipe installation with fusing joint technology",
    ],
  },
  {
    id: "electrical",
    icon: Zap,
    title: "Electrical Installations",
    tagline: "Complete industrial electrical systems",
    desc: "Full-scope electrical installation services for industrial and commercial facilities, from cabling to panel installation.",
    points: [
      "Power cable and control cable laying",
      "Cable tray and ladder fabrication",
      "Electrical panel installation and wiring",
      "Industrial electrical system commissioning",
      "Bus tie duct installation",
      "Generator and power distribution systems",
    ],
  },
  {
    id: "solar",
    icon: Sun,
    title: "Solar Energy Systems",
    tagline: "Clean energy for industrial and commercial use",
    desc: "Turnkey solar energy solutions designed to reduce energy costs for industrial and commercial clients across Pakistan.",
    points: [
      "Industrial-scale solar PV system design",
      "Commercial rooftop solar installations",
      "Grid-tie and off-grid configurations",
      "Solar system commissioning and testing",
      "Long-term system monitoring and maintenance",
      "Energy cost analysis and ROI planning",
    ],
  },
  {
    id: "firefighting",
    icon: Flame,
    title: "Fire Fighting Systems",
    tagline: "Life safety and fire protection",
    desc: "Complete fire fighting system design, supply, and installation to protect industrial and commercial facilities.",
    points: [
      "Fire hydrant system design and installation",
      "Fire fighting piping and distribution",
      "Booster pump selection and installation",
      "Fire safety system testing and commissioning",
      "Compliance with local fire safety regulations",
      "Sprinkler systems and suppression systems",
    ],
  },
  {
    id: "hvac",
    icon: Wind,
    title: "HVAC & BMS Solutions",
    tagline: "Climate control and building management",
    desc: "End-to-end HVAC and BMS solutions for industrial, commercial, and healthcare facilities.",
    points: [
      "Chiller plant design and installation",
      "Air conditioning system installation",
      "Humidity control and cooling tower systems",
      "Building Management System (BMS) integration",
      "AHU and FCU installation",
      "HVAC system commissioning and maintenance",
    ],
  },
  {
    id: "automation",
    icon: Cpu,
    title: "Industrial Automation",
    tagline: "Smart systems for modern manufacturing",
    desc: "Advanced automation engineering to increase operational efficiency and reduce manual intervention in industrial facilities.",
    points: [
      "PLC and SCADA system integration",
      "Process automation for manufacturing",
      "Control panel design and installation",
      "Instrumentation and control systems",
      "Automation system commissioning",
      "Ongoing support and system optimization",
    ],
  },
  {
    id: "fabrication",
    icon: Hammer,
    title: "Fabrication & Erection Services",
    tagline: "Structural steel and tank fabrication",
    desc: "Heavy structural fabrication, erection services, and industrial tank manufacturing for all types of industrial facilities.",
    points: [
      "Structural fabrication and erection",
      "Machinery erection, shifting, and installation",
      "Air receiver tank fabrication",
      "Feed water tank and blowdown tank fabrication",
      "Diesel tank and low-boil tank fabrication",
      "Steam boiler and heat exchanger installation",
    ],
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0a1525] py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
              Our Services
            </p>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-tight mb-6" data-testid="heading-services">
              Integrated Engineering Services
            </h1>
            <p className="text-slate-400 text-base leading-relaxed">
              From mechanical piping to industrial automation, Al-Zahra Engineering Services
              delivers complete engineering solutions for Pakistan's industrial sector — all from a
              single, experienced team.
            </p>
          </div>
        </div>
      </section>

      {/* Service nav */}
      <div className="bg-[#060f1c] border-b border-white/10 sticky top-20 z-40 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-3 min-w-max">
            {services.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded transition-colors whitespace-nowrap font-medium"
                data-testid={`link-service-nav-${svc.id}`}
              >
                {svc.title.split(" ").slice(0, 2).join(" ")}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Services list */}
      <section className="bg-[#0d1b2e] py-20" data-testid="section-services-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              id={svc.id}
              className="bg-[#0a1525] border border-white/10 hover:border-blue-500/30 rounded-xl p-8 transition-all"
              data-testid={`card-service-${svc.id}`}
            >
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svc.icon className="h-7 w-7 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-amber-400 text-xs font-medium mb-1">{svc.tagline}</div>
                      <h2 className="text-xl font-serif font-bold text-white">{svc.title}</h2>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{svc.desc}</p>
                  <Link href="/contact">
                    <span className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors cursor-pointer">
                      Request a Quote
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
                <div>
                  <div className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-4">
                    Scope of Work
                  </div>
                  <div className="space-y-3">
                    {svc.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#060f1c] py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
              How We Work
            </p>
            <h2 className="text-3xl font-serif font-bold text-white">Our Delivery Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "We assess your requirements and site conditions to plan the optimal engineering approach." },
              { step: "02", title: "Design & Planning", desc: "Detailed engineering design, material selection, and project timeline development." },
              { step: "03", title: "Installation", desc: "Skilled teams execute the work to specification, with strict safety and quality controls." },
              { step: "04", title: "Commissioning", desc: "Testing, handover, and ongoing support to ensure everything operates as designed." },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-[#0a1525] border border-white/10 rounded-lg p-6"
                data-testid={`card-process-${item.step}`}
              >
                <div className="text-5xl font-serif font-bold text-blue-500/20 mb-4">{item.step}</div>
                <h3 className="text-white font-serif font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">
            Need Engineering Support?
          </h2>
          <p className="text-blue-200 text-sm mb-6">
            Our team is available 24/7 to discuss your project and provide a detailed quote.
          </p>
          <Link href="/contact">
            <span
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-7 py-3 rounded text-sm hover:bg-blue-50 transition-colors cursor-pointer"
              data-testid="button-services-cta"
            >
              Contact Our Engineers
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
