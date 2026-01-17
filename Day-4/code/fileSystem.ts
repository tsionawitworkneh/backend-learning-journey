import * as fs from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "data.txt");

// Write to a file
fs.writeFileSync(filePath, "Hello from Day 5 backend learning");

// Read from the file
const content = fs.readFileSync(filePath, "utf-8");

console.log("File content:", content);
