let num = "1001";
let numDecimal = "1001.00"

//Returns 'undefined'.
console.log(typeof Number(num.length));

//Use type conversion to print the length (number of digits) of an integer.
console.log(num.length);
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let newNumDecimal = numDecimal.slice(4,5);
console.log(newNumDecimal.length);
//I am having trouble figuring this last one out. 


//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
