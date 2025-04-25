'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaBezierCurve } from 'react-icons/fa';

const projects = [
  {
    title: 'Cortex – AI-Powered Contact Center Platform',
    description:
      'Designed intelligent agent workflows for a scalable AI contact center platform. Led UX research, atomic design system setup, and usability testing to improve NLP-based task flows and reduce user effort by 20%.',
    image: '/cortex.jpg',
    tags: ['UX Research', 'Figma', 'Usability Testing', 'Design Systems'],
    view: 'https://www.figma.com/proto/Uu6s6gO4d03rdP5qIUeKtb/Infy-Backup?node-id=1-1654&t=E5F8qyBP9feIztaB-1&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A1634&starting-point-node-id=1%3A1654',
    github: '', // No specific Cortex repo, links to main GitHub
    prototype: '',
  },
  {
    title: 'Citizens Bank Dashboard UX Redesign',
    category: 'SDE / Frontend',
    description: 'Redesigned Citizens Bank’s onboarding and dashboard UX using heuristic analysis and wireframe prototyping in Figma—boosting task efficiency by 25% across three user personas. Also won the design againts 2 other competitors.',
    image: '/citizen.jpg', // Replace with actual screenshot if available
    tags: ['Figma', 'UX Audit', 'Wireframing', 'Banking UI', 'Accessibility'],
    view: 'https://www.figma.com/proto/Uu6s6gO4d03rdP5qIUeKtb/Infy-Backup?node-id=1-23205&p=f&t=rKFJ6a3Z7z7zWAcN-1&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A23204',
    github: '', // No public repo
    prototype: ''
  },  
  {
    title: 'Salesforce CIX – Journey Builder UX',
    category: 'UI/UX Design',
    description:
      'Redesigned enterprise UX for Salesforce’s marketing suite with modular user journeys, role-based flows, and microinteractions—boosting task completion by 35%.',
    image: '/cix.jpg',
    tags: ['Figma', 'Journey Builder', 'UX Strategy', 'Design Systems', 'Accessibility', 'Agile', 'Stakeholder Workshop'],
    view: 'https://www.figma.com/proto/tWTJpOf6Z073Ua8Nr2ZH6d/ICX?node-id=0-1&p=f&t=VmUlkXE7HIT5AlKY-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A8865&show-proto-sidebar=1',
    prototype: '',
    github: '',
  },
  {
    title: 'Homebase UK – eCommerce UX Redesign',
    description: 'Led heuristic audit and redesign of Homebase UK’s shopping experience using Axure RP. A/B tested CTA placement and flow logic, achieving 40% faster task completion and 25% higher success rates.',
    image: '/homebase.jpg', // replace with your custom thumbnail if available
    tags: ['Axure RP', 'UX Research', 'A/B Testing', 'Responsive Design', 'Accessibility'],
    view: '', // reuse for View Project
    github: 'https://github.com/animated-boi/Homebase-UK-eCommerce-Redesign',
    prototype: 'http://127.0.0.1:32767/start.html?id=6x0ujw&p=homepage&sc=1', // (If you have a public Axure/Figma prototype link, drop it here)
  },
  {
    title: 'COVID-19 Scrollytelling Dashboard',
    category: 'Data Science',
    description:
      'Crafted a scroll-driven storytelling interface to visualize COVID-19 trends across 200+ countries, blending narrative UX with animated D3.js visuals and mobile-first design principles.',
    image: '/covid.jpg',
    tags: ['Figma', 'D3.js', 'Narrative UX', 'HTML5/CSS3', 'Scrollama'],
    view: '',
    github: 'https://github.com/animated-boi/COVID-19-Scrollytelling-Visualization-Platform',
    prototype:
      'http://127.0.0.1:5501/index.html',
  },
  {
    title: 'Western Union UX Benchmarking',
    category: 'UX Research',
    description:
      'Audited 4 leading remittance platforms to benchmark IA, personalization, and CTA clarity—delivered actionable UX insights to drive redesign priorities and boost conversion alignment by 20%.',
    image: '/westernunion.png',
    tags: ['UX Research', 'Journey Mapping', 'Heuristic Evaluation', 'Figma'],
    view: '',
    github: '',
    prototype:
      'https://www.figma.com/proto/Uu6s6gO4d03rdP5qIUeKtb/Infy-Backup?node-id=1-26336&t=aYWSoWOpAklAfGjY-0&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A26172',
  },
  {
    title: 'Apple.com Frontend Prototype',
    description: 'Replicated Apple’s homepage in Axure with pixel-perfect fidelity, responsive panels, and accessible interactions simulating real-world navigation.',
    image: '/apple.jpg',
    tags: ['Axure RP', 'Interaction Design', 'Responsive Design', 'ARIA Roles'],
    view: '',
    github: 'https://github.com/animated-boi/Apple.com-Frontend-Engineering-Prototype-',
    prototype: 'http://127.0.0.1:32768/start.html?id=h2c2wr&p=applehome&sc=1'
  },  
  {
    title: 'Data Visualization Series',
    category: 'SDE / Frontend',
    description: 'Crafted animated, scroll-triggered dashboards and custom charts (lollipop, spiral, radar) to explore motion, readability, and narrative UX in data visualization.',
    image: '/viz.jpg', // Replace with your actual image path
    tags: ['D3.js', 'Figma', 'HTML5/CSS3', 'UX Motion', 'Narrative Design'],
    view: '',
    github: 'https://github.com/animated-boi/Data-Visualization-Series',
    prototype: '', // Add Figma prototype if exists
  },
  {
    title: 'Sub Ease – Subscription Management App',
    description:
      'Collaborative design sprint project that addresses the growing need for subscription tracking. Delivered research-backed flows, user personas, and mobile UI to improve visibility and cancellation across services. Emphasized accessibility, card sorting, and pain-point driven architecture.',
    image: '/subease.jpg',
    tags: ['UX Research', 'User Persona', 'Wireframing', 'Figma', 'Mobile UI', 'Empathy Mapping','Customer Journey Mapping'],
    view: 'https://www.figma.com/proto/Uu6s6gO4d03rdP5qIUeKtb/Infy-Backup?node-id=1-27827&t=iZMXSIzZ5bWWlPcF-1&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A26466&starting-point-node-id=1%3A27827',
    prototype: 'https://www.figma.com/proto/Uu6s6gO4d03rdP5qIUeKtb/Infy-Backup?node-id=1-28124&t=iZMXSIzZ5bWWlPcF-1&scaling=contain&content-scaling=fixed&page-id=1%3A26466&starting-point-node-id=1%3A28124',
    github: '', // Not applicable unless the frontend is coded
  },
  {
    title: 'Groome – Your Grooming Bud',
    description:
      'End-to-end UX design project focused on simplifying salon and grooming service bookings with an emphasis on hygiene, accessibility, and convenience. Included persona-driven research,  and pandemic-conscious service delivery. Delivered visual design system, wireframes, and a high-fidelity mobile prototype.',
    image: '/groome.jpg',
    tags: ['UX Research', 'Design Thinking', 'Wireframing', 'Figma', 'Mobile UI', 'Service Design'],
    view: 'https://www.figma.com/proto/Uu6s6gO4d03rdP5qIUeKtb/Infy-Backup?node-id=1-6104&t=gVjVo4ksM5i0J9xu-1&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A5535&starting-point-node-id=1%3A6104',
    prototype: 'https://www.figma.com/proto/Uu6s6gO4d03rdP5qIUeKtb/Infy-Backup?node-id=1-7565&t=gVjVo4ksM5i0J9xu-1&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A5535&starting-point-node-id=1%3A8111',
    github: '' // Not applicable unless the frontend is coded
  },
  {
    title: 'WorkFit – Corporate Wellness App',
    description:
      'A research-driven mobile UX case study for a corporate gym scheduling app. Designed for busy professionals to seamlessly book workout zones, track wellness goals, and balance fitness with flexible work hours. Features included accessibility-first flows, slot filters, motivational nudges, and onboarding customization.',
    image: '/workfit.jpg',
    tags: ['UX Research', 'Design Thinking', 'Mobile UI', 'Figma', 'Information Architecture', 'Persona Mapping'],
    view: 'https://www.figma.com/proto/Uu6s6gO4d03rdP5qIUeKtb/Infy-Backup?node-id=1-11097&t=GQyoieSRyFbG63WJ-1&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A10533&starting-point-node-id=1%3A16427',
    prototype: 'https://www.figma.com/proto/Uu6s6gO4d03rdP5qIUeKtb/Infy-Backup?node-id=1-11666&t=GQyoieSRyFbG63WJ-1&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A10533&starting-point-node-id=1%3A16427&show-proto-sidebar=1',
    github: '' // Not applicable; not a coded project
  },
  {
    title: 'EduMe – Personalized Learning Marketplace',
    description:
      'Designed a safe, inclusive, and highly personalized mobile-first experience for parents to discover certified tutors, customize lesson plans, and schedule classes for their children. Focused on scalable IA, 1-to-1 tutor access, and gamified learning workflows to boost engagement and trust.',
    image: '/edume.jpg',
    tags: ['UX Research', 'Persona Design', 'Figma', 'Interaction Design', 'Mobile UI', 'Gamified Learning'],
    view: 'https://www.figma.com/proto/Uu6s6gO4d03rdP5qIUeKtb/Infy-Backup?node-id=1-20320&t=bIT2RK10nyzh9M79-1&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A17774&starting-point-node-id=1%3A20320',
    prototype: 'https://www.figma.com/proto/Uu6s6gO4d03rdP5qIUeKtb/Infy-Backup?node-id=1-34689&t=EI7b5juQtoMSS7WO-1&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A17774&starting-point-node-id=1%3A34689&show-proto-sidebar=1',
    github: '' // Not a coded prototype
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-sm px-3 py-1 bg-gray-800 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.view && (
                    <a
                      href={project.view}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" /> View Project
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition"
                    >
                      <FaGithub className="w-4 h-4" /> GitHub
                    </a>
                  )}
                  {project.prototype && (
                    <a
                      href={project.prototype}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition"
                    >
                      <FaBezierCurve className="w-4 h-4" /> Prototype
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
