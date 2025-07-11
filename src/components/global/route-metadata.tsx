"use client";
import { usePathname } from "next/navigation";
import { getRouteMetadata, type RouteMetadata } from "@/mocks/routes";

export function RouteMetadata() {
	const pathname = usePathname();
	
	const { title, description } = getRouteMetadata(pathname);

	return (
		<div className="flex flex-col mb-4">
			<h1 className="text-2xl font-semibold">{title}</h1>
			<span className="text-sm text-muted-foreground">{description}</span>
		</div>
	);
}
