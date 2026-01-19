console.log("Start");

// Using setTimeout (callback)
setTimeout(() => {
  console.log("This runs after 2 seconds (callback)");
}, 2000);

// Using Promise
const delay = (ms: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 2 seconds");
    }, ms);
  });
};

// Using async / await
async function runAsync() {
  console.log("Before await");
  const message = await delay(2000);
  console.log(message);
  console.log("After await");
}

runAsync();

console.log("End");
