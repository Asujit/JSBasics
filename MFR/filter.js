// let arr = [1,2,3,4,5,6,7,8,9];
// let newArr = arr.filter(item => item % 2 === 0);
// console.log(newArr);


// let arr = [1,-1,2,-2,5,-5];
// let newArr = arr.filter(num => num > 0);
// console.log(newArr)


// const students = [
//     {name: "Sujit", marks: 76},
//     {name: "Divya", marks: 95},
//     {name: "Kunal", marks: 65},
// ];

// let fil = students.filter(marks => marks.marks >= 75);

// console.log(fil)


const products = [
    {name: "Soap", price:1000},
    {name: "Oil", price:200},
    {name: "Powder", price:3000},
]

let cheap = products.filter(item => item.price <= 500);
console.log(cheap);