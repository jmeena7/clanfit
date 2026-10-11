
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Workouts", href: "#workouts" },
  { name: "Programs", href: "#programs" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/75 px-5 py-4 shadow-xl backdrop-blur-xl md:px-7">

        {/* Logo */}
        <a href="#home" className="text-2xl font-black tracking-tight">
          CLAN<span className="text-lime-400">FIT.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-lime-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#programs"
          className="hidden items-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-lime-300 md:flex"
        >
          Join ClanFit <ArrowUpRight size={17} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="text-white md:hidden"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-neutral-950/95 p-5 shadow-xl backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/10 py-4 text-gray-300 transition hover:text-lime-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#programs"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-lime-400 px-5 py-3 font-bold text-black"
          >
            Join ClanFit <ArrowUpRight size={18} />
          </a>
        </div>
      )}
    </header>
  );
}
