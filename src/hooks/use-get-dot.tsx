import { useFormMutation } from "./use-form-mutation";
import { useMutation } from "@tanstack/react-query";
import { createPrescription } from "@/api/prescriptions/create-prescriptions";
import { format } from "date-fns";
import { z } from "zod";
import { getDot } from "@/api/chart/get-dot";

export const getDotSchema = z.object({
	unit: z.string().min(1, "Selecione uma unidade"),
	timeInterval: z.object({
		from: z.date(),
		to: z.date(),
	}),
});

export function useGetdot() {
	const form = useFormMutation({
		schema: getDotSchema,
		defaultValues: {
			unit: "",
			timeInterval: {
				from: new Date(),
				to: new Date(),
			},
		},
		onSubmit: (data) => {
			console.log({
				unit: data.unit,
				initialDate: format(data.timeInterval.from, "dd/MM/yyyy"),
				finalDate: format(data.timeInterval.to, "dd/MM/yyyy"),
			});
		},
	});

	const { mutate: getDotFn, isLoading: isLoadingGetDot } = useMutation({
		mutationFn: getDot,
		mutationKey: ["get-dot"],
		onSuccess: () => {},
	});

	return {
		form,
		isLoadingGetDot,
		getDotFn,
	};
}
