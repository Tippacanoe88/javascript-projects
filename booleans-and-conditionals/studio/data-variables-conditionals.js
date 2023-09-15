// Initialize Variables below
let date = "03-18-2019";
let time = "10:05:34";
let astronautCount = 7;
let astronautStatus = true;
let avgAstronautMassKg = 80.7;
let crewMassKg = astronautCount * avgAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelcius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 100;
let weatherStatus = "clear";
let preparedForLiftoff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if(astronautCount <= 7) {
    console.log("Astronaut count is clear.");
} else {
    console.log("Astronaut count is incorrect, please re-evaluate")
}
// add logic below to verify all astronauts are ready
if(astronautStatus === true) {
    console.log("Astronauts are ready.");
} else {
    console.log("Astronauts are not ready.");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if(totalMassKg <= 850000) {
    console.log("Total mass is in the green.");
} else if (totalMassKg > 850000) {
    console.log("ALERT: Total Mass is too High for take off!");
} else {
    console.log("Evaluating Total Mass...");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if(fuelTempCelcius >= -300 && fuelTempCelcius <= -150) {
    console.log("Fuel temperature is within operational range.");
} else if(fuelTempCelcius < -300) {
    console.log("ALERT: Fuel Temp is too low!");
} else if(fuelTempCelcius > -150) {
    console.log("ALERT: Fuel temp is too high!"); 
} else {
    console.log("Evaluating current fuel temperature...");
}
// add lgic below to verify the fuel level is at 100%
if(fuelLevel === 100) {
    console.log("Fuel level is at 100%");
} else if (fuelLevel < 100 && fuelLevel > 90) {
    console.log("Fuel level is above 90%");
} else {
    console.log("ALERT: Fuel Level is low!");
}
// add logic below to verify the weather status is clear
if(weatherStatus === "clear") {
    console.log("The weather is clear!");
} else{
    console.log("The weather is not clear!");
}
// Verify shuttle launch can proceed based on above conditions
if(preparedForLiftoff ===) {
    console.log("Shuttle is cleared for take off.")
} else {
    console.log("Take off has been blocked, re evaluate pre flight check...");
}