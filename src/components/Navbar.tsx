import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#about");
  const [isDark, setIsDark] = useState(true);

  // detect scroll
  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 50);

      navLinks.forEach((link) => {

        const section = document.querySelector(link.href);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(link.href);
        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);


  // dark mode
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };


  // smooth scroll with navbar offset
  const handleClick = (href) => {

    const element = document.querySelector(href);

    if (!element) return;

    const navbarHeight = 80;

    const offsetPosition =
      element.offsetTop - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setIsOpen(false);

  };


  return (

    <motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-300 ${
    scrolled ? "glass-card shadow-lg" : ""
  }`}
>

      <div className="container mx-auto flex items-center justify-between px-4">

        {/* Logo */}
      <a
  href="#"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="flex items-center"
>
  <img
    src={logo}
    alt="Ayan Logo"
    className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-110"
  />
</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (

            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-sm font-medium transition ${
                active === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </button>

          ))}

          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

        </div>


        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">

          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>

        </div>

      </div>


      {/* Mobile Menu */}
      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card mt-2 mx-4 rounded-xl overflow-hidden"
          >

            <div className="flex flex-col p-4 gap-3">

              {navLinks.map((link) => (

                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`text-sm text-left font-medium py-2 ${
                    active === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </button>

              ))}

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>

  );
};

export default Navbar;