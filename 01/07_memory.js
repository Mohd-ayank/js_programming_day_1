// stack (primitive data type)-> always copy available
//heap (non-primitive data type)-> reference available means direct pointer available

let myYoutubename="hiteshchoudharydotcom"//declare var1 with some value (in stack)
let anotherName=myYoutubename//its copy is given to another variable in stack
anotherName="chaiaurcode"//just copy is updated 

// console.log(myYoutubename);
// console.log(anotherName);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne;//given reference of userOne to userTwo 
userTwo.email="ayanmdkhan@gmail"//updated both userOne and userTwo email

console.log(userOne.email);





