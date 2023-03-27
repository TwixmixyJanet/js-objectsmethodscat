const cat = {};

cat.name = "Dandy";
cat.nickname = "Demon";
cat.age = 14;
cat.isSleeping = false;
cat.favoriteToys = ["bird", "lizard", "toes"];
cat.pet = function () {
  return "attack!";
};

console.log(cat);
// name: "Dandy"
// nickname: "Demon"
// age: 14
// isSleeping: false
// favoriteToys: Array(3)
// 0: "bird"
// 1: "lizard"
// 2: "toes"
// pet: ƒ () {}
// <constructor>: "Function"
// name: "Function"

console.log(cat.nickname);
//dot notation
console.log(cat.favoriteToys[2]);
//dot notation
console.log(cat["name"]);
//bracket notation

const dog = {
  name: "Winona",
  nickname: "Lil Pork Chop",
  age: 2,
  isSleeping: true,
  favoriteToys: ["Anything squeaky", "Stick", "Rowan's nose", "Glow ball"],
  pet: function () {
    return "wart hog noises";
  }
};

console.log(dog);
// name: "Winona"
// nickname: "Lil Pork Chop"
// age: 2
// isSleeping: false
// favoriteToys: Array(4)
// 0: "Anything squeaky"
// 1: "Stick"
// 2: "Rowan's nose"
// 3: "Glow ball"
// pet: ƒ pet() {}
// <constructor>: "Function"

dog.isSleeping = false;
dog["color"] = "yellow";

console.log(dog);
// name: "Winona"
// nickname: "Lil Pork Chop"
// age: 2
// isSleeping: true
// favoriteToys: Array(4)
// pet: ƒ pet() {}
// color: "yellow"

dog.play = function () {
  this.isSleeping = false;
  return `${this.nickname} is awake and playing!`;
};
console.log(dog.play());
//Lil Pork Chop is awake and playing!
//this can also be placed immediately inside the object literal
//same as how "pet" is being used as a function

let paperclips = 10;
paperclips = paperclips + 2;
console.log(paperclips);

let safetyPins = 10;
safetyPins = safetyPins += 8;
console.log(safetyPins);
