"use client";

import { motion } from "framer-motion";
import { Calendar, Code2, Coffee, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Calendar, label: "Experience", value: "6+", suffix: "Month" },
    { icon: Code2, label: "Projects", value: "20+", suffix: "" },
    { icon: Coffee, label: "Coffee", value: "1k+", suffix: "" },
    { icon: Users, label: "Clients", value: "5+", suffix: "" },
  ];

  const traits = [
    "Curiosity",
    "Creativity",
    "Problem Solving",
    "Team Player",
    "Detail Oriented",
    "User Focused",
    "Continuous Learner",
    "Adaptable",
  ];

  return (
    <section className="py-16" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center rounded-full glass-card px-3 py-1 text-xs font-medium text-primary mb-4">
            Open to Work
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
            Behind the Code
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
            I'm a Full-Stack Developer with a passion for building beautiful,
            functional, and scalable web applications. My journey started 5
            years ago with a simple HTML file, and I've been hooked on solving
            problems ever since. I bridge the gap between engineering and
            design.
          </p>
        </motion.div>

        {/* Narrative Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Journey Card */}
          <motion.div
            className="group flex flex-col gap-3 rounded-xl glass-card p-4 hover:bg-white/10 dark:hover:bg-white/5 transition-all shadow-sm"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden relative"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop")`,
              }}
            >
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Code2 className="text-primary" size={18} />
                <p className="text-slate-900 dark:text-white text-lg font-bold leading-normal">
                  The Journey
                </p>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">
                Started from self-taught scripts to architecting
                enterprise-level SaaS platforms. It's been a ride of constant
                learning.
              </p>
            </div>
          </motion.div>

          {/* Work Card */}
          <motion.div
            className="group flex flex-col gap-3 rounded-xl glass-card p-4 hover:bg-white/10 dark:hover:bg-white/5 transition-all shadow-sm"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden relative"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop")`,
              }}
            >
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Code2 className="text-primary" size={18} />
                <p className="text-slate-900 dark:text-white text-lg font-bold leading-normal">
                  The Work
                </p>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">
                I enjoy crafting complex back-end systems and intuitive
                front-end interfaces. Clean code is my philosophy.
              </p>
            </div>
          </motion.div>

          {/* Person Card */}
          <motion.div
            className="group flex flex-col gap-3 rounded-xl glass-card p-4 hover:bg-white/10 dark:hover:bg-white/5 transition-all shadow-sm"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden relative"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop")`,
              }}
            >
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Users className="text-primary" size={18} />
                <p className="text-slate-900 dark:text-white text-lg font-bold leading-normal">
                  The Person
                </p>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">
                Curious by nature. When I'm not coding, I'm hiking, gaming, or
                brewing the perfect cup of coffee.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="flex flex-col gap-2 rounded-xl p-6 glass-card hover:bg-white/10 dark:hover:bg-white/5 transition-all group shadow-sm"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.6 }}
              >
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary/20 transition-colors">
                  <IconComponent size={20} />
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  {stat.label}
                </p>
                <p className="text-slate-900 dark:text-white text-3xl font-black tracking-tight">
                  {stat.value}{" "}
                  {stat.suffix && (
                    <span className="text-sm font-normal text-slate-500 dark:text-slate-400">
                      {stat.suffix}
                    </span>
                  )}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Traits Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-slate-900 dark:text-white text-2xl font-bold mb-6 flex items-center justify-center gap-3">
            <Code2 className="text-primary" size={28} />
            My Core Traits
          </h3>
          <div className="flex gap-3 flex-wrap justify-center">
            {traits.map((trait, index) => (
              <motion.div
                key={trait}
                className="group flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full glass-card pl-4 pr-5 hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 + 0.8 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <p className="text-slate-700 dark:text-slate-200 text-sm font-medium group-hover:text-primary transition-colors">
                  {trait}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
