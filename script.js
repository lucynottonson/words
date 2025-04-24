const optionsOne = ["instances of", " ", "objects of", "balcony of", "violence of", "Us,", "Around us,", "Violent balcony of", "Unpredictable objects of", "Violent instances of", "Unpredictable instances of", "Balcony violence of", "Balcony objects of", "Scratched objects of", "restrained objects of", "restrained around", "Unpredictable restraint of", "Restrained instances of"];
    let partOne = "instances of";
const optionsTwo = ["violent", "unpredictable", "restrained", "scratched", "around", "distressed", " "];
    let partTwo = "violent";
const optionsTwoTwo = ["violent", "unpredictable", "restrained", "scratched", "around", "distressed", " ", " "," ", " "," ", " ", " ", " "," ", " "," ", " "];
    let partTwoTwo = "violent"
const optionsThree = ["violence", "objects", "balcony", "restraint", "scratches", "distress", "instances", " "];
    let partThree = "balcony"
const optionsFour = ["around us", " "];
let partFour = "around us";

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function generateSentence() {
    const partOne = getRandom(optionsOne);
    const partTwo = getRandom(optionsTwo);
    const partThree = getRandom(optionsThree);
    const partFour = getRandom(optionsFour);
  
    const sentence = `${partOne} ${partTwo}  ${partThree} ${partFour}.`;
    document.getElementById("output").textContent = sentence;
  }
  