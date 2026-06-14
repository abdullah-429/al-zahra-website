import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle, Send } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0a1525] py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
              Contact Us
            </p>
            <h1
              className="text-4xl sm:text-5xl font-serif font-bold text-white leading-tight mb-6"
              data-testid="heading-contact"
            >
              Get in Touch
            </h1>
            <p className="text-slate-400 text-base leading-relaxed">
              Whether you need a quote for a new project or emergency engineering support,
              our team is ready to help — 24 hours a day, 7 days a week.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0d1b2e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-white mb-8">
                Contact Information
              </h2>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">Address</div>
                    <div className="text-slate-400 text-sm leading-relaxed">
                      Main Korangi Industrial Area,
                      <br />
                      Landhi, Karachi, Pakistan
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-2">Phone</div>
                    <div className="space-y-1.5">
                      {[
                        { label: "Primary", number: "0301 2321109" },
                        { label: "Secondary", number: "0313 3324139" },
                        { label: "Alternate", number: "0305 4649147" },
                      ].map((p) => (
                        <div key={p.number} className="flex items-center gap-3">
                          <span className="text-slate-600 text-xs w-16">{p.label}</span>
                          <a
                            href={`tel:${p.number.replace(/\s/g, "")}`}
                            className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                            data-testid={`link-phone-${p.label.toLowerCase()}`}
                          >
                            {p.number}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">Email</div>
                    <a
                      href="mailto:info.alzahratechnical@gmail.com"
                      className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                      data-testid="link-email"
                    >
                      info.alzahratechnical@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">Availability</div>
                    <div className="text-slate-400 text-sm">
                      <div>Office: Mon – Sat, 9:00 AM – 6:00 PM</div>
                      <div className="text-amber-400 font-medium mt-1">
                        Emergency: 24/7, all days including holidays
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services quick list */}
              <div className="bg-[#0a1525] border border-white/10 rounded-xl p-6">
                <div className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-4">
                  We Handle
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Mechanical Works",
                    "Electrical Installations",
                    "Solar Systems",
                    "Fire Fighting",
                    "HVAC & BMS",
                    "Automation",
                    "Fabrication",
                    "24/7 Emergency",
                  ].map((svc) => (
                    <div key={svc} className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-blue-400 flex-shrink-0" />
                      <span className="text-slate-400 text-xs">{svc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-white mb-8">
                Send Us a Message
              </h2>

              {submitted ? (
                <div
                  className="bg-[#0a1525] border border-green-500/30 rounded-xl p-10 text-center"
                  data-testid="status-form-success"
                >
                  <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-white font-serif font-bold text-xl mb-3">
                    Message Sent
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Thank you for reaching out. Our team will get back to you within one business
                    day, or you can call us directly for faster assistance.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", company: "", phone: "", email: "", service: "", message: "" });
                    }}
                    className="mt-6 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-testid="form-contact"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full bg-[#0a1525] border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/60 transition-colors"
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-2">
                        Company / Organization
                      </label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full bg-[#0a1525] border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/60 transition-colors"
                        data-testid="input-company"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-2">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="03XX XXXXXXX"
                        type="tel"
                        className="w-full bg-[#0a1525] border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/60 transition-colors"
                        data-testid="input-phone"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        type="email"
                        className="w-full bg-[#0a1525] border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/60 transition-colors"
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-[#0a1525] border border-white/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500/60 transition-colors text-slate-300"
                      data-testid="select-service"
                    >
                      <option value="" className="text-slate-600">Select a service...</option>
                      <option value="mechanical">Mechanical Engineering Works</option>
                      <option value="electrical">Electrical Installations</option>
                      <option value="solar">Solar Energy Systems</option>
                      <option value="firefighting">Fire Fighting Systems</option>
                      <option value="hvac">HVAC & BMS Solutions</option>
                      <option value="automation">Industrial Automation</option>
                      <option value="fabrication">Fabrication & Erection</option>
                      <option value="emergency">Emergency Support</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2">
                      Project Details <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe your project requirements, timeline, and any other relevant details..."
                      className="w-full bg-[#0a1525] border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/60 transition-colors resize-none"
                      data-testid="input-message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
                    data-testid="button-submit"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>

                  <p className="text-slate-600 text-xs text-center">
                    For urgent requirements, call us directly at{" "}
                    <a href="tel:03012321109" className="text-blue-500 hover:text-blue-400">
                      0301 2321109
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-[#060f1c] py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-serif font-bold text-white mb-6 text-center">
            Find Us
          </h2>
          <div className="bg-[#0a1525] border border-white/10 rounded-xl overflow-hidden">
            <iframe
              title="Al-Zahra Engineering Location"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28960.30295432!2d67.1!3d24.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f3a9e83b999%3A0xb60cd0432a3e7f48!2sKorangi%20Industrial%20Area%2C%20Karachi!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
              data-testid="iframe-map"
            />
          </div>
          <p className="text-center text-slate-500 text-xs mt-4">
            Main Korangi Industrial Area, Landhi, Karachi, Pakistan
          </p>
        </div>
      </section>
    </div>
  );
}
