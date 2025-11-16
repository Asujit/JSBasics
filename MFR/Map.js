// let names = ["sujit", "kailas", "auti"];
// let newNames = names.map(str => str.toUpperCase());
// console.log(newNames)



// let user = [
//     {name : "Sujit", age: 25},
//     {name : "Divya", age: 24},
// ]
// let ages = user.map(age => age.age);
// console.log(ages);

// let products =[
//     {name: "Soap", price:10},
//     {name: "Oil", price:20},
//     {name: "Powder", price:30},
// ]

// let tax = products.map(item => item.price + 10);
// console.log(tax)


let Users = [
    {name: "Sujit", age: 25},
    {name: "Divya", age: 24},
    {name: "Seema", age: 52},
    {name: "Kailas", age: 59},
]

let ages = Users.map(users => `After 10 years age of the ${users.name} will be ${users.age + 10}`);

console.log(ages)
    
     
