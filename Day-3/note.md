# Day 3 – Objects & Interfaces in TypeScript

## What is an Object?
An object groups related data together.

Example:

const user = {
  name: "Kebron",
  age: 21,
  email: "kebron@example.com"
};


##Interface

An interface defines the structure of an object.

Example:

interface User {
  name: string;
  age: number;
  email: string;
}


This means every User object must have these properties.