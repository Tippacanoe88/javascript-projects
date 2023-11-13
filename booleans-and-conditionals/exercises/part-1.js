let engineIndicatorLight = "red blinking red";
let spaceSuitsOn = true;
let shuttleCockpitReady= true;
let crewStatus = "the crew is ready";
let computerStatusCode = 200;
let shuttleSpeed = 15000;
let fuelLevel = 20000;
let engineTemperature = 2500;
let commandOverride = false;

if (engineIndicatorLight === "green") {
    console.log("engines have started");
 } else if (engineIndicatorLight === "green blinking") {
    console.log("engines are preparing to start");
 } else {
    console.log("engines are off");
 }

 if (crewStatus === "the crew is ready") {
    console.log("The Crew is Ready.");
 } else {
    console.log("The Crew is not Ready.");
 }

 if (computerStatusCode === 200) {
    console.log("Please standby, the computer needs to reboot.");
 } else if (computerStatusCode === 400) {
    console.log("Reboot successful. The computer is online.");
 } else {
    ("ALERT: Computer offline!");
}

if (Number(shuttleSpeed) > 17500) {
    console.log("ALERT: Escape Velocity reached!");
} else if (Number(shuttleSpeed) < 8000) {
    console.log("ALERT: Cannot Maintain Orbit!");
} else {
    console.log("Stable cruising speed.");
}

if (Number(fuelLevel) > 20000 && engineTemperature <= 2500) {
    console.log("Fuel Level is green and engine temperatures are normal.");
} else if (Number(fuelLevel) > 10000 && engineTemperature <= 2500) {
    console.log("Fuel is above 50% and engine temperatures are normal.");
} else if (Number(fuelLevel) > 5000 && engineTemperature <= 2500) {
    console.log("Fuel is above 25% and engine temperatures are normal.");
} else if (Number(fuelLevel) < 1000 || engineTemperature > 2500 || engineIndicatorLight === "red Blinking") {
    console.log("ALERT: ENGINE FAILURE IMMINENT!");
} else {
    console.log("Fuel and engine status pending...");
}
if (commandOverride === false) {
    console.log("Launch will commence when fuel and engine checks are complete");
} else {
    console.log("Override complete, commencing launch in 10...9...8...");
}

if (Number(fuelLevel) > 20000 && !engineIndicatorLight || !commandOverride) {
    console.log("Cleared to launch!");
} else {
    console.log("Launch Scrubbed!");
}

        

 