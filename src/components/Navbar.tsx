import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Games", href: "#games" },
    { label: "Leaderboard", href: "#leaderboard" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Gamepad2 className="w-7 h-7 text-primary" />
          <span className="gradient-text">BOUMADYAN</span>
          <span className="text-foreground">STUDIOS</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <Link to="/portal">
            <Button variant="hero" size="sm">Player Portal</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-border/50 p-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-muted-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link to="/portal" onClick={() => setIsOpen(false)}>
            <Button variant="hero" size="sm" className="w-full">Player Portal</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
