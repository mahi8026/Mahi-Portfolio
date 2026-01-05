"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  X,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Zap,
  Target,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ProjectDetails = ({ project, isOpen, onClose }) => {
  const [isClient, setIsClient] = useState(false);
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = "hidden";

      // Animate modal in
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      gsap.fromTo(
        contentRef.current,
        { scale: 0.8, y: 50, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(1.7)",
          delay: 0.1,
        }
      );
    } else {
      // Restore body scroll
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isClient]);

  if (!isOpen || !project) return null;

  const handleClose = () => {
    if (!isClient) return;

    gsap.to(contentRef.current, {
      scale: 0.8,
      y: 50,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });

    gsap.to(modalRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      delay: 0.1,
      onComplete: onClose,
    });
  };

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div
        ref={contentRef}
        className="bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <p className="text-slate-400">{project.subtitle}</p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Project Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <Calendar className="w-6 h-6 text-teal-400 mx-auto mb-2" />
              <div className="text-sm text-slate-400">Duration</div>
              <div className="text-white font-semibold">3 Months</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <Users className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <div className="text-sm text-slate-400">Team Size</div>
              <div className="text-white font-semibold">Solo Project</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <div className="text-sm text-slate-400">Performance</div>
              <div className="text-white font-semibold">
                {project.metrics?.performance || "95%"}
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <Target className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <div className="text-sm text-slate-400">Status</div>
              <div className="text-white font-semibold">{project.status}</div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white/5 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <ArrowRight className="text-teal-400" size={20} />
              Project Overview
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Technology Stack */}
          <div className="bg-white/5 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <ArrowRight className="text-cyan-400" size={20} />
              Technology Stack
            </h3>
            <div className="space-y-4">
              {project.techStack?.frontend && (
                <div>
                  <h4 className="text-teal-400 font-semibold mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.frontend.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm border border-teal-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.techStack?.backend && (
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.backend.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.tags && (
                <div>
                  <h4 className="text-purple-400 font-semibold mb-2">
                    Other Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white/5 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle className="text-green-400" size={20} />
              Key Features
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {project.features?.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges Faced */}
          <div className="bg-white/5 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="text-orange-400" size={20} />
              Challenges Faced
            </h3>
            <div className="space-y-3">
              {project.challenges?.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300">{challenge}</span>
                </div>
              )) || (
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300">
                      Implementing secure authentication with role-based access
                      control
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300">
                      Optimizing database queries for better performance
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300">
                      Ensuring responsive design across all device sizes
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Future Improvements */}
          <div className="bg-white/5 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Lightbulb className="text-yellow-400" size={20} />
              Future Improvements & Plans
            </h3>
            <div className="space-y-3">
              {project.futureImprovements?.map((improvement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300">{improvement}</span>
                </div>
              )) || (
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300">
                      Add real-time notifications and messaging system
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300">
                      Implement advanced analytics and reporting features
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300">
                      Add mobile app version using React Native
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300">
                      Integrate AI-powered features for better user experience
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <ExternalLink size={20} />
              View Live Project
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 border border-white/10"
            >
              <Github size={20} />
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
