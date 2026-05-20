// console.log("Start")

// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = true;
//     if (result) resolve("Promise Resolved");
//     else reject("Promise isn't resolved yet");
//   }, 1000);
// });

// sub.then((res) => console.log(res)).catch((err) => console.log(err));


// console.log("End")


// promise.all()


console.log("First");

function first() {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("This is First Promise");
        }, 4000)
    })
}

function second(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("This is Second Promise");
        }, 3000)
    })
}

function third(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("This is Third Promise");
        }, 2000)
    })
}

function forth(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("This is Forth Promise");
        }, 1000)
    })
}

// THIS IS THE Promise.all() METHOD

// Promise.all([
//     first(),
//     second(),
//     third(),
//     forth(),
// ]).then((res) => console.log(res))
//     .catch((err) => console.log(err))


// ASYNC AWAIT APPROACH FOR PROMISES


const result = async() =>{
    try{
        const First = await first();
        const Second = await second();
        const Third = await third();
        const Forth = await forth();

        console.log({First, Second, Third, Forth});
    }catch(error){
        console.log("This Promise failed", error);
    }
}

result();

console.log("Last")