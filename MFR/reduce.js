// let arr = [1,2,3,4,5,6];

// let newArr = arr.reduce((acc,n) => acc+n);
// console.log(newArr)


let arr = [1,2,3,4,5,6];

let max = arr.reduce((a,n) => Math.max(a,n));
console.log(max);


const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const freq = fruits.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

console.log(freq);
