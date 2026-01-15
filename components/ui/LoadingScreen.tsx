"use client";

import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingScreenProps {
	isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
	return (
		<div
			className={cn(
				"fixed inset-0 z-100 flex flex-col items-center justify-center bg-black transition-opacity duration-1000 pointer-events-none",
				isLoading ? "opacity-100 pointer-events-auto" : "opacity-0",
			)}
		>
			<Loader2 className="w-10 h-10 text-white animate-spin mb-4" />
			<p className="text-white/50 text-sm tracking-wider uppercase">
				Loading Experience...
			</p>
		</div>
	);
}
