"use client";

import Image from "next/image";
import { gear } from "@/lib/data";

export default function AboutSection() {
	return (
		<section className="relative min-h-screen w-full bg-zinc-950 px-6 py-24 md:px-20 lg:py-32">
			<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
				{/* Left: Sticky Profile */}
				<div className="relative h-[60vh] lg:h-[80vh] w-full lg:sticky lg:top-20">
					<div className="relative h-full w-full overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
						<Image
							src="/images/profile.jpeg"
							alt="Ozan Özdemir"
							fill
							className="object-cover"
						/>
					</div>
				</div>

				{/* Right: Bio & Gear */}
				<div className="flex flex-col justify-center">
					{/* Bio */}
					<div className="mb-20">
						<h2 className="font-syne font-bold text-6xl uppercase leading-none text-white mb-8">
							Behind <br /> <span className="text-zinc-600">The Lens</span>
						</h2>
						<div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed max-w-lg">
							<p>
								I am Ozan Özdemir, a tailored 1st Assistant Camera based in Ankara. With years of experience on feature
								films, commercials, and high-end music videos, I bring
								precision, technical reliability, and a calm demeanor to every
								set.
							</p>
							<p>
								My job is to ensure technical perfection so the DP can focus on
								the art. From intricate Steadicam moves to high-speed chases, I
								keep the image sharp.
							</p>
						</div>
					</div>

					{/* Gear List */}
					<div>
						<h3 className="font-syne font-bold text-3xl uppercase text-white mb-8 border-b border-zinc-800 pb-4 inline-block">
							Camera Systems
						</h3>
						<ul className="space-y-4">
							{/* Fallback if gear is empty/undefined */}
							{(gear).map(
								(item, i) => (
									<li
										key={i}
										className="flex items-center text-zinc-500 hover:text-white transition-colors duration-300 group"
									>
										<span className="h-px w-8 bg-zinc-800 mr-4 group-hover:bg-red-600 transition-colors"></span>
										<span className="text-xl uppercase tracking-wider">
											{item}
										</span>
									</li>
								),
							)}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
