//array koi bhi data le leta hai zaruri nahi ki same data type ho

const marvelHeros=["thor","ironman","spiderman"]
const dcHeros=["superman","flash","batman"]

// marvelHeros.push(dcHeros);

// console.log(marvelHeros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] -> 4 elemnts usme 1 array bhi hai

// console.log(marvelHeros[3][1]);//flash

// const allHeros=marvelHeros.concat(dcHeros);
// console.log(allHeros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//spread (to merge multiple arrays)
const all_new_heros=[...marvelHeros,...dcHeros];//... -> array spreading
console.log(all_new_heros);

//flat method
const another_array=[1,2,3,[4,5,6],7,[4,5,[4,5,6]]];
const real_another_array=another_array.flat(Infinity);//[1,2,3,4,5,6,7,4,5,4,5,6]

//conversion from other datat type to array and checking if array or not
console.log(Array.isArray("Hitesh"));//false
console.log(Array.from("Hitesh"));//['H','i',......]
console.log(Array.from({name:"hitesh"}));//[]->the thing which need to be converted is not specified clearly so returns empty array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]





