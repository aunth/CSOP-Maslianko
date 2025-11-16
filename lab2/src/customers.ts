import type { IdGeneratorFunction } from "./types.js";

export function createCustomer(
  name: string,
  age?: number,
  city?: string
): void {
  if (!name || name.trim().length === 0) {
    throw new Error("Name is required and cannot be empty");
  }

  if (age !== undefined && (age < 0 || age > 150)) {
    throw new Error("Age must be between 0 and 150");
  }

  console.log(`Customer name: ${name.trim()}`);

  if (age) {
    console.log(`Customer age: ${age}`);
  }

  if (city !== undefined && city.trim().length > 0) {
    console.log(`Customer city: ${city.trim()}`);
  }
}

export function createCustomerId(name: string, id: number): string {
  return `${name}${id}`;
}

export const createCustomerIdArrow: IdGeneratorFunction = (
  name: string,
  id: number
): string => {
  return `${name}${id}`;
};
