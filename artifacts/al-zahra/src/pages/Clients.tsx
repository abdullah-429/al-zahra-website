import { Link } from "wouter";
import { ArrowRight, Building2, Factory, HeartPulse } from "lucide-react";

const sectors = [
  {
    icon: Factory,
    label: "Textile & Garments",
    color: "blue",
    clients: [
      "Gul Ahmed Textile – Karachi",
      "Al-Karam Textiles – Karachi",
      "Artistic Milliners – Karachi",
      "Artistic Fabric – Karachi",
      "Soorty Enterprises – Karachi",
      "Yunus Textile Mills",
      "Jantex Textile",
      "Zaman Textile Mills – Karachi",
      "Zaman Textile Mills – Kotri",
      "Union Fabric – Karachi",
      "Acmy Textile – Karachi",
      "Mekotex Spinning Mills – Karachi",
      "Mekotex Spinning Mills – Kotri",
      "Bari Textile Mills – Hub Chowki",
      "Mustaqeem Dyeing – Karachi",
      "Indus Dyeing – Muzaffargarh",
      "Khas Socks & Knitwear – Karachi",
      "Raniyal Textile – Karachi",
      "Hantex Textile – Karachi",
      "Afroze Textile – Karachi",
      "Union Denim – Karachi",
      "Dollar Industries – Karachi",
    ],
  },
  {
    icon: HeartPulse,
    label: "Healthcare",
    color: "amber",
    clients: [
      "SIUT Hospital – Karachi",
      "Liaquat National Hospital – Karachi",
    ],
  },
  {
    icon: Building2,
    label: "Commercial & Industrial",
    color: "blue",
    clients: [
      "Mecatron Solutions – Karachi",
      "Orient Energy System – Karachi",
      "Amma Tower",
      "Al Jadeed Super Market",
      "Ahmed Lase – Karachi",
      "Rizwan Enterprises – Karachi",
      "Kem International – Karachi",
      "Fazal Cloth Mills – Multan",
      "Umar Spinning Mills – Lahore",
      "Mehran Plastic Pvt. Ltd.",
      "Blow Plats Pvt. Ltd.",
      "Sunrise Pvt. Ltd.",
      "Grace Packages Pvt. Ltd.",
      "Baig Packages Pvt. Ltd.",
      "Multicap Pvt. Ltd.",
      "E Pharam Pvt. Ltd.",
    ],
  },
];

export default function Clients() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0a1525] py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
              Our Clients
            </p>
            <h1
              className="text-4xl sm:text-5xl font-serif font-bold text-white leading-tight mb-6"
              data-testid="heading-clients"
            >
              Trusted by Pakistan's Leading Industries
            </h1>
            <p className="text-slate-400 text-base leading-relaxed">
              Over 15 years, we've built long-term engineering partnerships with textile mills,
              hospitals, manufacturing facilities, and commercial complexes across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-blue-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: "40+", label: "Active Clients" },
              { value: "3", label: "Industry Sectors" },
              { value: "15+", label: "Cities Served" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-serif font-bold text-white">{s.value}</div>
                <div className="text-blue-200 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clients by sector */}
      <section className="bg-[#0d1b2e] py-20" data-testid="section-clients-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {sectors.map((sector) => (
            <div key={sector.label} data-testid={`section-sector-${sector.label.toLowerCase().replace(/\s/g, "-")}`}>
              <div className="flex items-center gap-3 mb-8">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    sector.color === "blue"
                      ? "bg-blue-500/10 border border-blue-500/20"
                      : "bg-amber-500/10 border border-amber-500/20"
                  }`}
                >
                  <sector.icon
                    className={`h-5 w-5 ${
                      sector.color === "blue" ? "text-blue-400" : "text-amber-400"
                    }`}
                  />
                </div>
                <div>
                  <h2 className="text-white font-serif font-bold text-xl">{sector.label}</h2>
                  <div className="text-slate-500 text-xs">
                    {sector.clients.length} clients
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {sector.clients.map((client) => (
                  <div
                    key={client}
                    className={`bg-[#0a1525] border rounded-lg px-4 py-3 hover:border-blue-500/30 transition-all ${
                      sector.color === "blue" ? "border-white/10" : "border-white/10"
                    }`}
                    data-testid={`card-client-${client.replace(/[\s–.]+/g, "-").toLowerCase()}`}
                  >
                    <div className="text-slate-300 text-sm font-medium leading-snug">{client}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial-style note */}
      <section className="bg-[#060f1c] py-20 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-1 bg-blue-500 mx-auto mb-8 rounded-full" />
          <h2 className="text-2xl font-serif font-bold text-white mb-6">
            Long-Term Partnerships Built on Delivery
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto mb-10">
            Many of our clients have worked with us for over 10 years — returning for new projects
            and expansions because they know we deliver on time, on spec, and within budget. From
            single machine installations to full plant setups, we treat every project as a
            long-term investment in the relationship.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { value: "10+", label: "Years avg. client tenure" },
              { value: "100%", label: "Project completion rate" },
              { value: "24/7", label: "Post-commissioning support" },
            ].map((s) => (
              <div key={s.label} className="bg-[#0a1525] border border-white/10 rounded-lg p-5">
                <div className="text-3xl font-serif font-bold text-amber-400 mb-1">{s.value}</div>
                <div className="text-slate-500 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">
            Join Our Client Portfolio
          </h2>
          <p className="text-blue-200 text-sm mb-6">
            Let's discuss how Al-Zahra Engineering can support your industrial operations.
          </p>
          <Link href="/contact">
            <span
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-7 py-3 rounded text-sm hover:bg-blue-50 transition-colors cursor-pointer"
              data-testid="button-clients-cta"
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
