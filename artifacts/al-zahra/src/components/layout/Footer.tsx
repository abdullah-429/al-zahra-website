import { Link } from "wouter";
import { MapPin, Phone, Mail, Zap } from "lucide-react";

const services = [
  "Mechanical Engineering Works",
  "Electrical Installations",
  "Solar Energy Systems",
  "Fire Fighting Systems",
  "HVAC & BMS Solutions",
  "Industrial Automation",
  "Fabrication & Erection",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#060f1c] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.jpeg"
                alt="Al-Zahra Engineering Services"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-500/30"
              />
              <div>
                <div className="text-white font-serif font-bold text-base leading-tight">
                  Al-Zahra Engineering
                </div>
                <div className="text-blue-400 text-xs tracking-widest uppercase">Services</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Trusted partner in mechanical, electrical, solar energy, automation, and industrial
              engineering solutions since 2010.
            </p>
            <div className="flex items-center gap-2 text-amber-400 text-sm font-medium">
              <Zap className="h-4 w-4" />
              <span>24/7 Emergency Response</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-serif font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif font-semibold text-sm uppercase tracking-widest mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services">
                    <span className="text-sm text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-400 leading-relaxed">
                  Main Korangi Industrial Area,
                  <br />
                  Landhi, Karachi
                </p>
              </div>
              <div className="space-y-1.5">
                {["0301 2321109", "0313 3324139", "0305 4649147"].map((phone) => (
                  <div key={phone} className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:info.alzahratechnical@gmail.com"
                  className="text-sm text-slate-400 hover:text-blue-400 transition-colors break-all"
                >
                  info.alzahratechnical@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Al-Zahra Engineering Services. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Est. 2010 &mdash; Karachi, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
