const name="hitesh"
const repoCount=50

// console.log(name + repoCount +" value");//outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//best way to use backticks

//In JavaScript, a string is a primitive data type. However, when methods or properties are accessed on a string, JavaScript temporarily wraps it in a String object. This allows strings to behave like objects in certain contexts, but they are not inherently objects.

//***********---important---**********/

const strObj = new String("Hello, world!");
console.log(strObj);          // [String: 'Hello, world!']
console.log(typeof strObj);   // "object"

// new String("Hello, world!") creates a String object (not a primitive string).

// This is different from just using "Hello, world!", which creates a string primitive.

const primitiveStr = "Hello, world!";
const objectStr = new String("Hello, world!");

console.log(typeof primitiveStr); // "string"
console.log(typeof objectStr);    // "object"

//when to use (new String)? -> almost never
//unnecesssary object wrap is not needed try to always use primitive string type.

//different prototype can be accessed without using __props__

// console.log(objectStr.__proto__)

// Yes, you can use string methods on primitive strings in JavaScript without explicitly wrapping them in an object — and that's because JavaScript does this automatically behind the scenes.

// JavaScript temporarily wraps the primitive string in a String object, calls the method, and then discards the wrapper.

const gameName= new String("ayan2340");
const newGame=gameName.substring(0,4);//ayan

//sunstr will ignore -ve values
//in slice method(alike substr), but we can intake -ve indices as well
const anotherString=gameName.slice(-6,-1);
console.log(anotherString);

//trim method-> remove spaces from left and right side of string
// const newStringOne="     hitesh     ";

//replace method in string

const url="https://github.com/Mohd-ayank/js_programming%20day_1"

// console.log(url.replace('%20','_'));

//includes or not ->includes()

