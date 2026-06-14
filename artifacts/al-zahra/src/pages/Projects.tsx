import { Link } from "wouter";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const categories = [
  "All",
  "Generators",
  "Electrical",
  "Chillers",
  "Cooling Towers",
  "Fire Fighting",
  "Ducting",
  "Cable Tray",
];

const projects = [
  {
    id: 1,
    title: "Caterpillar Generator Installation",
    category: "Generators",
    client: "Orient Energy System",
    location: "Karachi",
    desc: "Complete installation and commissioning of Caterpillar industrial generators including power cable routing, control systems, and load testing.",
    scope: ["Generator erection & alignment", "Power cable installation", "Control wiring", "Load testing & commissioning"],
  },
  {
    id: 2,
    title: "MTU Generator Setup",
    category: "Generators",
    client: "Dollar Industries",
    location: "Karachi",
    desc: "Turnkey installation of MTU high-performance generator sets for a large manufacturing facility.",
    scope: ["Foundation preparation", "Generator erection", "Fuel system piping", "Electrical integration"],
  },
  {
    id: 3,
    title: "Waukesha Generator Installation",
    category: "Generators",
    client: "Soorty Enterprises",
    location: "Karachi",
    desc: "Industrial Waukesha generator installation for textile manufacturing backup power.",
    scope: ["Generator erection", "Exhaust ducting", "Cooling system piping", "Control panel wiring"],
  },
  {
    id: 4,
    title: "Jenbacher Generator Project",
    category: "Generators",
    client: "Gul Ahmed Textile",
    location: "Karachi",
    desc: "High-efficiency Jenbacher gas generator installation including complete balance of plant.",
    scope: ["Gas piping installation", "Generator erection", "Heat recovery integration", "SCADA connection"],
  },
  {
    id: 5,
    title: "Industrial Electrical Works",
    category: "Electrical",
    client: "Artistic Milliners",
    location: "Karachi",
    desc: "Complete electrical installation for a large textile manufacturing facility including MV/LV distribution.",
    scope: ["MV cable laying", "LV distribution panels", "Control cable installation", "Earthing system"],
  },
  {
    id: 6,
    title: "Power Distribution Panel Installation",
    category: "Electrical",
    client: "Yunus Textile Mills",
    location: "Karachi",
    desc: "Design and installation of main LV switchgear and distribution panels for 5MW facility.",
    scope: ["Panel fabrication", "Cable management", "Protection relay wiring", "Power quality analysis"],
  },
  {
    id: 7,
    title: "Chiller Plant Installation",
    category: "Chillers",
    client: "Al-Karam Textiles",
    location: "Karachi",
    desc: "Complete chiller plant installation including centrifugal chillers, pumps, and distribution piping.",
    scope: ["Chiller erection", "Piping & insulation", "Cooling tower integration", "BMS connection"],
  },
  {
    id: 8,
    title: "Process Cooling Chiller System",
    category: "Chillers",
    client: "Indus Dyeing",
    location: "Muzaffargarh",
    desc: "Industrial process cooling system for a dyeing plant requiring precise temperature control.",
    scope: ["Screw chiller installation", "Stainless steel piping", "Control system", "Commissioning"],
  },
  {
    id: 9,
    title: "Cooling Tower Project",
    category: "Cooling Towers",
    client: "Zaman Textile Mills",
    location: "Karachi",
    desc: "Installation of induced draft cooling towers for a textile spinning unit.",
    scope: ["Cooling tower erection", "Makeup water piping", "Chemical dosing system", "PLC control"],
  },
  {
    id: 10,
    title: "Industrial Cooling Tower System",
    category: "Cooling Towers",
    client: "Mekotex Spinning Mills",
    location: "Kotri",
    desc: "Large-scale cooling tower installation for spinning mill requiring high heat rejection capacity.",
    scope: ["Cross-flow tower erection", "Header piping", "Drift eliminators", "Water treatment"],
  },
  {
    id: 11,
    title: "Fire Hydrant System",
    category: "Fire Fighting",
    client: "SIUT Hospital",
    location: "Karachi",
    desc: "Complete fire hydrant system for a major hospital facility, including pump house, header piping, and hydrant outlets throughout the complex.",
    scope: ["Fire pump installation", "Header & distribution piping", "Hydrant outlet points", "Pressure testing"],
  },
  {
    id: 12,
    title: "Fire Fighting Piping & Suppression",
    category: "Fire Fighting",
    client: "Amma Tower",
    location: "Karachi",
    desc: "High-rise fire fighting system including fire pumps, wet riser system, and sprinkler integration.",
    scope: ["Wet riser installation", "Sprinkler system", "Fire pump set", "Fire alarm integration"],
  },
  {
    id: 13,
    title: "Spinning Unit Ducting",
    category: "Ducting",
    client: "Union Fabric",
    location: "Karachi",
    desc: "Supply, fabrication, and installation of GI ducting for spinning unit ventilation and fiber transport.",
    scope: ["GI duct fabrication", "Flexible ducting", "Fan installation", "Insulation cladding"],
  },
  {
    id: 14,
    title: "HVAC Ducting & Air Distribution",
    category: "Ducting",
    client: "Liaquat National Hospital",
    location: "Karachi",
    desc: "AHU ducting for hospital wards and operation theatres with HEPA filtration integration.",
    scope: ["Duct fabrication", "Grilles & diffusers", "VAV system", "Clean room requirements"],
  },
  {
    id: 15,
    title: "Cable Tray & Ladder Installation",
    category: "Cable Tray",
    client: "Artistic Fabric",
    location: "Karachi",
    desc: "Complete cable management system for a large manufacturing facility with 3km of cable tray and ladder.",
    scope: ["GI ladder fabrication", "Cable tray installation", "Support structures", "Cable segregation"],
  },
  {
    id: 16,
    title: "Heavy Cable Tray System",
    category: "Cable Tray",
    client: "Bari Textile Mills",
    location: "Hub Chowki",
    desc: "Heavy-duty cable tray system for power and control cables across a large industrial complex.",
    scope: ["Heavy-duty tray supply", "Earthing bonding", "Cable pulling", "Termination support"],
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0a1525] py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
              Our Projects
            </p>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-tight mb-6" data-testid="heading-projects">
              Project Portfolio
            </h1>
            <p className="text-slate-400 text-base leading-relaxed">
              Over 15 years of industrial projects across generators, electrical works, HVAC,
              fire fighting, and more. A sample of our work for Pakistan's leading industrial clients.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <div className="bg-[#060f1c] border-b border-white/10 sticky top-20 z-40 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
                data-testid={`button-filter-${cat.toLowerCase().replace(/\s/g, "-")}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects grid */}
      <section className="bg-[#0d1b2e] py-20" data-testid="section-projects-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="bg-[#0a1525] border border-white/10 hover:border-blue-500/30 rounded-xl p-6 transition-all group"
                data-testid={`card-project-${project.id}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-slate-600 text-xs">{project.location}</span>
                </div>
                <h3 className="text-white font-serif font-bold text-lg mb-2">{project.title}</h3>
                <div className="text-amber-400 text-xs font-medium mb-3">{project.client}</div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.desc}</p>
                <div className="border-t border-white/5 pt-4">
                  <div className="text-slate-600 text-xs font-semibold uppercase tracking-wider mb-3">
                    Scope
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {project.scope.map((item) => (
                      <div key={item} className="flex items-start gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                        <span className="text-slate-500 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-500">No projects in this category.</div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-blue-200 text-sm mb-6">
            Tell us about your requirements and we'll put together a detailed plan.
          </p>
          <Link href="/contact">
            <span
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-7 py-3 rounded text-sm hover:bg-blue-50 transition-colors cursor-pointer"
              data-testid="button-projects-cta"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
