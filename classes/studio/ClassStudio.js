//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    //Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
//Selecting a random amount of total scores to limit the array within the objects, I 
//the push method to add new scores when the function is called to the selected arrays.
    addScore(newScore) {
        if (this.scores.length < 5) {
            this.scores.push(newScore)
        }
    }
/*Using a funtion to present the total of the arrays within the objects, then take their 
averages by division of the total scores. */
    average() {
        if (this.scores.length === 0) {
            return 0;
        }
        const sum = this.scores.reduce((acc, score) => acc + score, 0);
        return sum / this.scores.length;
    }
/*Creating a function to determine status of each candidate using booleans to compare the
avg scores to the passing grades then returning the result for each average grade. */

    candidateStatus(CrewCandidate) {
        const avgScore = this.average();
        if (avgScore >= 90) {
            return "Accepted";
        } else if (avgScore >= 80) {
            return "Reserve";
        } else {
            return "Rejected";
        }
    }
}
/*Establishing the candidate details through object decleration */

let candidateOne = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
console.log(candidateOne);
console.log("Bubba Bear's status: " + candidateOne.candidateStatus());


let candidateTwo = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
console.log(candidateTwo);
console.log("Merry Maltese's status: " + candidateTwo.candidateStatus());

let candidateThree = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);
console.log(candidateThree);
console.log("Glad Gator's status: " + candidateThree.candidateStatus());

/*Calling the addscore function to include the new score for glad gator */

candidateThree.addScore(83);
console.log(candidateThree.scores);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.