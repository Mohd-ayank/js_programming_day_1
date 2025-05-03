//primitive - call by value (copy data)
//7 types :- String, Number, Boolean, Null, Undefined, Symbol, BigInt

//reference type - call by reference (same value, no copy)
//Array, Objects(#main), Functions

//Dynamic or static : dynamic because variables can hold values of different types during runtime. unlike java or typescript.
//dont need to declare explicitly the data type of variable

//undefined : space is allocated in memory
//use odfsymbol

const id=Symbol('123');
// console.log(id);
const anotherId=Symbol('123');
console.log(typeof id);

// console.log(anotherId);

//console.log(id===anotherId);//false because return value is not same despite giving same input

//big int = use 'n' at the end of number

//objects and arrays
 let myObj={
    name:"hitesh",
    age:22,
 }


 //val and its typeof or return type value
//  undefined->undefined
//  null->Object
//function->function(object function)
//symbol->symbol
 //all others are same

