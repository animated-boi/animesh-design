'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import DesignProcess from './components/DesignProcess';
import DesignSpecialtiesSection from './components/DesignSpecialtiesSection';

export default function MinimalModernPortfolio() {
	return (
		<div className="min-h-screen bg-black text-white">
			<HeroSection />
			<DesignSpecialtiesSection />
			<DesignProcess />
			<ProjectsSection />
			<SkillsSection />
			<ContactSection />
	
		</div>
	);
}
