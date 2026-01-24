"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Battery, Disc, Film, Focus } from "lucide-react";
import { useEffect, useRef } from "react";
import DarkVeil from "@/components/DarkVeil";

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
	onLoaded: () => void;
}

export default function HeroSection({ onLoaded }: HeroSectionProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);
	const viewfinderRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Simulate load
		const timer = setTimeout(() => {
			onLoaded();
		}, 500);

		const ctx = gsap.context(() => {
			// Initial State - Visible but out of focus (like a camera lens)
			gsap.set(textRef.current, {
				filter: "blur(30px)",
				scale: 0.9,
				opacity: 0.5,
			});

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: "bottom bottom",
					scrub: 0.5,
				},
			});

			// Phase 1: Focus Pull & Rack Zoom (0% - 40% scroll)
			tl.to(textRef.current, {
				filter: "blur(0px)",
				scale: 1,
				opacity: 1,
				duration: 4,
				ease: "power2.out",
			});

			// Phase 2: Hold Focus & slight drift (40% - 70% scroll)
			tl.to(textRef.current, {
				scale: 1.05,
				duration: 3,
				ease: "none",
			});

			// Phase 3: Cut / Zoom Through (70% - 100% scroll)
			tl.to([textRef.current, viewfinderRef.current], {
				scale: 1.5,
				opacity: 0,
				filter: "blur(10px)",
				duration: 3,
				ease: "power2.in",
			});
		}, containerRef);

		return () => {
			clearTimeout(timer);
			ctx.revert();
		};
	}, [onLoaded]);

	return (
		<div ref={containerRef} className="relative h-[300vh] w-full bg-black">
			<div className="sticky top-0 h-screen w-full overflow-hidden">
				{/* Background */}
				<div className="absolute inset-0 z-0">
					<DarkVeil />
				</div>

				{/* Viewfinder UI Overlay */}
				<div
					ref={viewfinderRef}
					className="absolute inset-0 z-20 pointer-events-none p-2 sm:p-4 md:p-12 flex flex-col justify-between text-[10px] sm:text-xs md:text-sm font-mono text-white/80 select-none mix-blend-difference overflow-hidden"
				>
					{/* Top Bar */}
					<div className="flex justify-between items-start">
						<div className="flex gap-6 items-center">
							<div className="flex items-center gap-2 text-red-500 animate-pulse">
								<Disc size={16} fill="currentColor" />
								<span className="font-bold tracking-widest">REC</span>
							</div>
							<div className="hidden md:block">
								<span>TC 00:00:24:18</span>
							</div>
						</div>

						<div className="flex gap-6 items-center">
							<div className="flex flex-col items-end">
								<span className="text-zinc-400 text-[10px] uppercase">Bat</span>
								<div className="flex items-center gap-2">
									<span>14.4V</span>
									<Battery size={16} />
								</div>
							</div>
						</div>
					</div>

					{/* Center Crosshairs/Guides */}
					<div className="absolute inset-0 flex items-center justify-center opacity-30">
						<div className="w-8 h-8 border-l border-t border-white/50 absolute top-1/2 left-1/2 -translate-x-full -translate-y-full" />
						<div className="w-8 h-8 border-r border-t border-white/50 absolute top-1/2 left-1/2 -translate-y-full" />
						<div className="w-8 h-8 border-l border-b border-white/50 absolute top-1/2 left-1/2 -translate-x-full" />
						<div className="w-8 h-8 border-r border-b border-white/50 absolute top-1/2 left-1/2" />

						<div className="w-full h-px bg-white/10 absolute top-1/2" />
						<div className="h-full w-px bg-white/10 absolute left-1/2" />
					</div>

					{/* Bottom Bar */}
					<div className="flex flex-wrap justify-between items-end gap-y-2">
						<div className="flex gap-1.5 sm:gap-2 md:gap-8">
							<div className="flex flex-col">
								<span className="text-zinc-400 text-[10px] uppercase">ISO</span>
								<span>800</span>
							</div>
							<div className="flex flex-col">
								<span className="text-zinc-400 text-[10px] uppercase">
									Shutter
								</span>
								<span>172.8°</span>
							</div>
							<div className="flex flex-col">
								<span className="text-zinc-400 text-[10px] uppercase">WB</span>
								<span>5600K</span>
							</div>
							<div className="flex flex-col">
								<span className="text-zinc-400 text-[10px] uppercase">
									Iris
								</span>
								<span>T2.0</span>
							</div>
						</div>

						<div className="flex gap-2 sm:gap-4 items-center">
							<div className="flex items-center gap-2 text-zinc-400">
								<Film size={16} />
								<span>A001_C024</span>
							</div>
							<div className="px-2 py-1 bg-white/10 rounded">
								<span>STBY</span>
							</div>
						</div>
					</div>
				</div>

				{/* Main Content (The Subject) */}
				<div
					ref={contentRef}
					className="relative z-10 h-full flex flex-col items-center justify-center mix-blend-plus-lighter px-4 text-center"
				>
					<div
						ref={textRef}
						className="will-change-transform will-change-filter"
					>
						<h1 className="font-syne font-bold text-[18vw] uppercase leading-[0.8] text-zinc-300 tracking-tighter shadow-black drop-shadow-2xl">
							OZAN
						</h1>
						<div className="mt-8 flex items-center justify-center gap-4 text-zinc-400 tracking-[0.3em] text-xs md:text-sm font-mono uppercase">
							<Focus size={16} />
							<span>Cameraman</span>
							<span className="text-zinc-600">/</span>
							<span>Cinematographer</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
