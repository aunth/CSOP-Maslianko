import { Category } from './types.js';
import type { IdGeneratorFunction } from './types.js';
import {
	getAllWorkers,
	logFirstAvailable,
	getWorkersSurnamesByCategory,
	logWorkersName,
	logInitials,
	checkoutWorkers
} from './workers.js';
import {
	createCustomer,
	createCustomerId,
	createCustomerIdArrow
} from './customers.js';
import { printSectionHeader } from './utils.js';

printSectionHeader("1.1 Basic Types");
console.log(getAllWorkers());
logFirstAvailable();

printSectionHeader("1.2 Enum and Filtering");
console.log(getWorkersSurnamesByCategory(Category.Developer));
logWorkersName(["John", "Jane", "Jim", "Jill", "Jack", "Jill"]);

printSectionHeader("1.3 Arrow Functions");
logInitials();

printSectionHeader("1.4 Function Types");
let myId = createCustomerId("Vlad Maslianko", 12);
console.log(myId);

let idGenerator: IdGeneratorFunction = createCustomerIdArrow;
console.log(idGenerator("Test User", 99));

idGenerator = createCustomerId;
console.log(idGenerator("Test User", 99));

printSectionHeader("1.5 Parameters");

printSectionHeader("Testing createCustomer");
createCustomer("Vlad");
createCustomer("Vlad", 25);
createCustomer("Vlad", 25, "Kyiv");

printSectionHeader("Testing getWorkersSurnamesByCategory without parameter");
console.log(getWorkersSurnamesByCategory());

printSectionHeader("Testing logFirstAvailable without parameter");
logFirstAvailable();

printSectionHeader("Testing checkoutWorkers");
const myWorkers: string[] = checkoutWorkers("Vlad Maslianko", 12, 1, 5, 3);

printSectionHeader("Available Workers");
myWorkers.forEach(worker => {
	console.log(worker);
});