import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Send,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react";

import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com/", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
  { icon: MessageCircle, href: "https://wa.me/919520776129", label: "WhatsApp" },
];

const ContactSection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e:any) => {

    e.preventDefault();

    toast({
      title: "Message sent!",
      description: "Thank you for contacting me. I will respond soon.",
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (

    <section id="contact" className="py-16 md:py-20 bg-muted/30" ref={ref}>

      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="text-center mb-14"
        >

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4"></div>

          <p className="text-muted-foreground max-w-lg mx-auto">
            I'm always open to discussing new opportunities, freelance projects
            or collaborations.
          </p>

        </motion.div>


        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">


          {/* Contact Info */}
          <motion.div
            initial={{ opacity:0, x:-40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.6 }}
            className="space-y-8"
          >

            {/* Email */}
            <motion.div
              whileHover={{ y:-4 }}
              className="flex items-start gap-4"
            >

              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">

                <Mail className="text-primary" size={20} />

              </div>

              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-muted-foreground">
                  mohdayan84381@gmail.com
                </p>
              </div>

            </motion.div>


            {/* Phone */}
            <motion.div
              whileHover={{ y:-4 }}
              className="flex items-start gap-4"
            >

              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">

                <Phone className="text-primary" size={20} />

              </div>

              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-sm text-muted-foreground">
                  +91 9520776129
                </p>
              </div>

            </motion.div>


            {/* Location */}
            <motion.div
              whileHover={{ y:-4 }}
              className="flex items-start gap-4"
            >

              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">

                <MapPin className="text-primary" size={20} />

              </div>

              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-sm text-muted-foreground">
                  New Delhi, India
                </p>
              </div>

            </motion.div>


            {/* Social Icons */}
            <div>

              <h3 className="font-semibold mb-4">Follow Me</h3>

              <div className="flex flex-wrap gap-3">

                {socialLinks.map((social) => {

                  const Icon = social.icon;

                  return (

                    <motion.a
                      whileHover={{ scale:1.15 }}
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition"
                    >

                      <Icon size={16} className="text-primary" />

                    </motion.a>

                  );
                })}

              </div>

            </div>

          </motion.div>


          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity:0, x:40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.6 }}
            className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-4"
          >

            <Input
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e)=>
                setFormData({ ...formData, name:e.target.value })
              }
            />

            <Input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e)=>
                setFormData({ ...formData, email:e.target.value })
              }
            />

            <Textarea
              rows={5}
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={(e)=>
                setFormData({ ...formData, message:e.target.value })
              }
            />

            <motion.div whileHover={{ scale:1.02 }}>

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