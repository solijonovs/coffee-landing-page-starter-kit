// Import the readline module
const readline = require('readline');

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user a question (similar to prompt)
rl.question("What is your name? ", function(name) {
  console.log("Hello, " + name);  // Output like alert or console.log
  rl.close(); // Close the interface
});
