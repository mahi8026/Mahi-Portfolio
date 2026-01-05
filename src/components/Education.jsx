"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Star,
  ChevronRight,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Education = () => {
  const [activeTab, setActiveTab] = useState("education");
  const [isClient, setIsClient] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const timelineRef = useRef(null);
  const tabsRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(headerRef.current.children, {
        opacity: 0,
        y: 50,
      });

      gsap.set(tabsRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(timelineRef.current.children, {
        opacity: 0,
        x: -50,
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
        // Tabs animation
        .to(
          tabsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        // Timeline items animation
        .to(
          timelineRef.current.children,
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [isClient, activeTab]);

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Business Administration (Professional)",
      institution: "Dhaka City College",
      location: "Dhaka, Bangladesh",
      duration: "2023 - Present",
      status: "Ongoing",
      description:
        "Currently pursuing a Bachelor of Business Administration (Professional). Gaining strong foundations in business studies along with practical skills in e-commerce, management, and technology-driven business solutions.",
      achievements: [
        "Maintaining strong academic performance",
        "Actively involved in academic and skill-development activities",
        "Completed multiple academic and practical assignments related to business and technology",
      ],
      skills: [
        "Business Fundamentals",
        "E-commerce Concepts",
        "Management Principles",
        "Microsoft Excel",
        "Presentation & Reporting",
        "Team Collaboration",
      ],
      icon: GraduationCap,
      color: "from-blue-500 to-purple-600",
    },

    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka City College",
      location: "Dhaka, Bangladesh",
      duration: "2020 - 2022",
      status: "Completed",
      grade: "GPA: 4.58/5.00",
      description:
        "Completed Higher Secondary education in the Business Studies group. Studied core subjects including Accounting, Finance, Management, and Economics, building a strong foundation in business fundamentals and analytical thinking.",
      achievements: [
        "Achieved GPA 4.58/5.00 in HSC examination",
        "Consistent academic performance throughout HSC",
        "Actively participated in academic and group-based activities",
      ],
      skills: [
        "Accounting Basics",
        "Business Studies",
        "Economics Fundamentals",
        "Analytical Thinking",
        "Problem Solving",
      ],
      icon: BookOpen,
      color: "from-green-500 to-teal-600",
    },
  ];

  const experienceData = [
    
    {
      id: 1,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka City College",
      location: "Dhaka, Bangladesh",
      duration: "2020 - 2022",
      status: "Completed",
      grade: "GPA: 4.58/5.00",
      description:
        "Completed Higher Secondary education in the Business Studies group. Studied core subjects including Accounting, Finance, Management, and Economics, building a strong foundation in business fundamentals and analytical thinking.",
      achievements: [
        "Achieved GPA 4.58/5.00 in HSC examination",
        "Consistent academic performance throughout HSC",
        "Actively participated in academic and group-based activities",
      ],
      skills: [
        "Accounting Basics",
        "Business Studies",
        "Economics Fundamentals",
        "Analytical Thinking",
        "Problem Solving",
      ],
      icon: BookOpen,
      color: "from-green-500 to-teal-600",
    },
  ];

  const currentData =
    activeTab === "education" ? educationData : experienceData;

  const handleItemHover = (e) => {
    if (!isClient) return;
    gsap.to(e.currentTarget, {
      scale: 1.02,
      y: -5,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleItemLeave = (e) => {
    if (!isClient) return;
    gsap.to(e.currentTarget, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section ref={sectionRef} className="py-20" id="education">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            My Journey
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A timeline of my educational milestones and professional experience
            in software development.
          </p>
        </div>

        {/* Tab Switcher */}
        <div ref={tabsRef} className="flex justify-center mb-12">
          <div className="p-1.5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex relative shadow-inner">
            <button
              onClick={() => setActiveTab("education")}
              className={`relative z-10 flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === "education"
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/25"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <GraduationCap size={18} />
              Education
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`relative z-10 flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === "experience"
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/25"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Award size={18} />
              Experience
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-cyan-500 to-transparent opacity-30"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {currentData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="relative flex gap-8 group"
                  onMouseEnter={handleItemHover}
                  onMouseLeave={handleItemLeave}
                >
                  {/* Timeline Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl shadow-teal-500/20 group-hover:shadow-teal-500/40 transition-all duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/20 group-hover:bg-white/10 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                          {activeTab === "education" ? item.degree : item.title}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-300 mb-2">
                          <span className="font-medium">
                            {activeTab === "education"
                              ? item.institution
                              : item.company}
                          </span>
                          <span className="text-slate-500">•</span>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span className="text-sm">{item.location}</span>
                          </div>
                        </div>
                        {item.grade && (
                          <div className="text-teal-400 font-semibold text-sm">
                            {item.grade}
                          </div>
                        )}
                      </div>

                      <div
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${
                          item.status === "Current" ||
                          item.status === "Completed"
                            ? "bg-green-500/10 border-green-500/30 text-green-400"
                            : "bg-blue-500/10 border-blue-500/30 text-blue-400"
                        }`}
                      >
                        <Calendar size={16} />
                        <span className="text-sm font-medium">
                          {item.duration}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <ChevronRight size={16} className="text-teal-400" />
                        Key{" "}
                        {activeTab === "education"
                          ? "Achievements"
                          : "Accomplishments"}
                      </h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-slate-300"
                          >
                            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <ChevronRight size={16} className="text-teal-400" />
                        Skills & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
