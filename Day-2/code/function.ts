function multiply(a: number, b: number): number {
  return a * b;
}

function isAdult(age: number): boolean {
  return age >= 18;
}

function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

console.log("Multiply 5 x 3 =", multiply(5, 3));
console.log("Is 20 adult?", isAdult(20));
console.log("Full Name:", getFullName("Kebron", "Tsita"));
