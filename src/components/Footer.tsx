import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle
} from "lucide-react";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/" },
  { icon: Linkedin, href: "https://linkedin.com/" },
  { icon: Facebook, href: "https://facebook.com/" },
  { icon: Instagram, href: "https://instagram.com/" },
  { icon: Twitter, href: "https://twitter.com/" },
  { icon: MessageCircle, href: "https://wa.me/919520776129" },
];

const Footer = () => {

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (

    <footer className="border-t border-border py-12 bg-muted/20">

      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="grid md:grid-cols-3 gap-10 items-center"
        >

          {/* Left */}
          <div className="space-y-3 text-center md:text-left">

            <h3 className="text-lg font-semibold">
              Mohammad Ayan
            </h3>

            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
              <MapPin size={16} className="text-primary"/>
              New Delhi, India
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
              <Mail size={16} className="text-primary"/>
              <a href="mailto:mohdayan84381@gmail.com">
                mohdayan84381@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
              <Phone size={16} className="text-primary"/>
              +91 9520776129
            </div>

          </div>


          {/* Center */}
          <div className="text-center">

            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              Front-End Developer passionate about building responsive,
              high-performance and modern web applications using
              HTML, CSS, JavaScript and Tailwind CSS.
            </p>

            <p className="text-xs text-muted-foreground mt-3">
              Built with React • Tailwind CSS • Framer Motion
            </p>

          </div>


          {/* Right */}
          <div className="flex flex-col items-center md:items-end gap-5">

            {/* Social icons */}
            <div className="flex flex-wrap gap-3">

              {socialLinks.map((social, i)=>{

                const Icon = social.icon;

                return(

                  <motion.a
                    whileHover={{ scale:1.15 }}
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition"
                  >

                    <Icon size={16} className="text-primary"/>

                  </motion.a>

                );

              })}

            </div>

            {/* Back to top */}
            <motion.div whileHover={{ scale:1.15 }}>

              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="hover:bg-primary/10"
              >
                <ArrowUp size={16}/>
              </Button>

            </motion.div>

          </div>

        </motion.div>


        {/* Bottom */}
        <motion.div
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          viewport={{ once:true }}
          transition={{ delay:0.3 }}
          className="border-t border-border mt-10 pt-6 text-center"
        >

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mohammad Ayan. All rights reserved.
          </p>

        </motion.div>

      </div>

    </footer>

  );

};

export default Footer;