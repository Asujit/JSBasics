// normal copy object

// let user = {
//     name : 'Sujit'
// }

// let user2 = user;
// console.log(user2.name)



// destructing shallow copy

// let user = {
//     name: "Sujit"
// }

// let user2 = {...user};

// user2.name = "Sam";

// console.log(user.name)
// console.log(user2.name)



// structuredClone deep copy

let user = {
    name: "Sujit",
    address :{
        city : "Pune",
        state : "Maharashtra"
    }
}

let user2 = structuredClone(user);

user2.address.city = "Jalgaon";

console.log(user.address)
console.log(user2.address)