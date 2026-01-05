"use client";

import { motion } from "framer-motion";
import { Code, Database, Server, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Crafting responsive interfaces",
      icon: Code,
      color: "blue",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind", level: 98 },
        { name: "Next.js", level: 70 },
        { name: "HTML5", level: 100 },
        { name: "CSS3", level: 95 },
      ],
    },
    {
      title: "Backend Engineering",
      description: "Server logic & APIs",
      icon: Server,
      color: "emerald",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "Express", level: 95 },
        //{ name: "GraphQL", level: 70 },
      ],
    },
    {
      title: "Databases",
      description: "Data persistence & caching",
      icon: Database,
      color: "violet",
      databases: [
        
        "MongoDB",
        "Firebase",
        
      ],
    },
    {
      title: "Tools & DevOps",
      description: "Deployment & workflow",
      icon: Wrench,
      color: "orange",
      tools: [ "Git", "Figma"],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
      emerald:
        "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
      violet:
        "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400",
      orange:
        "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
    };
    return colors[color];
  };

  return (
    <section className="py-16" id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            Skills & Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-white mb-6">
            Technical Proficiency
          </h2>
          <p className="text-slate-400 text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            A comprehensive look at the tools, languages, and technologies I use
            to build scalable, high-performance digital products.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                className="group relative flex flex-col gap-6 rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 + 0.2 }}
                whileHover={{ y: -5 }}
              >
                {/* Header */}
                <div className="flex items-center gap-4 pb-2 border-b border-white/10">
                  <div
                    className={`p-3 rounded-lg ${getColorClasses(
                      category.color
                    )}`}
                  >
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold leading-tight text-white">
                      {category.title}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills with Progress Bars */}
                {category.skills && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="flex flex-col gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors group/item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.4,
                        }}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-semibold group-hover/item:text-primary transition-colors text-white">
                            {skill.name}
                          </span>
                        </div>
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-primary rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              delay:
                                categoryIndex * 0.1 + skillIndex * 0.05 + 0.6,
                              duration: 0.8,
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Database Tags */}
                {category.databases && (
                  <div className="flex flex-wrap gap-2">
                    {category.databases.map((db, dbIndex) => (
                      <motion.span
                        key={db}
                        className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-violet-100/10 hover:text-violet-300 hover:border-violet-500/30 transition-colors cursor-default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.1 + dbIndex * 0.05 + 0.4,
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {db}
                      </motion.span>
                    ))}
                  </div>
                )}

                {/* Tools Tags */}
                {category.tools && (
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, toolIndex) => (
                      <motion.span
                        key={tool}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-orange-100/10 hover:text-orange-300 hover:border-orange-500/30 transition-colors cursor-default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.1 + toolIndex * 0.05 + 0.4,
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-col items-center gap-6 p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 max-w-2xl w-full text-center">
            <h3 className="text-white text-2xl font-bold">
              Ready to start a project?
            </h3>
            <p className="text-slate-400">
              I am currently available for freelance work and open to new
              opportunities.
            </p>
            <motion.button
              className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary hover:bg-primary-dark transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
