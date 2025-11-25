// class constructor in ES6

class num {
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    
    mul(){
        console.log(`${this.a * this.b * this.c}`)
    }
}

const Cube = new num(5,6,7);
Cube.mul();



// encapsulation --- keeping data safe inside [cannot access '#balance' directly]
//1
class Accbalance {
    #balance = 100000;
    
    credit(a){
        this.#balance += a
    }
    
    getBalance(){
        console.log(`${this.#balance}`)
    }
}

const sujit = new Accbalance();

sujit.credit(100000);
sujit.getBalance();


//2

class fullName {
    #name = "Sujit";
    
    surname(a){
        console.log(`${this.#name + a}`)
    }
}

const user = new fullName();
user.surname("Auti");




// Abstraction --- keeping internal logic hidden only show needed logic

class coffee {
    #boil(){
        console.log("boiling water ")
    }
    
    makeCoffee(type){
        this.#boil();
        console.log(type, "is mixing with boiled water");
        this.#ready();
    }
    
    #ready(){
        console.log("Your coffee ready")
    }
}

const newCoffee = new coffee();
newCoffee.makeCoffee("Dark Coffee")





// Inheritance -- child class in inherits(reuse) the methods and properties of parent class

//1
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
    greet(){
        console.log(`Hello ${this.name} , How are you?? and what's your current age ?`)
    }
}

class me extends Person {
    constructor(name, age, city){
        super(name, age);
        this.city = city;
    }
    
    greetBack(){
        console.log(`Hi my current age is ${this.age} and i am living in ${this.city}.`)
    }
}

const me1 = new me("Sujit", 25, "Pune");

me1.greet();
me1.greetBack();




//2

class brand {
    constructor(company){
        this.company = company;
    }
    
    wow(){
        console.log(`${this.company} is my one of the favourite car brand`)
    }
}

class car extends brand{
    constructor(company, model, power){
     super(company); // for taking data from parent
     this.model = model;
     this.power = power;
    }
    
    yess(){
        console.log(`${this.model} is my favourite car of ${this.company} and it produces ${this.power}`)
    }
}

const m5 = new car("BMW", "M5", "650hp");

m5.wow();
m5.yess();


//3

class Employee {
    getRole() {
        return "Employee";
    }
}

class Manager extends Employee {
    getRole() {
        return "Manager";
    }
}

const m = new Manager();
console.log(m.getRole());






//Polymorphism -- the same method name behaves differently in different classes
//1 - method overriding
class Greet {
    greet(){
        console.log("Hello ! how are you ??")
    }
}

class Greet2 extends Greet{
    greet(){
        console.log("how's your parents ??")
    }
}

const Hello = new Greet2();
Hello.greet();


//2 - using super and overriding

class job {
    developer(){
        console.log("Initially i joined as a React.js developer in this company")
    }
}


class job2 extends job{
    developer(){
        super.developer(); // for taking method from parent
        console.log("Now i am working as a React Native developer in same company")
    }
}

const a = new job2();

a.developer();