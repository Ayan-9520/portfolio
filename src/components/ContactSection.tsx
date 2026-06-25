import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import SectionHeading from "@/components/SectionHeading";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { slideLeft, slideRight } from "@/animations/animations";
import { useToast } from "@/hooks/use-toast";

const socialIcons = [
  { icon: Github, href: socialLinks.github, label: "GitHub" },
  { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
  { icon: WhatsAppIcon, href: socialLinks.whatsapp, label: "WhatsApp" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: "Location", value: personalInfo.location },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <SectionHeading
          title="Get In"
          highlight="Touch"
          subtitle="Open to freelance projects, full-time roles, and collaborations."
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactItems.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ x: 6 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">{item.label}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <div>
              <h3 className="mb-4 font-semibold">Connect</h3>
              <div className="flex flex-wrap gap-3">
                {socialIcons.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 transition hover:bg-primary/15"
                    aria-label={social.label}
                  >
                    <social.icon size={18} className="text-primary" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="premium-card space-y-4"
          >
            <Input
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Textarea
              rows={5}
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="w-full" variant="hero" type="submit">
                Send Message
                <Send className="ml-2" size={16} />
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
