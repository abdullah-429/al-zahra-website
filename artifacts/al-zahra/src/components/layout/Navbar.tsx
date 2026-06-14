import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0d1b2e] shadow-lg shadow-black/30" : "bg-[#0d1b2e]/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-logo">
            <div className="flex items-center gap-3 cursor-pointer">
              <img
                src="/logo.jpeg"
                alt="Al-Zahra Engineering Services"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-500/40"
                data-testid="img-logo"
              />
              <div>
                <div className="text-white font-serif font-bold text-lg leading-tight tracking-wide">
                  Al-Zahra Engineering
                </div>
                <div className="text-blue-400 text-xs font-medium tracking-widest uppercase">
                  Services
                </div>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 cursor-pointer ${
                    location === link.href
                      ? "text-amber-400 bg-white/5"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <span
                className="ml-3 px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded transition-colors duration-200 cursor-pointer"
                data-testid="button-get-quote"
              >
                Get a Quote
              </span>
            </Link>
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <a
              href="tel:03012321109"
              className="text-blue-400 hover:text-blue-300 transition-colors"
              data-testid="link-phone-mobile"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white transition-colors p-1"
              data-testid="button-menu-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a1525] border-t border-white/10" data-testid="nav-mobile">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`block px-4 py-3 rounded text-sm font-medium transition-colors cursor-pointer ${
                    location === link.href
                      ? "text-amber-400 bg-white/5"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <span
                className="block mt-3 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded text-center transition-colors cursor-pointer"
                data-testid="button-mobile-quote"
              >
                Get a Quote
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
