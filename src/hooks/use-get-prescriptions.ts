import { usePathname, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getPrescriptions } from "@/api/prescriptions/get-prescriptions";
import { useRouter } from "next/navigation";
import { z } from "zod";

export function useGetPrescriptions() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const id = searchParams.get("id");
	const medicalRecord = searchParams.get("medicalRecord");
	const patientName = searchParams.get("patientName");
	const medicine = searchParams.get("medicine");

	const pageIndex = z.coerce
		.number()
		.transform((page) => page)
		.parse(searchParams.get("page") ?? 0);

	const perPage = z.coerce
		.number()
		.transform((perPage) => perPage)
		.parse(searchParams.get("perPage") ?? 5);

	const { data: result, isLoading: isLoadingPrescriptions } = useQuery({
		queryKey: ["prescriptions", pageIndex, id, patientName, medicalRecord],
		queryFn: () =>
			getPrescriptions({
				pageIndex: pageIndex != 0 ? pageIndex - 1 : 0,
				perPage,
				medicalRecord,
				patientName,
				medicine,
			}),
		staleTime: 60 * 60 * 5, // 5 hours
		refetchOnMount: false,
		refetchOnWindowFocus: false,
	});

	function handlePaginate(pageIndex: number) {
		const state = new URLSearchParams(Array.from(searchParams.entries()));

		state.set("page", (pageIndex + 1).toString());

		const search = state.toString();
		const query = search ? `?${search}` : "";

		router.push(`${pathname}${query}`);
	}

	return {
		data: result ? result.data : null,
		isLoadingPrescriptions,
		handlePaginate,
	};
}
