const makeChange = (c) => {
  let q = Math.floor(c / 25); // Get number of quarters
  c %= 25; // Get the remaining amount after quarters
  
  let d = Math.floor(c / 10); // Get number of dimes
  c %= 10; // Get the remaining amount after dimes
  
  let n = Math.floor(c / 5); // Get number of nickels
  c %= 5; // Get the remaining amount after nickels
  
  let p = c; // Remaining cents are pennies
  
  return { q, d, n, p };
};

// Do not change the code below
const c = parseInt(prompt("Enter c: "), 10);
alert(JSON.stringify(makeChange(c)));
