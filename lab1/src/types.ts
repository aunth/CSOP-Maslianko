export interface Worker {
	id: number;
	name: string;
	surName: string;
	available: boolean;
	salary: number;
	category: Category;
}

export enum Category {
	BussinessAnalyst,
	Developer,
	Designer,
	QA,
	ScrumMaster,
}

export type CustomerData = {
	name: string;
	age?: number;
	city?: string;
};

export type WorkerFilterFunction = () => Worker[];

export type IdGeneratorFunction = (name: string, id: number) => string;
