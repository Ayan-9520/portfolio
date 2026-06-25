import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { navLinks } from "@/data/portfolio";
import { scrollToSection } from "@/utils/scrollTo";
import { useTheme } from "@/hooks/ThemeProvider";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = [{ href: "#home" }, ...navLinks];
      for (const link of sections) {
        const section = document.querySelector(link.href);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActive(link.href);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] px-3 pt-3 sm:px-4 md:px-6">
      <nav
        className={cn(
          "relative mx-auto max-w-6xl transition-all duration-500",
          scrolled
            ? "rounded-2xl border border-border/50 bg-card/75 shadow-[0_12px_40px_-16px_hsl(var(--primary)/0.35)] backdrop-blur-xl"
            : "rounded-2xl border border-transparent bg-background/40 backdrop-blur-md"
        )}
      >
        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="flex h-14 items-center justify-between gap-3 px-3 sm:px-4">
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="shrink-0 rounded-xl px-1 transition-transform hover:scale-[1.02]"
            aria-label="Go to home"
          >
            <Logo className="sm:hidden" showText={false} size="sm" />
            <Logo className="hidden sm:inline-flex" />
          </button>

          <div className="hidden items-center gap-2 md:flex">
            <div className="flex items-center gap-0.5 rounded-full border border-border/50 bg-muted/50 p-1 backdrop-blur-sm">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-300",
                    active === link.href
                      ? "bg-background text-primary shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-muted/40 text-foreground transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Light mode" : "Dark mode"}
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </div>

          <div className="flex items-center gap-1.5 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-muted/40"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-muted/40"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-border/40 md:hidden"
            >
              <div className="flex flex-col gap-1 p-3">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    type="button"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "rounded-xl px-4 py-2.5 text-left text-sm font-medium transition",
                      active === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted/60"
                    )}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
