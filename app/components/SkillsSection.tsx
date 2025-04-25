'use client';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'UX Research & Strategy',
    skills: [
      { name: 'User Personas', logo: '/icons/persona.svg' },
      { name: 'Stakeholder Workshops', logo: '/icons/workshop.svg' },
      { name: 'Design Thinking', logo: '/icons/design-thinking.svg' },
      { name: 'Empathy Mapping', logo: '/icons/empathy.svg' },
	  { name: 'Miro', logo: '/icons/miro.svg' }
    ]
  },
  {
    category: 'Frontend/UI Technologies',
    skills: [
      { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', logo: '/icons/nextjs.svg' },
      { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
      { name: 'D3.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg' }
    ]
  },
  {
    category: 'Accessibility & Testing Tools',
    skills: [
      { name: 'WCAG 2.2', logo: '/icons/wcag.svg' },
      { name: 'Keyboard Navigation', logo: '/icons/keyboard.svg' },
      { name: 'ARIA Roles', logo: '/icons/aria.svg' },
      { name: 'Lighthouse', logo: '/icons/lighthouse.svg' },
      { name: 'Jira', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
      { name: 'Confluence', logo: '/icons/confluence.svg' }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
        >
          FrontEnd Development Skills
        </motion.h2>

        <div className="space-y-12">
          {skillCategories.map((section, secIndex) => (
            <div key={secIndex}>
              <h3 className="text-xl font-semibold text-white mb-6">{section.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 text-white">
                {section.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-colors"
                  >
                    {/* <img src={skill.logo} alt={skill.name} className="mx-auto w-6 h-6 mb-2" /> */}
                    <h4 className="text-sm font-medium">{skill.name}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
