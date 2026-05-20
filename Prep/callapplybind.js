// call()


const user = {name: "Sujit"};

function greet(age){
    return `Hello ${this.name} and your age is ${age}`;
}

console.log(greet.call(user, 25));


// apply()


const user1 = {name: "Sujit"};

function greet1(age, city){
    return `Hello ${this.name} your age is ${age} and you are living in ${city}`;
}

// console.log(greet1.call(user1, 25, "Pune"));  // this is call() method

console.log(greet1.apply(user1, [25, "Pune"]));  // this is apply() method


// bind()

const user2 = {name: "Sujit"};

function greet2(age, city){
    return `Hello ${this.name} your age is ${age} and you are living in ${city}`;
};

const bindFunc = greet2.bind(user2);

console.log(bindFunc(25, "Pune"));


// 1 

const age = 10;

const user3 = {
    name: "Sujit",
    age: 25,
    getAge: function (){
        return this.age;
    }
}

const user4 = {age: 26}

console.log(user3.getAge.call(user4)); 


// 2

var status = "😊";

setTimeout(() =>{

    const status = "😂";

    const data = {
        status : "😒",
        getstatus(){
            return this.status;
        }
    }

    console.log(data.getstatus());
    console.log(data.getstatus.call(this));
}, 0);


// 3

// complete remaining video for more practice questions