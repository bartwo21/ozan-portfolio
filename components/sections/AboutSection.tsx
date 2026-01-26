"use client";

import Image from "next/image";
import { gear } from "@/lib/data";

export default function AboutSection() {
	return (
		<section className="relative min-h-screen w-full bg-zinc-950 py-32 overflow-hidden">
			{/* Cinematic Background Grain - Optional, for texture */}
			<div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

			<div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

				{/* 1. Cinematic Text Block (Left/Top) */}
				<div className="md:col-span-12 lg:col-span-7 relative z-10 flex flex-col justify-center">
					<div className="relative mb-12 lg:mb-24">
						<span className="block font-mono text-xs md:text-sm text-zinc-500 uppercase tracking-[0.3em] mb-4">
							[ Introduction ]
						</span>
						<h2 className="font-syne font-bold text-6xl md:text-8xl lg:text-[9rem] uppercase leading-[0.85] text-white tracking-tight mix-blend-difference">
							Beyond <br />
							<span className="text-zinc-700">The Frame</span>
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:pl-24">
						<div className="space-y-8">
							<p className="font-light text-zinc-300 text-lg md:text-xl leading-relaxed">
								I am Ozan Özdemir, a tailored 1st Assistant Camera based in Ankara. With years of experience on feature
								films, commercials, and high-end music videos, I bring
								precision, technical reliability, and a calm demeanor to every
								set.
							</p>
							<p className="font-light text-zinc-400 text-lg leading-relaxed">
								My job is to ensure technical perfection so the DP can focus on
								the art. From intricate Steadicam moves to high-speed chases, I
								keep the image sharp.
							</p>
						</div>

						{/* Gear / Specs - Stylized as HUD/Credits */}
						<div className="relative border-l border-zinc-900 pl-8 md:pl-12 flex flex-col justify-between">
							<div>
								<h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6">
									Technical Arsenal
								</h3>
								<ul className="space-y-4 font-mono text-sm text-zinc-400">
									{(gear).map((item, i) => (
										<li key={i} className="flex items-center gap-3">
											<span className="w-1.5 h-1.5 bg-red-600 rounded-full opacity-60"></span>
											<span className="uppercase tracking-wide">{item}</span>
										</li>
									))}
								</ul>
							</div>

							<div className="mt-12 pt-8 border-t border-zinc-900/50">
								<div className="flex items-center gap-3 text-zinc-600 font-mono text-xs uppercase">
									<span>Loc: Ankara</span>
									<span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* 2. Visual Anchor (Right/Bottom) */}
				<div className="md:col-span-12 lg:col-span-5 relative mt-12 lg:mt-0">
					<div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out group">
						<Image
							src="/images/profile.webp"
							alt="Ozan Özdemir - On Set"
							fill
							className="object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-1000 ease-in-out"
							sizes="(max-width: 768px) 100vw, 40vw"
						/>

						{/* Overlay Gradient for integration */}
						<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>

						{/* Floating Caption */}
						<div className="absolute bottom-8 left-8 right-8">
							<div className="flex items-end justify-between border-b border-white/20 pb-4">
								<div className="text-right">
									<span className="block font-mono text-2xl text-white">01</span>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</section>
	);
}
