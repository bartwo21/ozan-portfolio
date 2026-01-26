"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const works = [
	{
		id: 1,
		title: "UR",
		role: "Camera / Editing",
		img: "/images/image1.webp",
		url: ''
	},
	{
		id: 2,
		title: "It's Like I Know You",
		role: "Sound",
		img: "/images/image2.webp",
		url: 'https://www.youtube.com/watch?v=KkaapW-j7wo'
	},
	{ id: 3, title: "Bir Omurluk Seyahat: Evliya Celebi", role: "Camera Assistant", img: "/images/image3.webp", url: 'https://www.youtube.com/watch?v=Hca8aWCkcEo' },
	{ id: 4, title: "Commercial Project", role: "Camera / Editing", img: "/images/image4.webp", url: '' },
	{ id: 5, title: "Duzce University Mekatek Student Club Introduction", role: "Camera / Editing", img: "/images/image5.webp", url: '' },
	{ id: 6, title: "Duzce University American Football Team Introduction", role: "Camera / Editing", img: "/images/image6.webp", url: '' },
	{ id: 7, title: "Duzce Doner Alti Advertisement", role: "Camera / Editing", img: "/images/image7.webp", url: '' },
	{ id: 8, title: "Sevdanin Rengi Music Video", role: "Camera Assistant", img: "/images/image8.webp", url: 'https://www.youtube.com/watch?v=vXHBRJ_tJYs' },
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
				x: () => -(sectionRef.current!.scrollWidth - window.innerWidth),
				ease: "none",
				duration: 1,
				scrollTrigger: {
					trigger: triggerRef.current,
					start: "top top",
					end: () => `+=${sectionRef.current!.scrollWidth - window.innerWidth}`,
					scrub: 0.6,
					pin: true,
					invalidateOnRefresh: true,
				},
			},
		);

		return () => {
			// Clean up ScrollTrigger instance
			pin.kill();
		};
	}, []);

	return (
		<div className="overflow-hidden bg-zinc-950">
			{/* Trigger element specific for ScrollTrigger pinning */}
			<div ref={triggerRef}>
				<div
					ref={sectionRef}
					className="flex h-screen w-max flex-row relative bg-zinc-950"
				>
					{/* Intro Panel */}
					<div className="flex h-screen w-screen shrink-0 flex-col items-center justify-center px-20">
						<h2 className="font-syne font-bold text-[10vw] uppercase text-white leading-none">
							Selected <br /> <span className="text-zinc-600">Works</span>
						</h2>
						<p className="mt-8 max-w-md text-zinc-400 text-lg">
							A collection of featured films, commercials, and music videos.
						</p>
						<div className="mt-10 animate-pulse text-sm text-zinc-500 uppercase tracking-widest">
							Scroll to explore &rarr;
						</div>
					</div>

					{/* Work Items */}
					{works.map((work) => (
						<div
							key={work.id}
							className="relative flex h-screen w-[85vw] md:w-[38vw] shrink-0 flex-col justify-center px-4 md:px-10 group"
						>
							<div className="relative aspect-[9/16] md:aspect-[4/5] w-full overflow-hidden bg-zinc-900 transition-all duration-500 group-hover:scale-95 grayscale hover:grayscale-0">
								<Image
									src={work.img}
									alt={work.title}
									fill
									className="object-cover"
								/>
								{/* Overlay Details */}
								<div className="absolute inset-0 bg-black/60 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-2 md:p-4">
									<h3 className="font-syne font-bold text-sm md:text-2xl lg:text-4xl text-white uppercase">
										{work.title}
									</h3>
									<p className="font-mono text-amber-500 mt-1 md:mt-2 text-xs md:text-sm lg:text-base">{work.role}</p>
									{work.url && (
										<Link href={work.url} target="_blank">
											<button className="mt-3 md:mt-6 px-2 py-1 md:px-6 md:py-2 border border-white/20 text-white text-xs md:text-sm uppercase hover:bg-white hover:text-black transition-colors">
												View Case
											</button>
										</Link>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
