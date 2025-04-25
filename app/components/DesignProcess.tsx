'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface Process {
	title: string;
	colorClasses: {
		bg: string;
		text: string;
		gradientFrom: string;
		gradientTo: string;
		hoverBorder: string;
	};
	icon: React.ReactNode;
	steps: string[];
}

const processes: Process[] = [
	{
		title: 'Discover',
		colorClasses: {
			bg: 'bg-yellow-500/10',
			text: 'text-yellow-400',
			gradientFrom: 'from-yellow-500',
			gradientTo: 'to-orange-500',
			hoverBorder: 'group-hover:border-yellow-500/30',
		},
		icon: (
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
			/>
		),
		steps: ['Stakeholder interviews, surveys, and personas', 'User research and empathy mapping', 'Define business goals and pain points'],
	},
	{
		title: 'Define',
		colorClasses: {
			bg: 'bg-blue-500/10',
			text: 'text-blue-400',
			gradientFrom: 'from-blue-500',
			gradientTo: 'to-indigo-500',
			hoverBorder: 'group-hover:border-blue-500/30',
		},
		icon: (
			<path 
				strokeLinecap="round" 
				strokeLinejoin="round" 
				strokeWidth={2} 
				d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
			/>
		),
		steps: ['Synthesize insights into user journeys', 'Create information architecture and user stories', 'Prioritize features and functionality'],
	},
	{
		title: 'Develop',
		colorClasses: {
			bg: 'bg-purple-500/10',
			text: 'text-purple-400',
			gradientFrom: 'from-purple-500',
			gradientTo: 'to-pink-500',
			hoverBorder: 'group-hover:border-purple-500/30',
		},
		icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />,
		steps: ['Wireframing and interactive prototypes', 'Component-based design system', 'Visual + interaction design for accessibility'],
	},
	{
		title: 'Deliver',
		colorClasses: {
			bg: 'bg-green-500/10',
			text: 'text-green-400',
			gradientFrom: 'from-green-500',
			gradientTo: 'to-emerald-500',
			hoverBorder: 'group-hover:border-green-500/30',
		},
		icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
		steps: ['Usability testing and iteration', 'Dev handoff via Zeplin or Figma specs', 'Production-ready UX documentation'],
	},
];

const DesignProcess = () => {
	return (
		<section className="py-16 md:py-20 relative" id="design-process">
			<div className="container mx-auto px-4">
				<motion.h2 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-center"
				>
					Design Process
				</motion.h2>
				<motion.p 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="text-sm sm:text-base text-gray-400 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
				>
					A user-centered framework used to deliver intuitive, accessible, and production-ready digital experiences
				</motion.p>

				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
						{processes.map((process, index) => (
							<motion.div 
								key={index} 
								className="group relative"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<div
									className={`absolute inset-0 bg-gradient-to-r ${process.colorClasses.gradientFrom} ${process.colorClasses.gradientTo} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
								></div>
								<div
									className={`relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-6 sm:p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50 ${process.colorClasses.hoverBorder} transition-colors duration-300 h-full min-h-[380px] flex flex-col`}
								>
									{/* Icon Container */}
									<div className="mb-6 flex-shrink-0">
										<div
											className={`w-16 h-16 ${process.colorClasses.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
										>
											<svg className={`w-8 h-8 ${process.colorClasses.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
												{process.icon}
											</svg>
										</div>
										<h3 className={`text-xl font-semibold mb-3 text-center group-hover:${process.colorClasses.text} transition-colors`}>{process.title}</h3>
									</div>

									{/* Process Steps */}
									<div className="space-y-5 flex-grow mt-2">
										{process.steps.map((step, stepIndex) => (
											<div key={stepIndex} className="flex items-start gap-3 w-full">
												<div className={`w-6 h-6 rounded-full ${process.colorClasses.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
													<span className={`text-sm ${process.colorClasses.text}`}>{stepIndex + 1}</span>
												</div>
												<p className="text-base text-gray-400 group-hover:text-gray-300 flex-1">{step}</p>
											</div>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default DesignProcess;
