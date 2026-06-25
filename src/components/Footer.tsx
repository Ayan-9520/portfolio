import { ArrowUp, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { fadeUp } from "@/animations/animations";
import { scrollToTop } from "@/utils/smoothScroll";

const socialIcons = [
  { icon: Github, href: socialLinks.github, label: "GitHub" },
  { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
  { icon: WhatsAppIcon, href: socialLinks.whatsapp, label: "WhatsApp" },
];

const Footer = () => (
  <footer className="border-t border-border bg-muted/20 py-8">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 items-center gap-10 md:grid-cols-3"
      >
        <div className="space-y-4 text-center md:text-left">
          <Logo />
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground md:justify-start">
            <MapPin size={16} className="text-primary" />
            {personalInfo.location}
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground md:justify-start">
            <Mail size={16} className="text-primary" />
            <a href={`mailto:${personalInfo.email}`} className="hover:text-primary">
              {personalInfo.email}
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground md:justify-start">
            <Phone size={16} className="text-primary" />
            <a href={`tel:${personalInfo.phone}`} className="hover:text-primary">
              {personalInfo.phone}
            </a>
          </div>
        </div>

        <div className="text-center">
          <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted-foreground">
            {personalInfo.title} building responsive, scalable web apps with React.js,
            TypeScript, and modern full-stack tools.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            React • TypeScript • Python • Tailwind
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 md:items-end">
          <div className="flex flex-wrap justify-center gap-3 md:justify-end">
            {socialIcons.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/15"
                aria-label={social.label}
              >
                <social.icon size={16} className="text-primary" />
              </motion.a>
            ))}
          </div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="hover:bg-primary/10"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-10 border-t border-border pt-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
