//Part Two Section One

let dna = " CTG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";
let newString = dna.trim();
console.log(newString);
// First, print out the dna strand in it's current state.
console.log(newString);
//1) Use the .trim() method to remove the leading and trailing whitespace, then print the result.
console.log(newString);

//2) Change all of the letters in the dna string to UPPERCASE, then print the result.

console.log(newString.toUpperCase());

//3) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.
let dna = CTG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT;
dna = TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT
console.log(dna);

//Part Two Section Two

let dnaTwo = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//1) Replace the gene "GCT" with "AGG", and then print the altered strand.
let newString = (dna.replace(searchChar "GCT", replacementChar "AGG"));
console.log(newString);
//2) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".
let dnaTwo = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";
dnaTwo.indexOf("CAT");
if(dnaTwo.indexOf("CAT") === true) {
  console.log("CAT gene found");
}
//3) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
console.log(dnaTwo.slice(15-18));
//4) Use a template literal to print, "The DNA strand is ___ characters long."
console.log(`The DNA strand is ${dnaTwo.length} characters long`);
//5) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
console.log(dnaTwo.slice(3-7)`o`, dnaTwo.slice(40-44)`.`);