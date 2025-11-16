import { Category } from './types.js';
import type { Worker, WorkerFilterFunction } from './types.js';

export function getAllWorkers(): Worker[] {
	return [
		{
			id: 1,
			name: "John",
			surName: "Doe",
			available: true,
			salary: 1000,
			category: Category.BussinessAnalyst,
		},
		{
			id: 2,
			name: "Jane",
			surName: "Dohh",
			available: false,
			salary: 2000,
			category: Category.Developer,
		},
		{
			id: 3,
			name: "Jim",
			surName: "Beam",
			available: true,
			salary: 3000,
			category: Category.Designer,
		},
		{
			id: 4,
			name: "Jill",
			surName: "Doe",
			available: true,
			salary: 4000,
			category: Category.QA,
		},
		{
			id: 5,
			name: "Jack",
			surName: "Doe",
			available: true,
			salary: 5000,
			category: Category.ScrumMaster,
		},
		{
			id: 6,
			name: "Jill",
			surName: "Doe",
			available: true,
			salary: 6000,
			category: Category.Developer,
		},
	];
}

export function logFirstAvailable(fn: WorkerFilterFunction = getAllWorkers): void {
	const workers = fn();

	console.log(`Кількість робітників: ${workers.length}`);

	let firstAvailable: Worker | null = null;
	for (const worker of workers) {
		if (worker.available) {
			firstAvailable = worker;
			break;
		}
	}

	if (firstAvailable) {
		console.log(`Перший доступний робітник: ${firstAvailable.name} ${firstAvailable.surName}`);
	} else {
		console.log(`Доступних робітників не знайдено`);
	}
}

export function getWorkersSurnamesByCategory(category: Category = Category.Designer): Array<string> {
	return getAllWorkers().filter((worker) => worker.category === category).map((worker) => worker.surName);
}

export function logWorkersName(names: string[]): void {
	for (let name of names) {
		console.log(name);
	}
}

export function logInitials(fn: WorkerFilterFunction = getAllWorkers): void {
	const workers = fn();
	workers.forEach(worker => {
		if (worker.category == Category.Developer) {
			console.log(`${worker.name}. ${worker.surName}.`);
		}
	});
}

export function getWorkerById(id: number): Worker | null {
	if (!Number.isInteger(id) || id <= 0) {
		console.warn(`Invalid worker ID: ${id}. ID must be a positive integer.`);
		return null;
	}

	const workers: Worker[] = getAllWorkers();
	const worker: Worker | undefined = workers.find(worker => worker.id === id);
	return worker || null;
}

export function checkoutWorkers(customer: string, ...workerIDs: number[]): string[] {
	if (!customer || customer.trim().length === 0) {
		throw new Error("Customer name is required");
	}

	console.log(`Customer: ${customer.trim()}`);

	const availableWorkers: string[] = [];

	for (const id of workerIDs) {
		const worker: Worker | null = getWorkerById(id);
		if (worker && worker.available) {
			availableWorkers.push(`${worker.name} ${worker.surName}`);
		} else if (worker && !worker.available) {
			console.log(`Worker ${worker.name} ${worker.surName} (ID: ${id}) is not available`);
		}
	}

	return availableWorkers;
}
