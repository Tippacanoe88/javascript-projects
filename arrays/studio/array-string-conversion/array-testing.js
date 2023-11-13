let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//2) 
function reverseCommas() {
	//TODO: 1. create and instantiate your variables.
	let check = true;
	let output = "";
	//TODO: 2. write the code required for this step
	for(leti = 0; i < strings.length; i++) {
		if (strings[i].includes(',')) {
			output += strings[i].split(',').reverse().join(',') + '\n';
		} else {
			output += 'No commas found\n';
			check = false;
		}
	}
	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return check ? output.trim() : output;
}

//3)
function semiDash() {
	let check = true;
	let output = "";
//TODO: write the code required for this step
	for(leti = 0; i < strings.length; i++) {
		if (strings[i].includes(';')) {
			output += strings[i].split(';').join('-') + '\n';
		} else {
			output += 'No semicolons found\n';
			check = false;
		}
	}
	
		return check ? output.trim() : output;
}

//4)
function reverseSpaces() {
	let check = true; 
	let output= "";
  //TODO: write the code required for this step
	for(let i = 0; i < strings.length; i++) {
		if (strings[i].includes(' ')) {
			output += strings[i].split(' ').reverse().join(' ') + '\n';
		} else {
			output += 'No spaces found\n';
			check = false;
		}
	}
	return check ? output.trim(): output;
}

//5)
function commaSpace() {
	let check = true;
	let output = "";
	//TODO: write the code required for this step
	for(let i = 0; i < strings.length; i++) {
		if (strings[i].includes(", ")) {
			output += strings[i].split(', ').join('\t') + '\n';
		} else {
			output += 'No comma-space pairs found\n';
			check = false;
		}
	}
	return check ? output.trim() : output;
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
