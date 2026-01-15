"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface LoadingScreenProps {
	isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
	const [counter, setCounter] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (counter < 100) {
			const timeout = setTimeout(() => {
				setCounter((prev) => {
					const next = prev + Math.floor(Math.random() * 25) + 1;
					return next > 100 ? 100 : next;
				});
			}, Math.random() * 200 + 50);

			return () => clearTimeout(timeout);
		}
	}, [counter]);

	const [isExited, setIsExited] = useState(false);

	useEffect(() => {
		if (!isLoading && containerRef.current) {
			const tl = gsap.timeline({
				onComplete: () => setIsExited(true),
			});

			tl.to(textRef.current, {
				y: -100,
				opacity: 0,
				duration: 0.8,
				ease: "power3.in",
			}).to(
				containerRef.current,
				{
					scaleY: 0,
					transformOrigin: "top",
					duration: 1,
					ease: "expo.inOut",
				},
				"-=0.4",
			);
		}
	}, [isLoading]);

	if (isExited) return null;

	return (
		<div
			ref={containerRef}
			className={cn(
				"fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#0a0a0a] pointer-events-none",
			)}
		>
			<div ref={textRef} className="flex flex-col items-center overflow-hidden">
				<h1 className="font-syne font-bold text-[15vw] md:text-[8vw] text-zinc-100 leading-none">
					{counter}%
				</h1>
				<p className="font-mono text-zinc-500 text-xs md:text-sm tracking-widest uppercase mt-4">
					Loading Experience
				</p>
			</div>
		</div>
	);
}
