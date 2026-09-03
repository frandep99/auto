import { useState } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Patenti", "#patenti"],
    ["Chi siamo", "#chi-siamo"],
    ["Servizi", "#servizi"],
    ["FAQ", "#faq"],
    ["Contatti", "#contatti"],
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#123B6D] rounded-lg flex items-center justify-center">
              <span className="text-white font-black italic text-lg">
                AG
              </span>
            </div>

            <div className="leading-none">
              <div className="text-sm sm:text-base font-black text-white">
                AUTOSCUOLA
              </div>

              <div className="flex items-center gap-1 mt-1">
                <span className="text-sm sm:text-base font-black text-white">
                  GUIDONIA
                </span>

                <span className="text-sm sm:text-base font-black text-[#D62828]">
                  SAS
                </span>
              </div>
            </div>
          </a>

          {/* DESKTOP */}
          <nav className="hidden lg:flex items-center gap-7">

            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-white font-semibold text-sm hover:text-[#D62828] transition-colors"
              >
                {label}
              </a>
            ))}

            <a
              href="#contatti"
              className="ml-2 flex items-center gap-2 bg-[#D62828] hover:bg-[#b91f1f] text-white font-bold px-5 py-3 rounded-lg transition-colors"
            >
              Contattaci
              <ArrowRight size={17} />
            </a>

          </nav>

          {/* MOBILE */}
          <div className="lg:hidden flex items-center gap-2">

            {/* TELEFONO */}
            <a
              href="tel:+390000000000"
              className="w-10 h-10 flex items-center justify-center bg-[#D62828] rounded-lg text-white"
              aria-label="Chiama"
            >
              <Phone size={18} />
            </a>

            {/* MENU */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-lg text-white"
              aria-label={open ? "Chiudi menu" : "Apri menu"}
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden bg-white rounded-xl shadow-xl overflow-hidden mt-1">

            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="block px-5 py-4 text-[#123B6D] font-semibold border-b border-slate-100 hover:bg-slate-50"
              >
                {label}
              </a>
            ))}

            <a
              href="#contatti"
              onClick={() => setOpen(false)}
              className="m-4 flex items-center justify-center gap-2 bg-[#D62828] text-white font-bold py-4 rounded-lg"
            >
              Contattaci
              <ArrowRight size={18} />
            </a>

          </div>
        )}

      </div>
    </header>
  );
}