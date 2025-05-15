const myArr=[0,1,2,3,4,5,6];
const myArr2= new Array(1,2,3,4);//exactly as above

//Array methods
myArr.push(6)//push at the end
myArr.unshift(0)//push at the front->O(N)
myArr.shift();//pop from the front
//.join() = array to string

//slice and splice
const myn1=myArr.slice(1,3);
// console.log(myArr);//[0,1,2,3,4,5,6,6]

console.log(myn1);//[1,2]
console.log(myArr);

const myn2=myArr.splice(1,3);
console.log(myn2);//[1,2,3]
console.log(myArr);

//diff between slice and splice is that splice minipulates original array from index 1 to 3 but slice do not.