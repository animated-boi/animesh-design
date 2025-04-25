'use client';

interface Skill {
	name: string;
	level: number;
	category?: string;
}

const coreTechnologies: Skill[] = [
	{ name: 'Figma', level: 95, category: 'Design System' },
	{ name: 'Axure RP', level: 90, category: 'Wireframing' },
	{ name: 'Adobe XD', level: 90, category: 'Prototyping' },
	{ name: 'Illustrator', level: 88, category: 'Visual Design' },
	{ name: 'Photoshop', level: 85, category: 'Mockups' },
	{ name: 'Salesforce Journey Builder', level: 84, category: 'Journey Mapping' },
	{ name: 'Zeplin', level: 82, category: 'Dev Handoff' },
	{ name: 'Chrome DevTools', level: 80, category: 'Debug & QA' },
	{ name: 'Bootstrap', level: 80, category: 'UI Framework' },
	{ name: 'HTML/CSS/JS', level: 78, category: 'Frontend Foundation' },
];

const specializedSkills: Skill[] = [
	{ name: 'Interaction Design', level: 94 },
	{ name: 'User Research', level: 92 },
	{ name: 'Strategic Design Thinking', level: 90 },
	{ name: 'Accessibility (WCAG)', level: 88 },
	{ name: 'Usability Testing', level: 86 },
	{ name: 'A/B Testing', level: 85 },
	{ name: 'Journey Mapping', level: 85 },
	{ name: 'Heuristic Evaluation', level: 84 },
	{ name: 'Personas', level: 82 },
	{ name: 'Competitive Analysis', level: 81 },
	{ name: 'Design-to-Dev Handoff', level: 80 },
	{ name: 'Agile Collaboration', level: 80 },
];

const SkillsSection = () => {
	return (
		<section className="py-20 bg-[#0f172a] text-white w-full">
			<div className="max-w-7xl mx-auto px-6 md:px-12">
				<h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Technical Expertise</h2>
				<p className="text-gray-400 text-center text-base mb-12">
					A creative technologist fluent in UX workflows, design systems, and human-centered strategies
				</p>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Core Technologies */}
					<div>
						<h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
							<svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z" />
							</svg>
							Core Technologies
						</h3>
						{coreTechnologies.map((skill) => (
							<div key={skill.name} className="mb-5">
								<div className="flex items-center justify-between mb-1">
									<div className="flex items-center gap-2">
										<span className="font-medium">{skill.name}</span>
										{skill.category && (
											<span className="px-2 py-0.5 text-xs rounded-full bg-white/10 border border-white/20 text-white/80">
												{skill.category}
											</span>
										)}
									</div>
									<span className="text-sm text-blue-300">{skill.level}%</span>
								</div>
								<div className="h-2 bg-gray-700 rounded-full overflow-hidden">
									<div
										className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
										style={{ width: `${skill.level}%` }}
									></div>
								</div>
							</div>
						))}
					</div>

					{/* Specialized Skills */}
					<div>
						<h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
							<svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12,0L3,7L4.63,8.27L12,14L19.36,8.27L21,7L12,0M19.37,10.73L12,16.47L4.62,10.73L3,12L12,19L21,12L19.37,10.73M19.37,15.73L12,21.47L4.62,15.73L3,17L12,24L21,17L19.37,15.73" />
							</svg>
							Specialized Skills
						</h3>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{specializedSkills.map((skill) => (
								<div
									key={skill.name}
									className="group bg-gray-800/40 border border-gray-700/40 rounded-xl p-4 relative overflow-hidden hover:shadow-xl transition"
								>
									<div className="flex items-center justify-between mb-2">
										<span className="font-medium">{skill.name}</span>
										<span className="text-sm text-purple-300">{skill.level}%</span>
									</div>
									<div className="h-2 bg-gray-700 rounded-full overflow-hidden">
										<div
											className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-700"
											style={{ width: `${skill.level}%` }}
										></div>
									</div>
									<div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
										<svg className="absolute -right-4 -bottom-4 w-24 h-24 text-pink-500 opacity-20" viewBox="0 0 24 24" fill="currentColor">
											<path d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z" />
										</svg>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
