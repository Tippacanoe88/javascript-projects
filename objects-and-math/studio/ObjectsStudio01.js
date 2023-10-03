// Code your selectRandomEntry function here:


// Code your buildCrewArray function here:

let idNumbers = [291, 414, 503, 599, 796, 890];
let numAstronauts = 3;

const selectRandomEntry = function(arr) {
  let num = (Math.floor(Math.random() * arr.length));
  return arr.splice(num, 1)[0];
}

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
let selectedAstronauts = [];
if (numAstronauts > idNumbers.length) {
  console.log("Error: trying to select too many astronauts!");
} else {
  console.log(`The selected astronauts are: `);
  for(let i = 0; i < numAstronauts; i++) {
    let randomId = selectRandomEntry(idNumbers);
    let astronaut = animals.find(a => a.astronautID === randomId);
    if (astronaut) {
      let selectedAstronauts = [];
      selectedAstronauts.push(astronaut);
      console.log(`${astronaut.name}`);
    } 
  }
}
// Code your template literal and console.log statements:
