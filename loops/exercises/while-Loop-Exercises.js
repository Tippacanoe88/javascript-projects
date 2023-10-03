//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

const input = require('readline-sync');

let maxAltitude; 58000;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

  let startingFuel = input.question("Please enter a positive number indicating current fuel level: ");
  startingFuel = Number(startingFuel);

  while(startingFuel < 5000) {
  startingFuel = input.question('Please enter a number higher than 5,000');
  startingFuel = Number(startingFuel);
  }
  while(startingFuel > 30000) {
    startingFuel = input.question("Please enter a number lower than 30,000");
    startingFuel = Number(startingFuel);
  }

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

let astronautCount = input.question("Please enter the total count of astronauts on board: ");
astronautCount = Number(astronautCount);

while(astronautCount < 7) {
  astronautCount = input.question("The count of astronauts is too low. Please enter a number no larger than 7: ");
  astronautCount = Number(astronautCount);
}
while(astronautCount > 7) {
  astronautCount = input.question("The count of astronauts is too high. Please enter a number no larger than 7: ");
}  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

let fuel = 30000;
let alt = 0;
let aCount = 7;
let total = 0; 

while((fuel > 5000) + (alt <= 0)) {
  console.log((Number(fuel -= 700)) + (Number(alt+=50)));
  fuel-700;
  alt+50;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
