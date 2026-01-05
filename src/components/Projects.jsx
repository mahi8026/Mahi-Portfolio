"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectDetails from "./ProjectDetails";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Layers,
  CheckCircle,
  Rocket,
  Code,
  Zap,
  Star,
  Eye,
  Heart,
  Award,
  TrendingUp,
  Sparkles,
} from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // grid, carousel, masonry
  const [isClient, setIsClient] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const projectsGridRef = useRef(null);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "LearnLoop",
      subtitle: "A Seamless Learning Management System",
      description:
        "A full-stack LMS enabling instructors to create courses and students to enroll securely.",
      longDescription:
        "LearnLoop is a comprehensive education platform featuring JWT-based authentication, role-based access control (Admin/Instructor/Student), and dynamic course management. It solves common educational hurdles by providing real-time enrollment tracking and an intuitive dashboard for learning progress.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      category: "Full Stack",
      tags: ["React", "Node.js", "MongoDB", "Express", "Firebase", "Tailwind"],
      liveUrl: "https://learn-loop-edcf7.web.app",
      githubUrl: "https://github.com/mahi8026/learn-loop",
      featured: true,
      status: "Live",
      metrics: {
        users: "100+",
        performance: "95%",
        rating: 4.8,
        growth: "+20%",
      },
      features: [
        "Secure Authentication with Firebase & JWT",
        "Role-Based Dashboards (Admin, Instructor, Student)",
        "Course Approval Workflow for Administrators",
        "Stripe/Payment integration for premium enrollments",
        "Responsive UI with Tailwind CSS & Framer Motion",
        "Real-time enrollment tracking and progress monitoring",
      ],
      challenges: [
        "Implementing secure role-based authentication system with JWT and Firebase",
        "Creating efficient course approval workflow between instructors and admins",
        "Integrating Stripe payment system for premium course enrollments",
        "Optimizing database queries for real-time enrollment tracking",
        "Ensuring responsive design across all device sizes and screen resolutions",
      ],
      futureImprovements: [
        "Add real-time chat system for instructor-student communication",
        "Implement advanced analytics dashboard for course performance",
        "Add video conferencing integration for live classes",
        "Create mobile app version using React Native",
        "Implement AI-powered course recommendation system",
        "Add multi-language support for international users",
      ],
      challenges: [
        {
          title: "Role-Based Access Control",
          description:
            "Implemented secure authentication system with different permission levels for Admin, Instructor, and Student roles using JWT tokens and Firebase Auth.",
          solution:
            "Custom middleware with role validation and protected routes",
        },
        {
          title: "Course Management Workflow",
          description:
            "Created an efficient course approval system where instructors can create courses that require admin approval before going live to students.",
          solution: "State-based course lifecycle with automated notifications",
        },
      ],
      techStack: {
        frontend: ["React 18", "Tailwind CSS", "Framer Motion", "React Router"],
        backend: ["Node.js", "Express.js", "MongoDB", "JWT"],
        authentication: ["Firebase Auth", "JWT Tokens"],
        infrastructure: ["Vercel", "Firebase Hosting", "MongoDB Atlas"],
      },
      timeline: "3 months",
      team: "Solo project",
      color: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "Ticket Bari",
      subtitle: "Comprehensive Ticket Booking & Management Platform",
      description:
        "A comprehensive ticket booking and management platform designed to streamline the connection between travelers, vendors, and administrators in Bangladesh's ticketing ecosystem.",
      longDescription:
        "Ticket Bari digitizes the ticketing ecosystem in Bangladesh, providing seamless ticket booking for users, inventory management for vendors, and centralized administration tools. Features multi-role authentication, real-time stock tracking, integrated payments, and modern responsive design with dark/light mode support.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
      category: "Full Stack",
      tags: [
        "React",
        "Vite",
        "Firebase",
        "Stripe",
        "TanStack Query",
        "Tailwind CSS",
        "DaisyUI",
        "Node.js",
      ],
      liveUrl: "https://ticket-bari.web.app",
      githubUrl: "https://github.com/mahi8026/Ticket-Bari",
      featured: true,
      status: "Live",
      metrics: {
        users: "500+",
        performance: "96%",
        rating: 4.7,
        growth: "+35%",
      },
      features: [
        "Multi-Role Authentication with Firebase (Admin/Vendor/User)",
        "Social Login with Google for quick access",
        "Real-time Stock Tracking with automatic quantity updates",
        "Integrated Stripe Payment Gateway for secure transactions",
        "Admin dashboard for user management and ticket verification",
        "Vendor dashboard with earnings overview and booking management",
        "Responsive design with Dark/Light mode support",
        "Automatic receipt generation and transaction history",
      ],
      challenges: [
        {
          title: "Multi-Role Authentication System",
          description:
            "Implemented secure role-based authentication system with Firebase, handling three distinct user types (Admin, Vendor, User) with different permissions and dashboard access.",
          solution: "Firebase Auth with custom claims and role-based routing",
        },
        {
          title: "Real-time Inventory Management",
          description:
            "Built real-time stock tracking system where ticket quantities automatically decrease upon booking, preventing overselling and maintaining accurate inventory across multiple vendors.",
          solution:
            "TanStack React Query for real-time data synchronization with optimistic updates",
        },
        {
          title: "Payment Integration & Security",
          description:
            "Integrated Stripe payment gateway while ensuring PCI compliance, handling payment failures, and maintaining transaction history with automatic receipt generation.",
          solution:
            "Stripe.js integration with webhook validation and comprehensive error handling",
        },
      ],
      techStack: {
        frontend: [
          "React 18",
          "Vite",
          "React Router Dom",
          "Tailwind CSS",
          "DaisyUI",
        ],
        backend: ["Node.js", "Express.js", "MongoDB"],
        authentication: ["Firebase Auth", "Social Login (Google)"],
        payments: ["Stripe Payment Gateway"],
        dataManagement: ["TanStack React Query", "Axios"],
        uiComponents: ["Headless UI", "React Icons", "Swiper", "SweetAlert2"],
        utilities: ["React Hook Form", "Recharts", "React Countdown"],
        infrastructure: ["Firebase Hosting", "MongoDB Atlas"],
      },
      futureImprovements: [
        "Add real-time bus tracking and GPS integration",
        "Implement push notifications for booking confirmations and updates",
        "Add multi-language support (Bengali, English)",
        "Create mobile app version for better user experience",
        "Implement advanced search filters (price range, departure time, bus type)",
        "Add customer review and rating system for bus operators",
        "Integrate with national payment systems (bKash, Nagad, Rocket)",
        "Add seat selection feature with visual bus layout",
      ],
      timeline: "4 months",
      team: "Solo project",
      color: "from-green-500 to-teal-600",
    },
  ];

  useEffect(() => {
    if (!isClient) return;

    const ctx = gsap.context(() => {
      // Floating elements animation
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            y: "random(-20, 20)",
            x: "random(-10, 10)",
            rotation: "random(-15, 15)",
            duration: "random(3, 6)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.2,
          });
        }
      });

      // Header animation with creative entrance
      gsap.fromTo(
        headerRef.current.children,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotationX: -90,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Projects grid with magnetic effect
      const projectCards = projectsGridRef.current?.children;
      if (projectCards) {
        Array.from(projectCards).forEach((card, index) => {
          // Initial entrance animation
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 100,
              scale: 0.8,
              rotationY: 45,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationY: 0,
              duration: 1,
              delay: index * 0.15,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );

          // Magnetic hover effect
          const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = (e.clientX - centerX) * 0.1;
            const deltaY = (e.clientY - centerY) * 0.1;

            gsap.to(card, {
              x: deltaX,
              y: deltaY,
              rotationY: deltaX * 0.1,
              rotationX: -deltaY * 0.1,
              duration: 0.3,
              ease: "power2.out",
            });
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              x: 0,
              y: 0,
              rotationY: 0,
              rotationX: 0,
              duration: 0.5,
              ease: "back.out(1.7)",
            });
          };

          card.addEventListener("mousemove", handleMouseMove);
          card.addEventListener("mouseleave", handleMouseLeave);
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [viewMode, isClient]);

  const handleProjectHover = (projectId) => {
    setHoveredProject(projectId);

    // Create particle burst effect
    const createParticleBurst = () => {
      if (!isClient) return;

      for (let i = 0; i < 8; i++) {
        const particle = document.createElement("div");
        particle.className =
          "fixed w-2 h-2 bg-teal-400/60 rounded-full pointer-events-none z-50";
        particle.style.left = `${Math.random() * window.innerWidth}px`;
        particle.style.top = `${Math.random() * window.innerHeight}px`;

        document.body.appendChild(particle);

        gsap.fromTo(
          particle,
          { scale: 0, opacity: 1 },
          {
            scale: 2,
            opacity: 0,
            x: `random(-200, 200)`,
            y: `random(-200, 200)`,
            duration: 1.5,
            ease: "power2.out",
            onComplete: () => particle.remove(),
          }
        );
      }
    };

    if (projectId) createParticleBurst();
  };

  const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const isHovered = hoveredProject === project.id;

    return (
      <div
        ref={cardRef}
        className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${project.color} p-1 cursor-pointer transform-gpu h-full`}
        onMouseEnter={() => handleProjectHover(project.id)}
        onMouseLeave={() => handleProjectHover(null)}
        onClick={() => setSelectedProject(project)}
      >
        {/* Animated border gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

        {/* Main card content */}
        <div
          className={`relative h-full bg-slate-900/90 backdrop-blur-xl rounded-3xl overflow-hidden ${
            project.featured ? "min-h-[600px]" : "min-h-[500px]"
          }`}
        >
          {/* Status badge */}
          <div className="absolute top-4 right-4 z-20">
            <div
              className={`px-3 py-1 rounded-full text-xs font-bold ${
                project.status === "Live"
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
              }`}
            >
              <div className="flex items-center gap-1">
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    project.status === "Live" ? "bg-green-400" : "bg-orange-400"
                  } animate-pulse`}
                />
                {project.status}
              </div>
            </div>
          </div>

          {/* Project image with overlay effects */}
          <div
            className={`relative overflow-hidden ${
              project.featured ? "h-64" : "h-48"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
              style={{ backgroundImage: `url('${project.image}')` }}
            />

            {/* Animated overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Floating metrics */}
            {project.featured && (
              <div className="absolute top-4 left-4 space-y-2">
                {Object.entries(project.metrics).map(([key, value], idx) => (
                  <div
                    key={key}
                    ref={(el) => (floatingElementsRef.current[idx] = el)}
                    className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
                  >
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                    <span className="text-white text-xs font-medium">
                      {key}: {value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Interactive overlay buttons */}
            <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(project);
                }}
                className="p-2 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 text-white hover:bg-white/30 transition-colors"
                title="View Details"
              >
                <Eye size={16} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubUrl, "_blank");
                }}
                className="p-2 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 text-white hover:bg-white/30 transition-colors"
                title="View Code"
              >
                <Github size={16} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveUrl, "_blank");
                }}
                className="p-2 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 text-white hover:bg-white/30 transition-colors"
                title="Live Demo"
              >
                <ExternalLink size={16} />
              </button>
            </div>
          </div>

          {/* Content section */}
          <div className="p-6 space-y-4">
            {/* Category and title */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-teal-400 text-sm font-medium">
                  {project.category}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm">
                    {project.metrics?.rating}
                  </span>
                </div>
              </div>

              <h3 className="text-white text-xl font-bold group-hover:text-teal-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-cyan-400 text-sm font-medium">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag, idx) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md text-xs font-medium text-white border border-white/20"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="px-2 py-1 bg-teal-500/20 backdrop-blur-sm rounded-md text-xs font-medium text-teal-400 border border-teal-500/30">
                  +{project.tags.length - 4} more
                </span>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveUrl, "_blank");
                }}
                className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <ExternalLink size={16} />
                Live Demo
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubUrl, "_blank");
                }}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Github size={16} />
                Code
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      id="projects"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-teal-400/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-400/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Creative header section */}
        <div ref={headerRef} className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full border border-teal-500/30">
            <Rocket className="w-5 h-5 text-teal-400" />
            <span className="text-teal-400 font-medium">Featured Work</span>
          </div>

          <h2 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-white via-teal-200 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Creative
            <br />
            <span className="text-gradient">Projects</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Innovative solutions that push boundaries and create meaningful
            impact. Each project represents a unique challenge solved with
            cutting-edge technology.
          </p>

          {/* View mode toggles - Simplified */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="px-4 py-2 bg-teal-500 text-white rounded-lg font-medium">
              Grid View
            </div>
          </div>
        </div>

        {/* Projects grid */}
        <div
          ref={projectsGridRef}
          className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${
                project.featured ? "md:col-span-2 lg:col-span-2" : "col-span-1"
              }`}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25">
            <Award className="w-6 h-6" />
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Project detail modal would go here */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

// Enhanced Project Detail Modal Component
const ProjectDetailModal = ({ project, onClose }) => {
  const modalRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    gsap.fromTo(
      modalRef.current,
      { opacity: 0, scale: 0.8, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }
    );
  }, [isClient]);

  const handleClose = () => {
    if (!isClient) return;

    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.8,
      y: 50,
      duration: 0.3,
      ease: "power2.in",
      onComplete: onClose,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="bg-slate-900/95 backdrop-blur-xl rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-slate-700/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal content would be implemented here with enhanced design */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-white">{project.title}</h2>
            <button
              onClick={handleClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              ✕
            </button>
          </div>
          {/* Add more modal content here */}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectDetails
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Projects;
