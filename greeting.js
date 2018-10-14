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
var highest;
if (a > z) {
    highest = a;
} else {
    highest = z;
}
console.log("The highest number is " + highest);



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

// 8 

var str = "Hello World"
var str2 = "OK"
var num = 10;
var check = true;
var arr = ["array"];
console.log("The value of str is: " + str + "\n" +
            "The value of num is: " + num + "\n" +
            "The value of check is: " + check +"\n" + 
            "The value of arr is: " + arr + "\n");

console.log("The type of str is string \n"+
            "The type of num is number \n"+
            "The type of check is boolean \n"+ 
            "The type of arr is object \n");

console.log("The type of str is "+ typeof(str) + "\n" +
            "The type of num is "+ typeof(num) + "\n" +
            "The type of check is "+ typeof(check) + "\n" +
            "The type of arr is "+ typeof(arr));



var types = [typeof(str), typeof(str2), typeof(num), typeof(check), typeof(arr)];
console.log(types);

for(i=0; i<types.length+1; i++){
    if (types[i] == typeof(str) ){
        console.log("The type of " + str + " is " + types[i])
        i++;
    } else{
        console.log("The type of " + str + " is not  " + types[i])   
    }
}

for(i=0; i<types.length+1; i++){
    if (types[i] == typeof(str2) ){
        console.log("The type of " + str2 + " is " + types[i])
        i++;
    } else{
        console.log("The type of " + str2 + " is not  " + types[i])   
    }
}

for(i=0; i<types.length+1; i++){
    if (types[i] == typeof(num) ){
        console.log("The type of " + num + " is " + types[i])
        i++;
    } else{
        console.log("The type of " + num + " is not  " + types[i])   
    }
}

for(i=0; i<types.length+1; i++){
    if (types[i] == typeof(check) ){
        console.log("The type of " + check + " is " + types[i])
        i++;
    } else{
        console.log("The type of " + check + " is not " + types[i])   
    }
}

for(i=0; i<types.length+1; i++){
    if (types[i] == typeof(arr) ){
        console.log("The type of " + arr + " is " + types[i])
        i++;
    } else{
        console.log("The type of " + arr + " is not  " + types[i])   
    }
}


// 9