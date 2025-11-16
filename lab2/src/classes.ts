// 2.4. Інтерфейси для типів класів
import type { Librarian } from "./types.js";

export class UniversityLibrarian implements Librarian {
  name: string;
  email: string;
  department: string;

  constructor(name: string, email: string, department: string) {
    this.name = name;
    this.email = email;
    this.department = department;
  }

  assistCustomer(custName: string): void {
    console.log(`${this.name} is assisting ${custName}`);
  }
}

// 2.5. Створення та використання класів
// export class ReferenceItem {
//   // year: number;
//   // title: string;

//   // constructor(title: string, year: number) {
//   //   this.title = title;
//   //   this.year = year;
//   // }

//   private _publisher: string;
//   static department: string = "Default Department";

//   constructor(public title: string, protected year: number) {
//     this.title = title;
//     this.year = year;
//     this._publisher = "Default Publisher";
//   }

//   get publisher(): string {
//     return this._publisher.toUpperCase();
//   }

//   set publisher(newPublisher: string) {
//     this._publisher = newPublisher;
//   }

//   printItem(): void {
//     console.log(`${this.title} was published in ${this.year}`);
//     console.log(`Department: ${ReferenceItem.department}`);
//   }
// }

export abstract class ReferenceItem {
  static department: string = "Default Department";
  constructor(public title: string, protected year: number) {
    console.log("Creating a new ReferenceItem ...");
  }

  printItem(): void {
    console.log(`${this.title} was published in ${this.year}`);
    console.log(`Department: ${ReferenceItem.department}`);
  }

  abstract printCitation(): void;
}

// 2.6. Розширення класів
export class Encyclopedia extends ReferenceItem {
  constructor(title: string, year: number, public edition: number) {
    super(title, year);
  }

  printItem(): void {
    super.printItem();
    console.log(`Edition: ${this.edition} (${this.year})`);
  }

  printCitation(): void {
    console.log(`${this.title} - ${this.year}`);
  }
}
