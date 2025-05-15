//array koi bhi data le leta hai zaruri nahi ki same data type ho

const marvelHeros=["thor","ironman","spiderman"]
const dcHeros=["superman","flash","batman"]

// marvelHeros.push(dcHeros);

// console.log(marvelHeros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] -> 4 elemnts usme 1 array bhi hai

// console.log(marvelHeros[3][1]);//flash

const allHeros=marvelHeros.concat(dcHeros);
console.log(allHeros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
