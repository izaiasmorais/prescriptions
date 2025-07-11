import { Medicine } from "@/@types/medicine";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender, Table } from "@tanstack/react-table";

interface MedicinesTableHeaderProps {
	table: Table<Medicine>;
	widths?: string[];
}

export function MedicinesTableHeader({
	table,
	widths = [
		"w-[50px]",
		"w-[200px]",
		"w-[200px]",
		"w-[100px]",
		"w-[100px]",
		"w-[100px]",
		"w-[100px]",
		"w-[100px]",
	],
}: MedicinesTableHeaderProps) {
	return (
		<TableHeader className="bg-muted">
			{table.getHeaderGroups().map((headerGroup) => (
				<TableRow key={headerGroup.id} className="border-none">
					{headerGroup.headers.map((header) => {
						return (
							<TableHead
								key={header.id}
								className={`h-5 ${widths[header.index] || "w-full"}`}
							>
								{header.isPlaceholder
									? null
									: flexRender(
											header.column.columnDef.header,
											header.getContext()
									  )}
							</TableHead>
						);
					})}
				</TableRow>
			))}
		</TableHeader>
	);
}
