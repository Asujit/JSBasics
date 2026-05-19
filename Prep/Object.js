const user = {
    name: "Sujit",
    age: 25,
    "is dev": true /// for spacing keys we need to provide colon to the key and also for access instead of"." we need to call it using "[]"
}

console.log(user.name);

user.name = "Sujit Auti";

console.log(user.name);

delete user.age;

console.log(user);

console.log(user["is dev"]);


//2


const Name = "Sujit";
const age = 25;

const userr = {
    [Name] : age,
}

console.log(userr)


//3


const person = {
    name: "Sujit Auti",
    age: 25,
    city: "Pune",
    isItAweasome : true,
}


for(key in person){
    console.log(person[key]);
}


//4

const obj = {
    a: 25,
    b: 30,
    a: 50
}

console.log(obj.a)


// 5 - only multiply numeric keys of object


const nums = {
    a: 10,
    b: 20,
    c: "title"
}


function multiplyByTwo(obj){
    for(key in obj){
        if(typeof obj[key] === "number"){
            obj[key] *= 2;
        }
    }

    return obj;
}

console.log(multiplyByTwo(nums));


// 6 - In JavaScript, object keys are automatically converted into strings, so different objects become "[object Object]" and overwrite each other.

const a = {};
const b = {key: "b"}
const c = {key: "c"}


a[b] = 123;
a[c] = 456;

console.log(a); 

// 7 JSON-stringify , JSON-parse

const obj1 = {
    name: "Sujit",
    age: 25
};

const obj11 = JSON.stringify(obj1);
console.log(obj11);

console.log(JSON.parse(obj11));


// 8

const userr1 = {name: "Sujit" , age: 25};
const senior = { isSenior: true, ...userr1};

console.log(senior);


// 9 - only selective keys will be stringify

const obj2 = {name: "Sujit", age: 25, roll: 6};

const obj22 = JSON.stringify(obj2,['age', 'roll']);
console.log(obj22);


// 10 arrow - this


const area = {
    radius: 10,
    diameter: function (){
        return this.radius * 2;
    },

    perimeter: () =>{
        return 2* Math.PI * this.radius; // this will never happen because this in arrow referes to the global or window object 
    } 
}

console.log(area.diameter());
console.log(area.perimeter());


// 11 - object destructuring

const user2 = {
    name: "Sujit",
    age: 25,
    fullName: {
        first: "Sujit",
        last: "Auti",
    },
}

let name = "john doe" // if same name variable already present , that time we need to pass custom name to object key while destructuring

const {name: myName} = user2;
console.log(myName);

const {fullName:{first, last}} = user2; // this is for nested destructuring
console.log(first , last);

// 12 -- in this firstly we thought that we are assigning overall value of 'x' to the 'y' , but we are assigning reference only so 'y' will inherit the 'x' .

let x = {greetings: "Hey"};
let y;

y = x;

x.greetings = "Hello";

console.log(y.greetings);


// 13 - similar two or more objects are still not same , bacause every object have different memory space

console.log({a: 1} == {a: 1});
console.log({a: 1} === {a: 1});


// 14 - 
let person1 = {name: "Sujit"};

const members = [person1];

person1 = null; // because it assigning null to 0th index of object 

// person1.name = null;  // this will make name value null in object

console.log(members);


// 15 

const value1 = {number: 10};

const multi = (x = {...value1}) =>{
    console.log((x.number *= 2));
};

multi(); // 20
multi(); // 20
multi(value1); // 20
multi(value1); // 40


// 16 deep copy of object

let user5 = {
    name : "Sujit",
    age : 25
}

// const objClone = JSON.parse(JSON.stringify(user5));
// const objClone = Object.assign({}, user5);
const objClone = {...user5};

objClone.name = "Sujit Auti";

console.log(user5, objClone);