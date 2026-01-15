"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const works = [
	{
		id: 1,
		title: "The Dark Knight",
		role: "1st AC",
		img: "/images/image1.png",
	},
	{
		id: 2,
		title: "Inception",
		role: "Camera Operator",
		img: "/images/image2.png",
	},
	{ id: 3, title: "Dunkirk", role: "Focus Puller", img: "/images/image3.png" },
	{ id: 4, title: "Interstellar", role: "1st AC", img: "/images/image4.png" },
	{ id: 5, title: "Tenet", role: "Key Grip", img: "/images/image5.png" }, // Adjusted role for variety
	{ id: 6, title: "Oppenheimer", role: "1st AC", img: "/images/image6.png" },
	{ id: 7, title: "Memento", role: "Loader", img: "/images/image7.png" },
];

export default function WorksSection() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const pin = gsap.fromTo(
			sectionRef.current,
			{
				translateX: 0,
			},
			{
				translateX: "-300vw", // Move horizontally by 3 screen widths (adjust based on content)
				ease: "none",
				duration: 1,
				scrollTrigger: {
					trigger: triggerRef.current,
					start: "top top",
					end: "2000 top", // Scroll distance to complete animation
					scrub: 0.6,
					pin: true,
				},
			},
		);

		return () => {
			// Clean up ScrollTrigger instance
			pin.kill();
		};
	}, []);

	return (
		<div className="overflow-hidden">
			{/* Trigger element specific for ScrollTrigger pinning */}
			<div ref={triggerRef}>
				<div
					ref={sectionRef}
					className="flex h-screen w-[400vw] flex-row relative bg-zinc-950"
				>
					{/* Intro Panel */}
					<div className="flex h-screen w-screen flex-col items-center justify-center px-20">
						<h2 className="font-syne font-bold text-[10vw] uppercase text-white leading-none">
							Selected <br /> <span className="text-zinc-600">Works</span>
						</h2>
						<p className="mt-8 max-w-md text-zinc-400 text-lg">
							A collection of feature films, commercials, and music videos.
						</p>
						<div className="mt-10 animate-pulse text-sm text-zinc-500 uppercase tracking-widest">
							Scroll to explore &rarr;
						</div>
					</div>

					{/* Work Items */}
					{works.map((work) => (
						<div
							key={work.id}
							className="relative flex h-screen w-[50vw] md:w-[40vw] flex-col justify-center px-4 md:px-10 group"
						>
							<div className="relative aspect-[9/16] md:aspect-[4/5] w-full overflow-hidden bg-zinc-900 transition-all duration-500 group-hover:scale-95 grayscale hover:grayscale-0">
								<Image
									src={work.img}
									alt={work.title}
									fill
									className="object-cover"
								/>
								{/* Overlay Details */}
								<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
									<h3 className="font-syne font-bold text-4xl text-white uppercase">
										{work.title}
									</h3>
									<p className="font-mono text-amber-500 mt-2">{work.role}</p>
									<button className="mt-6 px-6 py-2 border border-white/20 text-white text-sm uppercase hover:bg-white hover:text-black transition-colors">
										View Case
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
