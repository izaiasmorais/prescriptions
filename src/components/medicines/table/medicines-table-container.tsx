"use client";
import * as React from "react";
import {
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { medicinesTableColumns } from "./medicines-table-columns";
import { SearchInput } from "@/components/ui/search-input";
import { translateMedicinesTableKeys } from "@/utils/translate/translate-medicines-table-keys";
import { MedicinesTable } from "./medicines-table";
import { TablePagination } from "@/components/table/table-pagination";
import { TableHideColumnsDropDown } from "@/components/table/table-hide-columns-dropdown";
import { medicines } from "@/mocks/medicines";

export function MedicinesTableContainer() {
	const [sorting, setSorting] = React.useState<SortingState>([
		{
			id: "description",
			desc: false,
		},
	]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});

	const table = useReactTable({
		data: medicines,
		columns: medicinesTableColumns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	return (
		<div className="w-full space-y-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:flex items-center gap-4">
				<SearchInput
					className="w-full xl:w-[300px]"
					placeholder="Pesquisar tipos..."
					value={
						(table.getColumn("description")?.getFilterValue() as string) ?? ""
					}
					onChange={(event) =>
						table.getColumn("description")?.setFilterValue(event.target.value)
					}
				/>

				{table.getColumn("name")?.getIsFiltered() && (
					<Button
						variant="secondary"
						className="font-semibold"
						onClick={() => [table.resetSorting(), table.resetColumnFilters()]}
					>
						<X />
						Limpar Filtros
					</Button>
				)}

				<TableHideColumnsDropDown
					table={table}
					translateFunction={translateMedicinesTableKeys}
				/>

				<Button>
					<Plus />
					Adicionar Medicamento
				</Button>
			</div>

			<MedicinesTable
				table={table}
				isLoadingGetMedicines={false}
				data={medicines}
			/>

			<TablePagination table={table} />
		</div>
	);
}
