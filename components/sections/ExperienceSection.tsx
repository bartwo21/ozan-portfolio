"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const stripLeftRef = useRef<HTMLDivElement>(null);
	const stripRightRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Parallax effect for film strips
			[stripLeftRef.current, stripRightRef.current].forEach((strip) => {
				if (!strip) return;

				gsap.to(strip, {
					y: "20%",
					ease: "none",
					scrollTrigger: {
						trigger: sectionRef.current,
						start: "top bottom",
						end: "bottom top",
						scrub: 0.5,
					},
				});
			});

			// Manual animation for the Title ("The Cut")
			// because ScrollReveal only accepts strings and we have complex HTML
			if (titleRef.current) {
				const titleParts = titleRef.current.querySelectorAll(".animate-title");
				gsap.fromTo(
					titleParts,
					{
						opacity: 0,
						y: 50,
						filter: "blur(10px)",
						rotate: -5,
					},
					{
						opacity: 1,
						y: 0,
						filter: "blur(0px)",
						rotate: 0,
						stagger: 0.1,
						duration: 1,
						ease: "power3.out",
						scrollTrigger: {
							trigger: titleRef.current,
							start: "top 80%",
							toggleActions: "play none none reverse",
						},
					},
				);
			}
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			className="relative w-full bg-[#050505] py-24 overflow-hidden"
		>
			{/* Film Strips - Decorative Background */}
			{/* Film Strips - Decorative Background */}
			<div className="absolute inset-0 pointer-events-none select-none flex justify-between px-2 md:px-8 opacity-50 md:opacity-60">
				{/* Left Strip */}
				<div
					ref={stripLeftRef}
					className="relative h-[120%] min-h-screen w-12 md:w-16 border-x-2 border-dashed border-zinc-700 flex flex-col items-center gap-12 pt-12 -top-[10%]"
					style={{
						maskImage:
							"linear-gradient(to bottom, transparent, black 100px, black calc(100% - 100px), transparent)",
						WebkitMaskImage:
							"linear-gradient(to bottom, transparent, black 100px, black calc(100% - 100px), transparent)",
					}}
				>
					{/* Sprocket Holes Pattern */}
					{Array.from({ length: 40 }).map((_, i) => {
						return (
							// biome-ignore lint/suspicious/noArrayIndexKey: Static decorative elements
							<div
								key={i}
								className="w-6 h-4 md:w-8 md:h-6 bg-zinc-700 rounded-sm shrink-0"
							/>
						);
					})}
				</div>

				{/* Right Strip */}
				<div
					ref={stripRightRef}
					className="relative h-[120%] min-h-screen w-12 md:w-16 border-x-2 border-dashed border-zinc-700 flex flex-col items-center gap-12 pt-12 -top-[10%]"
					style={{
						maskImage:
							"linear-gradient(to bottom, transparent, black 100px, black calc(100% - 100px), transparent)",
						WebkitMaskImage:
							"linear-gradient(to bottom, transparent, black 100px, black calc(100% - 100px), transparent)",
					}}
				>
					{/* Sprocket Holes Pattern */}
					{Array.from({ length: 40 }).map((_, i) => {
						return (
							// biome-ignore lint/suspicious/noArrayIndexKey: Static decorative elements
							<div
								key={i}
								className="w-6 h-4 md:w-8 md:h-6 bg-zinc-700 rounded-sm shrink-0"
							/>
						);
					})}
				</div>
			</div>

			{/* Main Content */}
			<div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12 text-center md:text-left">
				<div className="mb-24 flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-12">
					{/* Header - Custom Animation */}
					<div ref={titleRef}>
						<h2 className="font-syne font-bold text-5xl md:text-9xl uppercase leading-[0.8] text-white tracking-tighter">
							<span className="animate-title inline-block">The</span> <br />
							<span className="animate-title inline-block text-zinc-700">
								Cut
							</span>
						</h2>
					</div>

					<div className="h-px w-24 md:w-64 bg-zinc-700 mb-6 hidden md:block" />

					<div className="md:mb-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">
						[ Scene: 01 — Journey ]
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-12 gap-12 leading-relaxed items-start">
					{/* Row 1: Metadata & First Paragraph */}
					<div className="md:col-span-4 space-y-8 text-right md:text-left hidden md:block opacity-50 sticky top-32 h-fit">
						<div className="space-y-2">
							<h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
								Role
							</h4>
							<p className="text-sm text-zinc-200">Camera Assistant</p>
							<p className="text-sm text-zinc-200">Visual Storyteller</p>
							<p className="text-sm text-zinc-200">Light Technician</p>
						</div>
						<div className="space-y-2">
							<h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
								Focus
							</h4>
							<p className="text-sm text-zinc-200">Narrative Layout</p>
							<p className="text-sm text-zinc-200">Technical Art</p>
						</div>
					</div>
					<div className="md:col-span-8 flex flex-col gap-12">
						<ScrollReveal
							baseOpacity={0}
							enableBlur={true}
							stagger={0.01}
							textClassName="text-lg md:text-2xl font-light text-zinc-300"
						>
							My passion for storytelling led me to Düzce University's Cinema
							Department, where I honed my skills in camera operation, lighting,
							and narrative layout.
						</ScrollReveal>
					</div>
					{/* Row 2: Full Width Paragraphs */}
					<div className="md:col-span-12 my-8 md:my-16 space-y-16">
						<ScrollReveal
							baseOpacity={0}
							enableBlur={true}
							stagger={0.01}
							textClassName="text-xl md:text-4xl font-light leading-tight text-white"
						>
							Professionally, I've served as a camera assistant on documentaries
							for Diyanet TV and various music videos. These experiences taught
							me to balance the rigid discipline of broadcast standards with the
							dynamic energy required for creative productions.
						</ScrollReveal>

						<ScrollReveal
							baseOpacity={0}
							enableBlur={true}
							stagger={0.01}
							textClassName="text-xl md:text-4xl font-light leading-tight text-white"
							className="pb-8 border-b border-zinc-700"
						>
							I combine technical precision with a creative eye, managing
							equipment and focus with reliability. My goal is to handle the
							technical load so the DP can focus purely on the art.
						</ScrollReveal>
					</div>
				</div>
			</div>
		</section>
	);
}
