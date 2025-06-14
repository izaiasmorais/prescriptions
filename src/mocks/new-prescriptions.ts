import { hospitalUnits } from "./hospital-units";
import { doses } from "./doses";
import { vias } from "./vias";
import { posologies } from "./posologies";
import { Prescription } from "@/@types/new-prescription";

export const prescriptions: Prescription[] = [
	{
		id: "550e8400-e29b-41d4-a716-446655440001",
		medicalRecord: "2024/000789",
		patientName: "Paciente 1",
		medicine: "Imipenem+Cilastina",
		unit: hospitalUnits[0].name,
		dose: doses[0].name,
		via: vias[0].name,
		posology: posologies[0].name,
		treatmentDays: ["2025-06-07T17:07:35.195Z", "2025-06-10T17:07:35.195Z"],
		createdAt: new Date("2024-01-15"),
		updatedAt: null,
	},
	{
		id: "550e8400-e29b-41d4-a716-446655440002",
		medicalRecord: "2024/000790",
		patientName: "Paciente 2",
		medicine: "Penicilina G Benzatina",
		unit: hospitalUnits[1].name,
		dose: doses[1].name,
		via: vias[1].name,
		posology: posologies[1].name,
		treatmentDays: [
			"2025-06-07T17:07:35.195Z",
			"2025-06-08T17:07:35.195Z",
			"2025-06-09T17:07:35.195Z",
		],
		createdAt: new Date("2024-01-16"),
		updatedAt: null,
	},
	{
		id: "550e8400-e29b-41d4-a716-446655440003",
		medicalRecord: "2024/000791",
		patientName: "Paciente 3",
		medicine: "Aciclovir",
		unit: hospitalUnits[2].name,
		dose: doses[2].name,
		via: vias[2].name,
		posology: posologies[2].name,
		treatmentDays: ["2025-06-08T17:07:35.195Z", "2025-06-11T17:07:35.195Z"],
		createdAt: new Date("2024-01-17"),
		updatedAt: null,
	},
	{
		id: "550e8400-e29b-41d4-a716-446655440004",
		medicalRecord: "2024/000792",
		patientName: "Paciente 4",
		medicine: "Albendazol",
		unit: hospitalUnits[3].name,
		dose: doses[3].name,
		via: vias[3].name,
		posology: posologies[3].name,
		treatmentDays: [
			"2025-06-09T17:07:35.195Z",
			"2025-06-12T17:07:35.195Z",
			"2025-06-15T17:07:35.195Z",
		],
		createdAt: new Date("2024-01-18"),
		updatedAt: null,
	},
	{
		id: "550e8400-e29b-41d4-a716-446655440005",
		medicalRecord: "2024/000793",
		patientName: "Paciente 5",
		medicine: "Amicacina",
		unit: hospitalUnits[4].name,
		dose: doses[4].name,
		via: vias[4].name,
		posology: posologies[4].name,
		treatmentDays: ["2025-06-10T17:07:35.195Z", "2025-06-13T17:07:35.195Z"],
		createdAt: new Date("2024-01-19"),
		updatedAt: null,
	},
	{
		id: "550e8400-e29b-41d4-a716-446655440006",
		medicalRecord: "2024/000794",
		patientName: "Paciente 6",
		medicine: "Amoxicilina",
		unit: hospitalUnits[5].name,
		dose: doses[5].name,
		via: vias[5].name,
		posology: posologies[5].name,
		treatmentDays: [
			"2025-06-11T17:07:35.195Z",
			"2025-06-14T17:07:35.195Z",
			"2025-06-17T17:07:35.195Z",
		],
		createdAt: new Date("2024-01-20"),
		updatedAt: null,
	},
	{
		id: "550e8400-e29b-41d4-a716-446655440007",
		medicalRecord: "2024/000795",
		patientName: "Paciente 7",
		medicine: "Amoxicilina+Clavulanato",
		unit: hospitalUnits[6].name,
		dose: doses[6].name,
		via: vias[6].name,
		posology: posologies[6].name,
		treatmentDays: ["2025-06-12T17:07:35.195Z", "2025-06-15T17:07:35.195Z"],
		createdAt: new Date("2024-01-21"),
		updatedAt: null,
	},
	{
		id: "550e8400-e29b-41d4-a716-446655440008",
		medicalRecord: "2024/000796",
		patientName: "Paciente 8",
		medicine: "Ampicilina",
		unit: hospitalUnits[7].name,
		dose: doses[7].name,
		via: vias[7].name,
		posology: posologies[7].name,
		treatmentDays: [
			"2025-06-13T17:07:35.195Z",
			"2025-06-16T17:07:35.195Z",
			"2025-06-19T17:07:35.195Z",
		],
		createdAt: new Date("2024-01-22"),
		updatedAt: null,
	},
	{
		id: "550e8400-e29b-41d4-a716-446655440009",
		medicalRecord: "2024/000797",
		patientName: "Paciente 9",
		medicine: "Ampicilina+Sulbactam",
		unit: hospitalUnits[8].name,
		dose: doses[8].name,
		via: vias[8].name,
		posology: posologies[8].name,
		treatmentDays: ["2025-06-14T17:07:35.195Z", "2025-06-17T17:07:35.195Z"],
		createdAt: new Date("2024-01-23"),
		updatedAt: null,
	},
	{
		id: "550e8400-e29b-41d4-a716-446655440010",
		medicalRecord: "2024/000798",
		patientName: "Paciente 10",
		medicine: "Anfotericina B",
		unit: hospitalUnits[9].name,
		dose: doses[9].name,
		via: vias[9].name,
		posology: posologies[9].name,
		treatmentDays: [
			"2025-06-15T17:07:35.195Z",
			"2025-06-18T17:07:35.195Z",
			"2025-06-21T17:07:35.195Z",
		],
		createdAt: new Date("2024-01-24"),
		updatedAt: null,
	},
	{
		id: "550e8400-e29b-41d4-a716-446655440011",
		medicalRecord: "2024/000799",
		patientName: "Paciente 11",
		medicine: "Anidulafungina",
		unit: hospitalUnits[10].name,
		dose: doses[0].name,
		via: vias[0].name,
		posology: posologies[0].name,
		treatmentDays: ["2025-06-16T17:07:35.195Z", "2025-06-19T17:07:35.195Z"],
		createdAt: new Date("2024-01-25"),
		updatedAt: null,
	},
	{
		id: "550e8400-e29b-41d4-a716-446655440012",
		medicalRecord: "2024/000800",
		patientName: "Paciente 12",
		medicine: "Cefalotina",
		unit: hospitalUnits[11].name,
		dose: doses[1].name,
		via: vias[1].name,
		posology: posologies[1].name,
		treatmentDays: [
			"2025-06-17T17:07:35.195Z",
			"2025-06-20T17:07:35.195Z",
			"2025-06-23T17:07:35.195Z",
		],
		createdAt: new Date("2024-01-26"),
		updatedAt: null,
	},
	{
		id: "550e8400-e29b-41d4-a716-446655440013",
		medicalRecord: "2024/000801",
		patientName: "Paciente 13",
		medicine: "Cefazolina",
		unit: hospitalUnits[12].name,
		dose: doses[2].name,
		via: vias[2].name,
		posology: posologies[2].name,
		treatmentDays: ["2025-06-18T17:07:35.195Z", "2025-06-21T17:07:35.195Z"],
		createdAt: new Date("2024-01-27"),
		updatedAt: null,
	},
	{
		id: "550e8400-e29b-41d4-a716-446655440014",
		medicalRecord: "2024/000802",
		patientName: "Paciente 14",
		medicine: "Cefepime",
		unit: hospitalUnits[13].name,
		dose: doses[3].name,
		via: vias[3].name,
		posology: posologies[3].name,
		treatmentDays: [
			"2025-06-19T17:07:35.195Z",
			"2025-06-22T17:07:35.195Z",
			"2025-06-25T17:07:35.195Z",
		],
		createdAt: new Date("2024-01-28"),
		updatedAt: null,
	},
	{
		id: "550e8400-e29b-41d4-a716-446655440015",
		medicalRecord: "2024/000803",
		patientName: "Paciente 15",
		medicine: "Cefoxitina",
		unit: hospitalUnits[14].name,
		dose: doses[4].name,
		via: vias[4].name,
		posology: posologies[4].name,
		treatmentDays: ["2025-06-20T17:07:35.195Z", "2025-06-23T17:07:35.195Z"],
		createdAt: new Date("2024-01-29"),
		updatedAt: null,
	},
	{
		id: "550e8400-e29b-41d4-a716-446655440016",
		medicalRecord: "2024/000804",
		patientName: "Paciente 16",
		medicine: "Ceftazidima",
		unit: hospitalUnits[15].name,
		dose: doses[5].name,
		via: vias[5].name,
		posology: posologies[5].name,
		treatmentDays: [
			"2025-06-21T17:07:35.195Z",
			"2025-06-24T17:07:35.195Z",
			"2025-06-26T17:07:35.195Z",
		],
		createdAt: new Date("2024-01-30"),
		updatedAt: null,
	},
	{
		id: "550e8400-e29b-41d4-a716-446655440017",
		medicalRecord: "2024/000805",
		patientName: "Paciente 17",
		medicine: "Ceftriaxona",
		unit: hospitalUnits[16].name,
		dose: doses[6].name,
		via: vias[6].name,
		posology: posologies[6].name,
		treatmentDays: ["2025-06-22T17:07:35.195Z", "2025-06-25T17:07:35.195Z"],
		createdAt: new Date("2024-01-31"),
		updatedAt: null,
	},
	{
		id: "550e8400-e29b-41d4-a716-446655440018",
		medicalRecord: "2024/000806",
		patientName: "Paciente 18",
		medicine: "Cefuroxima",
		unit: hospitalUnits[17].name,
		dose: doses[7].name,
		via: vias[7].name,
		posology: posologies[7].name,
		treatmentDays: ["2025-06-23T17:07:35.195Z", "2025-06-26T17:07:35.195Z"],
		createdAt: new Date("2024-02-01"),
		updatedAt: null,
	},
	{
		id: "550e8400-e29b-41d4-a716-446655440019",
		medicalRecord: "2024/000807",
		patientName: "Paciente 19",
		medicine: "Ciprofloxacino",
		unit: hospitalUnits[18].name,
		dose: doses[8].name,
		via: vias[8].name,
		posology: posologies[8].name,
		treatmentDays: ["2025-06-24T17:07:35.195Z", "2025-06-26T17:07:35.195Z"],
		createdAt: new Date("2024-02-02"),
		updatedAt: null,
	},
	{
		id: "550e8400-e29b-41d4-a716-446655440020",
		medicalRecord: "2024/000808",
		patientName: "Paciente 20",
		medicine: "Claritromicina",
		unit: hospitalUnits[19].name,
		dose: doses[9].name,
		via: vias[9].name,
		posology: posologies[9].name,
		treatmentDays: ["2025-06-25T17:07:35.195Z", "2025-06-26T17:07:35.195Z"],
		createdAt: new Date("2024-02-03"),
		updatedAt: null,
	},
];
