// 2.1. Визначення інтерфейсу Worker
export interface Worker {
  id: number;
  name: string;
  surname: string;
  available: boolean;
  salary: number;
  markPrize?: PrizeLogger;
}

// 2.2. Інтерфейси для типів функцій
export interface PrizeLogger {
  (arg: string): void;
}

// 2.3. Розширення інтерфейсів
export interface Person {
  name: string;
  email: string;
}

export interface Author extends Person {
  numBooksPublished: number;
}

export interface Librarian extends Person {
  department: string;
  assistCustomer: (custName: string) => void;
}
export type CustomerData = {
  name: string;
  age?: number;
  city?: string;
};

export type WorkerFilterFunction = () => Worker[];

export type IdGeneratorFunction = (name: string, id: number) => string;
