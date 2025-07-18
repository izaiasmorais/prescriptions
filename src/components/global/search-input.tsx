import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchInputProps {
	placeholder?: string;
	className?: string;
	onClick?: () => void;
}

export function SearchInput({ placeholder, className, onClick }: SearchInputProps) {
	const style =
		"flex items-center gap-2 h-10 w-full max-w-[350px] rounded-md border border-input	bg-background px-3 py-2 text-sm	ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium	placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2	disabled:cursor-not-allowed	disabled:opacity-50";

	return (
		<div className={cn(style, className)} onClick={onClick}>
			<Search size={16} className="font-semibold cursor-pointer" color="gray" />
			<input
				placeholder={placeholder}
				className="outline-none flex-1 bg-transparent"
			/>
		</div>
	);
}
