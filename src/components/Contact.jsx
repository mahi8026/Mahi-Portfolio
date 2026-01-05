"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "../config/emailjs";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  AlertCircle,
  MessageCircle,
} from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const contactInfoRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([headerRef.current.children, contactInfoRef.current.children], {
        opacity: 0,
        y: 50,
      });

      gsap.set(formRef.current, {
        opacity: 0,
        x: 50,
        scale: 0.95,
      });

      // Main animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Header animation
      tl.to(headerRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })
        // Contact info animation
        .to(
          contactInfoRef.current.children,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        // Form animation
        .to(
          formRef.current,
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.6"
        );

      // Add hover animations for contact info items
      const contactItems = contactInfoRef.current.children;
      Array.from(contactItems).forEach((item) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            x: 10,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Animate button on submit
    const submitBtn = e.target.querySelector('button[type="submit"]');
    gsap.to(submitBtn, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });

    try {
      // EmailJS configuration
      const { serviceID, templateID, publicKey } = emailjsConfig;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Mahi", // Your name
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" }); // Reset form

      // Success animation
      gsap.to(submitBtn, {
        backgroundColor: "#10b981",
        duration: 0.3,
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");

      // Error animation
      gsap.to(submitBtn, {
        backgroundColor: "#ef4444",
        duration: 0.3,
      });
    } finally {
      setIsSubmitting(false);

      // Reset button color after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        gsap.to(submitBtn, {
          backgroundColor: "#14b8a6",
          duration: 0.3,
        });
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSocialHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.2,
      y: -5,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  };

  const handleSocialLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Let's discuss your next project or just say hello
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div ref={contactInfoRef} className="space-y-8">
            <div className="flex items-center space-x-4 cursor-pointer">
              <div className="glass-card p-3 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Email
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  mahimrahman07@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 cursor-pointer">
              <div className="glass-card p-3 rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Phone
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  01646886795
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 cursor-pointer">
              <div className="glass-card p-3 rounded-lg">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  WhatsApp
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  +880 1646886795
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 cursor-pointer">
              <div className="glass-card p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Location
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/mahi8026"
                  className="glass-card p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  onMouseEnter={handleSocialHover}
                  onMouseLeave={handleSocialLeave}
                >
                  <Github className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/mahi-dev"
                  className="glass-card p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  onMouseEnter={handleSocialHover}
                  onMouseLeave={handleSocialLeave}
                >
                  <Linkedin className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://twitter.com/mahi_dev"
                  className="glass-card p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  onMouseEnter={handleSocialHover}
                  onMouseLeave={handleSocialLeave}
                >
                  <Twitter className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="glass-card p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-card rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-card rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 glass-card rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 resize-none transition-all"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : submitStatus === "success"
                    ? "bg-green-500 hover:bg-green-600"
                    : submitStatus === "error"
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400"
                } text-white btn-glow`}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    gsap.to(e.currentTarget, {
                      scale: 1.02,
                      y: -2,
                      duration: 0.3,
                    });
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    gsap.to(e.currentTarget, { scale: 1, y: 0, duration: 0.3 });
                  }
                }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : submitStatus === "error" ? (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    <span>Failed to Send</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <p className="text-sm">
                    ✅ Your message has been sent successfully! I'll get back to
                    you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <p className="text-sm">
                    ❌ Failed to send message. Please try again or contact me
                    directly at mahimrahman07@gmail.com
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
