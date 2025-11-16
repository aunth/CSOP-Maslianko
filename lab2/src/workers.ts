import type { Worker, WorkerFilterFunction } from "./types.js";

// 2.1. Визначення інтерфейсу
export function getAllWorkers(): Worker[] {
  return [
    {
      id: 1,
      name: "John",
      surname: "Doe",
      available: true,
      salary: 1000,
    },
    {
      id: 2,
      name: "Jane",
      surname: "Dohh",
      available: false,
      salary: 2000,
    },
    {
      id: 3,
      name: "Jim",
      surname: "Beam",
      available: true,
      salary: 3000,
    },
    {
      id: 4,
      name: "Jill",
      surname: "Doe",
      available: true,
      salary: 4000,
    },
    {
      id: 5,
      name: "Jack",
      surname: "Doe",
      available: true,
      salary: 5000,
    },
    {
      id: 6,
      name: "Jill",
      surname: "Doe",
      available: true,
      salary: 6000,
    },
  ];
}

export function logFirstAvailable(
  fn: WorkerFilterFunction = getAllWorkers
): void {
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
    console.log(
      `Перший доступний робітник: ${firstAvailable.name} ${firstAvailable.surname}`
    );
  } else {
    console.log(`Доступних робітників не знайдено`);
  }
}

export function getWorkerByID(id: number): Worker | undefined {
  const workers: Worker[] = getAllWorkers();
  return workers.find((worker) => worker.id === id);
}

export function PrintWorker(worker: Worker): void {
  console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`);
}
