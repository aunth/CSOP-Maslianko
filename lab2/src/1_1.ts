import type { PrizeLogger, Author, Librarian } from "./types.js";
import { getAllWorkers, getWorkerByID, PrintWorker } from "./workers.js";
import { UniversityLibrarian, Encyclopedia, ReferenceItem } from "./classes.js";
import { printSectionHeader } from "./utils.js";

// 2.1. Визначення інтерфейсу
printSectionHeader("2.1 Визначення інтерфейсу Worker");
const workers = getAllWorkers();
console.log("All workers:", workers);

const worker1 = getWorkerByID(1);
if (worker1) {
  console.log("Worker found:", worker1);
  PrintWorker(worker1);
} else {
  console.log("Worker not found");
}

// 2.2. Визначення інтерфейсів для типів функцій
printSectionHeader("2.2 Інтерфейси для типів функцій");
const logPrize: PrizeLogger = (arg: string): void => {
  console.log(arg);
};
logPrize("Congratulations! You won a prize!");

// 2.3. Розширення інтерфейсів
printSectionHeader("2.3 Розширення інтерфейсів");
const favoriteAuthor: Author = {
  name: "John Doe",
  email: "john.doe@example.com",
  numBooksPublished: 10,
};
console.log("Favorite Author:", favoriteAuthor);

// const favoriteLibrarian: Librarian = {
//   name: "Jane Smith",
//   email: "jane.smith@example.com",
//   department: "Science",
//   assistCustomer: (custName: string) => {
//     console.log(`Jane Smith is assisting ${custName}`);
//   },
// };

// 2.4. Інтерфейси для типів класів
printSectionHeader("2.4 Інтерфейси для типів класів");
const favoriteLibrarian: Librarian = new UniversityLibrarian(
  "Jane Smith",
  "jane.smith@example.com",
  "Science"
);
console.log(`Librarian name: ${favoriteLibrarian.name}`);
favoriteLibrarian.assistCustomer("Alice");

// 2.5. Створення та використання класів
// printSectionHeader("2.5 Створення та використання класів");
// const ref = new ReferenceItem("TypeScript Guide", 2023);
// ref.printItem();

// 2.6. Розширення класів
printSectionHeader("2.6 Розширення класів");
const refBook = new Encyclopedia("TypeScript Encyclopedia", 2023, 5);
refBook.printItem();
