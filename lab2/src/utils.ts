export function isValidString(str: string): boolean {
  return Boolean(str && str.trim().length > 0);
}

export function isValidAge(age: number): boolean {
  return age >= 0 && age <= 150;
}

export function isValidId(id: number): boolean {
  return Number.isInteger(id) && id > 0;
}

export function formatWorkerName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

export function printSectionHeader(title: string): void {
  console.log(`=== ${title} ===`);
}
