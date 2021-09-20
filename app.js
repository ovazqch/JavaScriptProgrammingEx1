/*
JavaScript Programming Exercise 1
Oscar Vazquez
ITPA 2021
*/

let myFirstIntegerVariable = 4;
let myFirstFloatVariable = 9.9;
let myFirstBooleanVariable = true;
let myFristName = "Oscar";
let myNullVariable = null;
let myUndefinedVariable;

//This is a line comment

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("       Lets work with variables        ");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log(myFirstIntegerVariable);
console.log(myFirstFloatVariable);
console.log(myFirstBooleanVariable);
console.log(myFristName);
console.log(myNullVariable);
console.log(myUndefinedVariable);

//Reassigning Variables
let mySecondInteger = 3;
mySecondInteger = 5; // reassign
console.log(mySecondInteger);

console.log("Addition");
let myAddition = myFirstIntegerVariable + mySecondInteger;
console.log(myAddition);
console.log("~~~~~~~~~");

console.log("Subtraction");
let mySubtraction = mySecondInteger - myFirstIntegerVariable;
console.log(mySubtraction);
console.log("~~~~~~~~~");

console.log("Multiplication")
let myMultiplication = myFirstIntegerVariable * mySecondInteger;
console.log(myMultiplication);
console.log("~~~~~~~~~~~~~");

console.log("Division");
let myDivision = myMultiplication/2;
console.log(myDivision);
console.log("~~~~~~~~~~~~~");

console.log("Integer + Float");
let floatAddition = myFirstFloatVariable + myFirstIntegerVariable;
console.log(floatAddition);
console.log("~~~~~~~~~~~~~");

console.log("Integer - Float");
let floatSubtraction = myFirstFloatVariable - myFirstIntegerVariable;
console.log(floatSubtraction);
console.log("~~~~~~~~~~~~~");

console.log("Integer / Integer = Float");
//Dividing integers implicitly coverts to float.
let divideInts = myFirstIntegerVariable / mySecondInteger;
console.log(divideInts);
console.log("~~~~~~~~~~~~~");

console.log("Integer / Integer = Integer");
//Dividing whole number results in implicit integer;
let x = 4/2;
console.log(x);
console.log("~~~~~~~~~~~~~~");

console.log("Modulus 6 & 2");
//Calculates the remainder from a division
let modResult = 6 % 2;
console.log(modResult);
console.log("~~~~~~~~~~~~~~");

console.log("Modulus 13 & 4");
//Calculates the remainder from a division
modResult = 13 % 4;
console.log(modResult);
console.log("~~~~~~~~~~~~~~");

console.log("++ Starting at 3");
let a = 3;
a++;
console.log(a);
console.log("~~~~~~~~~~~~~~");

console.log("-- Starting at 7");
let b = 7;
b--;
//b--;
console.log(b);
console.log("~~~~~~~~~~~~~~");

console.log("Compound += with 3 & 5");
//Compound assginment operators
let myThirdInteger = 3;
myThirdInteger += mySecondInteger;
/*
    Equivalent to:
    myThirdInteger = myThirdInteger + mySecondInteger
*/
console.log(myThirdInteger);
console.log("~~~~~~~~~~~~~~");

console.log("Console -= with 7 & 5");
// Compound assignment operators
let myFourthInteger = 7;
myFourthInteger -= mySecondInteger;

console.log(myFourthInteger);
console.log("~~~~~~~~~~~~~~");