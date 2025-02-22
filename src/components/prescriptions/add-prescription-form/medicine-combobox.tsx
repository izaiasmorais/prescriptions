"use client";
import { CreatePrescriptionFormData } from "@/hooks/use-create-prescription";
import { usePrescriptions } from "@/hooks/use-prescriptions";
import { UseFormReturn } from "react-hook-form";
import { Combobox } from "./combobox";

export function MedicineCombobox({
	form,
}: {
	form: UseFormReturn<CreatePrescriptionFormData>;
}) {
	const { medicines } = usePrescriptions();

	return (
		<Combobox
			form={form}
			options={medicines}
			entity="medicine"
			translatedEntity="Medicamento"
		/>
	);
}
