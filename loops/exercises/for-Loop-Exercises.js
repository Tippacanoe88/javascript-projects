/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

for(let i = 0; i < 21; i++) {
console.log(i);
}
for(let j = 3; j < 30; i++) {
  console.log((i) + 3);
}
for(let k = 12; k < -15; k--) {
  console.log((k) - 2);
}
for(l = 50; l > 19; i/ 3) {
  console.log((l));
}

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].*/

let language = "LaunchCode";
let digits = [1, 5, 'LC101', 'blue', 42];


/*Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

for( let n = 0; n < digits.length; n++) {
  console.log(digits[n]);
}

for(let m = 9; m > -1; m--) {
  console.log(name[m]);
}

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
 
  let numbers = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];

  for (let o = 105; -10 < numbers.length; o++) {
    console.log(numbers(o + 2))
  }
  for( let p = 13; -5 < numbers.length; p++) {
    console.log(numbers[p] + 3);
  }