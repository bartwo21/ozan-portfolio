"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
	const containerRef = useRef<HTMLElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			if (contentRef.current) {
				gsap.from(contentRef.current.children, {
					y: 50,
					opacity: 0,
					duration: 1,
					stagger: 0.1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top 70%",
					},
				});
			}
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={containerRef}
			className="relative min-h-[70vh] w-full bg-[#050505] px-6 py-24 md:px-12 flex flex-col justify-between"
		>
			<div ref={contentRef} className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between gap-24">
				{/* Header */}
				<div className="border-b border-zinc-800 pb-8">
					<h2 className="text-zinc-500 font-mono uppercase tracking-widest text-sm mb-4">
						Get in Touch
					</h2>
					<p className="text-zinc-300 max-w-xl text-lg md:text-xl font-light leading-relaxed">
						Always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
					</p>
				</div>

				{/* Main Action */}
				<div className="flex flex-col gap-8">
					<a
						href="mailto:ozan.ozdemir.5137@gmail.com"
						className="group flex items-center justify-between border-b border-zinc-700 pb-4 hover:border-white transition-colors duration-500"
					>
						<span className="font-syne text-sm md:text-4xl font-bold text-white group-hover:pl-4 transition-all duration-500">
							ozan.ozdemir.5137@gmail.com
						</span>
						<ArrowUpRight className="w-8 h-8 md:w-16 md:h-16 text-zinc-500 group-hover:text-white group-hover:rotate-45 transition-all duration-500" />
					</a>
				</div>

				{/* Footer Info */}
				<div className="flex justify-between items-center mx-4">
					<div className="space-y-4">
						<h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
							Location
						</h3>
						<p className="text-zinc-300 text-sm">Ankara, Turkey</p>
					</div>

					<div className="space-y-4 md:col-start-4 md:text-right">
						<h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
							Copyright
						</h3>
						<p className="text-zinc-600 text-xs">
							© {new Date().getFullYear()} Ozan Özdemir
						</p>
						<p className="text-zinc-600 text-xs">
							Site made by <a className="text-zinc-400 hover:text-zinc-300 transition-colors duration-300" href="https://bartwo.dev" target="_blank" rel="noopener noreferrer">bartu</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
