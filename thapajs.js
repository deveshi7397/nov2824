var cityName = "new york";
var a = "q";
console.log(a.repeat(4));
//dollar is allowed
// syntax error invalid something

//data types
/*
primitive: 7
  string
  number
  boolean
  udefined
  null
  bigint
  symbol
cxzv
object data types: 3
  an object
  array
  date
*/

//ReferenceError : --is not defined
const bigNum = 12731748701843333333333333333333333333333333333379401094912924180748174081;
console.log(typeof bigNum);

var myNum = 55;
console.log(typeof myNum); //number
var myString = "55";
console.log(typeof myString); //string
var isOkay = true;
console.log(typeof isOkay); //boolean
var myVariable;
console.log(typeof myVariable);

//

//
console.log(isNaN("vinod"));
console.log(parseInt("xyz"));

if (NaN == NaN) {
  console.log("both are equal");
} else {
  console.log("not equal");
}

// null vs undefined
var bM = null;
console.log(typeof bM);
document.write(typeof bM);

document.write("i am a dicso dancer");

const myString2 = "42";
const myNumber = parseInt(myString2);
console.log(myNumber);

console.log(parseInt("123"));
console.log(parseInt("123", 10));
console.log(parseInt(" 123"));
console.log(parseInt("077"));
console.log(parseFloat("077"));
console.log(parseInt("1.9"));
console.log(parseFloat("1.9"));
console.log(parseInt("&123"));
console.log(parseInt("-123"));
console.log(parseInt("xyz"));
console.log(isNaN("vinod"));
console.log(isNaN("5"));

if (5 == 5) {
  console.log("both are equal");
} else {
  console.log("not equal");
}

if (NaN == NaN) {
  console.log("both are equal");
} else {
  console.log("not equal");
} //NaN is not equal to NaN

if ("vinod" == "vinod") {
  console.log("both are equal");
} else {
  console.log("not equal");
}

let sum1 = "vinod" - 5;
console.log(sum1); // NaN
let sum2 = "5" - 5;
console.log(sum2); // 0
let sum3 = "5" - 10;
console.log(sum3); // -5
let sum4 = "5" + 10;
console.log(sum4); //510

console.log(10 + "20"); //1020
console.log(9 - "5"); //4
console.log("java" + "script"); //js
console.log(" " - 0); //
console.log(" " + 0); // 0 typeof is string here
console.log("vinod " - "thapa"); // this is NaN
console.log(true + true);
console.log("88888888888888888888888888888888888888888888888");
console.log("line number 105, adding 2 trues");
console.log(false - true);

let x = 5;
let y = 10;
var sum11 = x + y;
console.log(sum11);

let a1 = 5;
let b = 10;
var difference = a1 - b;
console.log(difference);

var p = 4;
var q = 6;
var product = p * q;
console.log(product);

var m = 15;
var n = 5;
var quotient = m / n;
console.log(quotient);

var c = 17;
var d = 5;
var remainder = c % d;
console.log(remainder);

var result = "hello" / 2;
var result1 = "hello" * 55;
console.log(result);
console.log(result1); //NaN not a number
//new topic
//types of operators in js
//
var addResult = 0.1 + 0.2; //
console.log(addResult);
console.log(addResult.toFixed(2)); //this will

var str1 = "hello";
var str2 = "world";
var str3 = str1 + str2;
console.log(str3);

//comparison operators

console.log(5 == 5);
console.log(5 === 5);
console.log(5 === "5");
console.log(5 != 5);
//logical AND
var x1 = 5;
var y1 = 10;
console.log(x1 > 0 && y1 > 0);

//logic or

var a = 15;
var b1 = 0;
console.log(a > 10 || b1 > 10);

var age = 18;
var hadDrivingLicense = true;
//age > 18
//age == 18
console.log(age >= 18 && hadDrivingLicense == true);

//ternary operator

var age5 = 15;
var result11 = age5 >= 18 ? "yes" : "no";
console.log(result11);

console.log("5" - 3); //2 typer co..
console.log(2 < 12 < 5); //left to right
console.log("20" + 10 + 10); //left to right 201010

//control statement and loops

var temp = 40;
if (temp > 30) {
  console.log("let's go to beach ");
} else {
  console.log("watch tv at home");
}

var temperature = 25;
if (temperature >= 30) {
  console.log(" lets go to beach ");
} else if (temperature >= 20 && temperature < 30) {
  console.log("tv dekho");
} else {
  console.log("thand hai");
}

//switch statements

var day = "monday";
switch (day) {
  case "monday":
    console.log("today is monday");
    break;
  case "friday":
    console.log("lets party");
    break;
  case "sunday":
    console.log("movie");
    break;
  default:
    console.log("no condition matched");
}

var area = "circle";
var a = 55;
var b1 = 10;
var result;
switch (area) {
  case "square":
    result = a * a;
    console.log(result);
    break;

  case "rectangle":
    result = a * b;
    console.log(result);
    break;

  case "circle":
    var r = 2;

    result = 3.14 * (r * r);
    console.log(result);
    break;

  default:
    console.log("no shapes matched");
}

var i = 1; //initialization
while (i <= 10) {
  //condition
  console.log(i); //
  i++; //iteration
}

var num = 1;
while (num <= 10) {
  console.log(num);
  num++;
}

var num1 = 1;
do {
  console.log(num1);
  num1++;
} while (num1 <= 10);

var nu = 1;
while (nu <= 10) {
  console.log("5 *" + nu + " = " + 5 * nu);
  nu++;
}

var userinput;
var positiveNumber;
do {
  userInput = prompt("enter any positive number");
  positiveNumber = parseFloat(userInput);
} while (isNaN(positiveNumber) || positiveNumber < 0);
console.log("you have entered a valid positive ", positiveNumber);

var sum111 = 0;


// find out what debugger does
//debugger;
for (var num = 1; num <= 10; num++) {
  var sum111 = sum111 + num;
}
console.log(sum111);

var num = 12;
var isPrime = true;
for (var i = 2; i < num; i++) {
  if (num % i == 0) {
    isPrime = false;
    break;
  }
}

var year = 2002;
if ((year % 4 === 0 && year % 1000 !== 0) || year % 400 === 0) {
  console.log(year, "its a leap year");
} else console.log(year, "its not a leap year");

//for (var i = 1; i <= 5; i++) {//for()}

function sumnikalo(a, b) {
  return a + b;
}

console.log(sumnikalo(5, 5));

function greet(name) {
  console.log("hello" + name + ", welcome to thapa technical js course");
}
greet("ram");

//fucntion exprexsion( we store in a variable)

var result = function sum(
  a,
  b //parameters
) {
  console.log(a + b);
};
result(10, 15); //thsi isnide the brackets is aclled arguments

//return keyword understanding

// immediately invoked function expression

//********ecma script

//let const, template strings, defualt arguments, arrow function, destructing, object properties, rest operators, spread operators came in 2015 es6
console.log("the var part starts**********");
var name = "thapa";
console.log(name);
if (true) {
  var name = "vinod"; //changed name to vinod
  console.log(name);
}
console.log(name); //remains vinod
var name = "technical";
console.log(name);

console.log("the let part starts**********");
let pame = "thapa";
console.log(pame);
if (true) {
  let pame = "vinod"; //changed name to vinod
  console.log(pame);
}
console.log(pame); //remains vinod
pame = "technical";
console.log(pame);

console.log("the const part starts**********");
const zame = "thapa";
console.log(zame);
if (true) {
  const zame = "vinod"; //changed name to vinod
  console.log(zame);
}
console.log(zame); //
//zame = "technical"; // this is not possible in const====================
console.log(zame);

let firstName = "vinod";
let lastName = "thapa";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

let age1 = 30;
let message = `i am ${age1} years old.`;
console.log(message); //string interpolation

console.log(`5 * ${num} = ${5 * num}`); //template literals

//default parameters

function sum(a, b = 10) {
  // b has default value
  return a * b;
}
console.log(sum(5)); //by default this goes to first parameter;
console.log(sum(5, 5));

//fat arrow function

///
//
//
const sump = function (
  a,
  b //traditional function
) {
  let result = `the sum of ${a} and ${b} is ${a + b}.`;
  console.log(result);
};
sump(5, 5);

const psum = (
  a,
  b //fat arrow traditional function
) => {
  let result = `the sum of ${a} and ${b} is ${a + b}.`;
  console.log(result);
};
psum(5, 5);

//
//
//
const qsum = (a, b) => console.log(`the sum of ${a} and ${b} is ${a + b}.`);
qsum(5, 5);

///
//
//5:50:00

const calculator = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      return result;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) return "0 is not allowed";
      return num1 / num2;

    default:
      return "no operator found";
  }
};

const isReverse = (str) => {
  //without using built in fucntion to reverse
  let reverse = "";
  for (let char = str.length - 1; char >= 0; char--) {
    console.log(str[char]);
  }
  return reverse;
};
console.log(isReverse("vinod thapa"));

let str5 = "vinod thapa";
console.log(str5[2]);

//pallindrome check

const isPallindrome = (str) => {
  //without using built in fucntion to reverse
  let reverse = "";
  for (let char = str.length - 1; char >= 0; char--) {
    console.log(str[char]);
  }
  if (reverse == str) return true;
  else return false;
};
console.log(isPallindrome("vinod thapa"));

//Arrays
//collection of similar type of elements
// array.length
//first element or head
//last element is tail array.length - 1
//array.length is a property not method

const persons = ["ram", "hari", "sita", "bishal", "gita"];
//person[-1]; //error
persons.at(-1);
persons.at(-2);

let arr = [];
console.log(typeof arr);

let fruits = new Array("apple", "orange", "banana");

//array traversal

//for of
let fruits2 = ["apple", "orange", "mango", "grapes", "banana"];
for (let item of fruits2) {
  console.log(item);
}

// for in

for (let item2 in fruits2) {
  console.log(item2); //all indexes
}


//foreach
/*
array.forEach(function callback(currentValue, index, array){

}, thisvalue);
*/

//callback is a fucntio that gets called for each element of array
//currentvalue is the current element being processed in the array
///

console.log("??????????????????????????????????for each ????????????????????????????????");

fruits2.forEach((curElem, index, arr2) => {
  console.log(`${curElem} ${index}` );
    console.log(arr2);
});//fat arrow function 

console.log("?????????????for each limitation ????????????????????????????????");


//limitation of for each is that the variables are scoped, you cant return it, it gives undefined

//advantage is also there, nothing has to be returned

const myForEachArr = fruits2.forEach((curElem, index, arr) => 
    { return `${curElem} ${index}`;
    });
console.log(myForEachArr);



//map map map
console.log("map map map map map map map");

const myMapArr = fruits.map((curElem, index, arr) => {
    return `my favorite fruits is ${curElem} ${index}`;
   
    }
           );
 console.log(myMapArr);




numbers.forEach((curElem) => {
    console.log(curElem *2);
    }
                );

const doubleValue = numbers.map(curElem) => {
    console.log(curElem *2);
    return curElem * 2;
    }
                );
console.log(doubleValue);


console.log("foreach is Not used for returning a vslue. it goes over array element and performs a side effect such as modifying the array or performing a task on eachlement");



console.log("the original array remains unchanged and the function is applied to each array element, it return the new array of results");





//CRUD on array

console.log("CRUD on array");

let fruits = ["apple", "orange", "mango" , "grapes" , "banana"];

console.log( fruits.push("guava"));
console.log(fruits);

console.log( fruits.pop());
console.log(fruits);


console.log( fruits.unshift("guava"));
console.log(fruits);

console.log( fruits.shift("guava"));
console.log(fruits);

fruits.splice(1,1);
console.log(fruits);



//////////////////
//////////////////////
/////////////
//////////
///////////////////
//////////////////////
/////////////
//////////
//////////////////////
/////////////
//////////
///////////////////
//////////////////////
/////////////
//////////
///////////////////
//Arrays as per book
var catNames = new Array("larry", "fuzzball", "furly");
var dogNames = ["shaggy", "tennesse", "dr spock"];

//strings from commonlunge and stuff
var oneString = "this is a string";
console.log(oneString.toUpperCase());
console.log(oneString.repeat(3));
console.log(oneString.length);

var oneNumber = 55;
var st = String(oneNumber);
console.log(typeof oneNumber);
console.log(typeof st);
console.log(parseInt(st) + 55); //converts a string to number then adds that to 55

//objects commonlounge
var participant = {
  name: "Commonlounge",
  country: "Canada",
  favorite_numbers: [7, 42, 92],
};
participant["favorite_language"] = "JavaScript";
console.log(participant);
console.log(JSON.stringify(participant));
//input type
