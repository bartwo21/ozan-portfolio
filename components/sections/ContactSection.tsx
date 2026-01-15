"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
	const containerRef = useRef<HTMLElement>(null);
	const textRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			if (textRef.current) {
				gsap.fromTo(
					textRef.current,
					{
						y: 100,
						opacity: 0,
						filter: "blur(20px)",
						rotateX: 20,
					},
					{
						y: 0,
						opacity: 1,
						filter: "blur(0px)",
						rotateX: 0,
						duration: 1.5,
						ease: "power4.out",
						scrollTrigger: {
							trigger: containerRef.current,
							start: "top 70%",
							toggleActions: "play none none reverse",
						},
					},
				);
			}
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={containerRef}
			className="relative flex min-h-[90vh] w-full flex-col items-center justify-center bg-black px-6"
		>
			<a
				href="mailto:ozanozdemir@example.com"
				className="group relative z-10 block perspective-1000"
			>
				<h2
					ref={textRef}
					className="font-syne font-bold text-[9vw] uppercase leading-none text-white transition-all duration-500 ease-out group-hover:text-zinc-300 group-hover:tracking-[0.05em] group-hover:scale-105 will-change-transform"
				>
					Let's Talk
				</h2>
			</a>

			<div className="mt-32 w-full max-w-md flex justify-between items-end border-b border-zinc-900 pb-4 relative z-10">
				<div className="flex gap-6">
					<SocialLink href="#" label="Instagram" />
					<SocialLink href="#" label="IMDb" />
					<SocialLink href="#" label="LinkedIn" />
				</div>
				<span className="text-zinc-800 text-[10px] font-mono uppercase">
					ANKARA / TR
				</span>
			</div>

			<footer className="absolute bottom-6 w-full text-center text-zinc-800 text-[10px] font-mono uppercase tracking-widest z-10">
				© {new Date().getFullYear()} Ozan Özdemir | made by{" "}
				<a href="https://bartwo.dev" target="_blank" rel="noopener">
					Bartu
				</a>
			</footer>
		</section>
	);
}

function SocialLink({ href, label }: { href: string; label: string }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="text-zinc-500 text-xs uppercase tracking-widest hover:text-white transition-colors duration-300"
		>
			{label}
		</a>
	);
}
