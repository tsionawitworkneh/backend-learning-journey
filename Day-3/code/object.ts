interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const user1: User = {
  id: 1,
  name: "Kebron",
  email: "kebron@example.com",
  isActive: true
};

const user2: User = {
  id: 2,
  name: "Abel",
  email: "abel@example.com",
  isActive: false
};

function printUser(user: User): void {
  console.log("User Info:");
  console.log("ID:", user.id);
  console.log("Name:", user.name);
  console.log("Email:", user.email);
  console.log("Active:", user.isActive);
  console.log("-------------------");
}

printUser(user1);
printUser(user2);
