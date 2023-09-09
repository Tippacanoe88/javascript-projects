// Declare and assign the variables below
let spaceShuttle = 'Determination';
let shuttleSpeed = 17500; 
let marsDistance = 225000000;
let moonDistance = 384400
let milesPerKilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttle);
console.log(typeof Number(shuttleSpeed));
console.log(typeof Number(marsDistance));
console.log(typeof Number(moonDistance));
console.log(typeof Number(milesPerKilometer));

// Calculate a space mission below
let milesToMars = marsDistance * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeed;
let daysToMars = hoursToMars / 24; 

// Print the results of the space mission calculations below
console.log(spaceShuttle, "will take", daysToMars, "days to get to Mars.");

// Calculate a trip to the moon below
let milesToMoon = moonDistance * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeed;
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below
console.log(spaceShuttle, "will take", daysToMoon, "days to reach the Moon.");