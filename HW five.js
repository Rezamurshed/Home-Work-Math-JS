// Write a function called addNumbers that takes two numbers as parameters and returns their sum.

console.log ("Answer the Q 1")
 
function addNumbers(p1, p2) {
    console.log(p1 + p2);
}
addNumbers(20, 30);

// OR OR OR OR OR OR OR OR OR OR OR OR 

let total=0;
function addNumbers (num1, num2){
    total=num1+num2;
    return total; 
}
addNumbers(20,30);
console.log (total);



// Write a function called sumUpToN that takes a number n and returns the sum of all numbers from 1 to n. Use a loop.
console.log ("Answer the Q 2")
 

function sumUpToN(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
let result = sumUpToN(5);
console.log(result);

// Write a function called sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array
console.log("Answer the Q 3")

let n = [1, 2, 3, 4, 5];

function sumArray(n) {
  let sum = 0;

  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }
  return sum;
}

console.log(sumArray(n));


// Write a function called countEvenNumbers that takes an array of numbers as a parameter and returns the count of even numbers in the array.

console.log("Answer the Q 4")

let x = [1, 2, 3, 4, 5, 6, 7, 8 ];

function countEvenNumbers(x) {
  let results = 0;
  for (let i = 0; i <= x[i]; i++) {
    if (x[i] % 2 === 0) {
      results++;
    }
  }

  return console.log(results);
}

countEvenNumbers(x);


// Write a function called stringLength that takes a string as a parameter and returns the length of the string.
console.log("Answer the Q 5")

let st = [1, 2, 3, 4, 5, 6, 7, 8];
function stringLength(st) {
    return st.length; 
}
console.log(st.length);


