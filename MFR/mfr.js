const nums = [1,2,3,4];

const newNums = nums.map((num, index, arr) =>{
    return num * 3 + index;
});

const moreThanTwo = nums.filter((num)=>{
    return num > 2;
});

const red = nums.reduce((acc, curr, i, arr) =>{
    return acc + curr;
}, 0);

console.log(newNums);
console.log(moreThanTwo);
console.log(red);



// map() polyfill

Array.prototype.plMap = function(cb){

    let bArray = [];

    for(let i=0; i<this.length; i++){
        bArray.push(cb(this[i], i, this));
    }
    return bArray;
}


const nm = [1,2,3,4,5];

const newNm = nm.plMap((num) =>{
    return num * 5;
});

console.log(newNm);


// filter() polyfill

Array.prototype.plFilter = function(cb){

    let temp = [];

    for(let i=0; i<this.length; i++){
        if(cb(this[i], i, this)){
            temp.push(this[i]);
        }
    }
    return temp;
}

const filterNum = nm.plFilter((num) =>{
    return num > 2;
});

console.log(filterNum);


// reduce() polyfill

Array.prototype.plReduce = function(cb, iV){

    let acc = iV;

    for(let i=0; i<this.length; i++){
        acc = acc ? cb(acc, this[i], i, this) : this[i];
    }

    return acc;
}

const reduceNum = nm.plReduce((num, curr) =>{
    return num + curr ;
});

console.log(reduceNum);





const users = [
  {
    name: "Sujit",
    age: 24,
    city: "Pune"
  },
  {
    name: "Rahul",
    age: 26,
    city: "Pune"
  },
  {
    name: "Amit",
    age: 22,
    city: "Delhi"
  },
  {
    name: "Neha",
    age: 25,
    city: "Bangalore"
  },
  {
    name: "Priya",
    age: 23,
    city: "Hyderabad"
  }
];




const name = users.map((item) =>{
    return item.name.toLocaleUpperCase();
});

console.log(name);

const age = users.filter((item) =>{
    return item.age >= 25;
});

console.log(age);

const fl = users.filter((item) =>{
    return item.age >= 25 && item.city === 'Pune'
});

console.log(fl);

// const flName = fl.map((item) =>{
//     return item.name;
// });

// console.log(flName);

const TotalAge = users.reduce((item, i) =>{
    return item + i.age
},0);

console.log(TotalAge);
