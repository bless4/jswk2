//1 hello world to different languages

console.log("Halo, dunia!"); //indonesia
console.log("Ciao mondo!");  // Italian
console.log("Hola, mundo!"); // Spanish

//2
console.log("I'am awesome");
//3
var x;
console.log('the value of my variable x will be: undefined');
console.log(x);
var x = 8;
console.log("the value of x will be: 8");
console.log(x);
//4
var y = "greetings";
console.log("the value of the string will be: greetings");
console.log(y);

//5
var x=7.25;
Math.round(x);

var z =7.25;
a = Math.round(z);
console.log(a);
if (z > a) text ="z is a higher number";
else (z < a) text =" a is a higher number";



//6 Arrays

let animals = [];
console.log(" the value of the array will be an empty:  []");
console.log(animals);

let myAnimals = ["Elephant", "Goat", "Pig", "Sheep"];
console.log(myAnimals);
myAnimals.push("baby pig");
console.log(myAnimals);


//7 More strings

let myString = "this is a test";
console.log(myString);
let n = myString.Length;
console.log(myString.Length); //14

let value1 =8;
let value2 =20;
function isNumber (value1 ) {
    return typeof value1 === 'number' && isFinite(value1);
}
