"use client";

import { useState } from "react";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import WorksSection from "@/components/sections/WorksSection";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<main className="bg-black min-h-screen text-white">
			<LoadingScreen isLoading={isLoading} />

			<HeroSection onLoaded={() => setIsLoading(false)} />

			<WorksSection />

			<AboutSection />
			<ExperienceSection />
			<ContactSection />
		</main>
	);
}
