

// const firstPromise = new Promise((resolve, reject) =>{
//     const success = true;

//     setTimeout(() =>{
//         if(success){
//             resolve("Successful Promise");
//         }else{
//             console.log("failed Promise")
//         }
//     }, 3000);
// })

// firstPromise
//             .then(res => console.log(res))
//             .catch(err => console.log(err))
//             .finally(() => console.log("Executed"))


//             ///2//

// const secondPromise = new Promise((res,rej) =>{
//     const result = true;
//     const result1 = false;

//     setTimeout(() =>{
//         if(result){
//             res("Promise Resolved")
//         }else{
//             rej("Promise Rejected")
//         }
//     }, 5000);
// })

// secondPromise
//             .then(result => console.log(result))
//             .catch(error => console.log(error))
//             .finally(() => console.log("Executed"))


            ///3///

// function checkUser(age){
//     return new Promise((resolve, reject) =>{
//         console.log("Checking User...");

//         setTimeout(() =>{
//             if(age > 18){
//                 resolve({status : "Adult", canDrive : true})
//             }else if(age >= 15 || age <= 18){
//                 resolve({status : "Young", canDrive : true})
//             }else{
//                 reject({status : "child", canDrive: false})
//             }
//         }, 10000)
//     })
// }

// checkUser(25)
//             .then(user =>{
//                 console.log(`Status : ${user.status}`)
//                 console.log(`Can Drive: ${user.canDrive}`);
//                 return user;
//             })
//             .then(user =>{
//                 if(user.canDrive){
//                     console.log("User can Drive a Car")
//                 }
//             })
//             .catch(err =>console.log("Error", err))



            /// 4 ///


function getUser(userId){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log(`checking user Id ...${userId}`)
            resolve({id : userId , name : "Sujit Auti"})
        })
    }, 2000)
}

function getUserData(data){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log(`User name is ${data.name}`)
            resolve({...data , posts : ["Post1, Post2, Post3"]})
        },4000)
    })
}

function getComment(cmt){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("Fetching Comments")
            resolve({...cmt, comments : [{post1 : "Awesome",
                                            post2 : "Good Look"
            }]})
        }, 6000)
    })
}


getUser(101)
            .then(user => getUserData(user))
            .then(user1 => getComment(user1))
            .then(finalData => console.log(finalData))
            .catch(err => console.log(err))


            /// 5 ///


function risky(){
    return new Promise((resolve, reject) =>{
        const random = Math.random();
        if(random > 0.5){
            resolve("Promise Resolved")
        }else{
            reject("Promise Rejected")
        }
    }, 3000);
}

risky()
        .then(res => console.log(res))
        .catch(err => console.log(rej))



        /// 6 /// //Promise.all//


const promise1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("First Promise")
    }, 3000)
})

const promise2 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("Second Promise")
    }, 4000)
})

const promise3 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("Third Promise")
    }, 5000)
})

Promise.all([promise1, promise2, promise3])
            .then("All Promises Resolved")
            .then(res => console.log(res))
            .catch(err => console.log(err))


            /// 7 ///  // Promise.allSettled //


const promise1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("First Promise")
    }, 3000)
})

const promise2 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        reject("Second Promise")
    }, 4000)
})

const promise3 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("Third Promise")
    }, 5000)
})

Promise.allSettled([promise1, promise2, promise3])
            .then("All Promises Resolved")
            .then(res => console.log(res))
            .catch(err => console.log(err))


            /// 8 ///  //Promise.race//


const promise1 = new Promise((res, rej) =>{
    setTimeout(() =>{
        res("First Promise")
    }, 3000)
})
const promise2 = new Promise((res, rej) =>{
    setTimeout(() =>{
        res("Second Promise")
    }, 1000)
})
const promise3 = new Promise((res, rej) =>{
    setTimeout(() =>{
        res("Third Promise")
    }, 800)
})

Promise.race([promise1, promise2, promise3])
            .then(winner => console.log(`Winner is the ${winner}`))
            .catch(err => console.log(err))



            /// 9 ///  //Promise.any//


const promise1 = new Promise((res, rej) =>{
    setTimeout(() =>{
        rej("First Promise")
    }, 3000)
})
const promise2 = new Promise((res, rej) =>{
    setTimeout(() =>{
        rej("Second Promise")
    }, 1000)
})
const promise3 = new Promise((res, rej) =>{
    setTimeout(() =>{
        res("Third Promise")
    }, 800)
})
const promise4 = new Promise((res, rej) =>{
    setTimeout(() =>{
        res("Forth Promise")
    }, 2000)
})

Promise.any([promise1, promise2, promise3, promise4])
            .then(winner => console.log(`Resolved Promise is ${winner}`))
            .catch(err => console.log(err))




/// Promise represents the future values and it is use mainly in asynchoronous operation in javascript
// There are 3 states on Promises - pending , fulfilled , rejected
// There are 2 Possible outcomes in Promises which are 'resolve , reject'
// Promises have .then() , .catch() , .finally() chains to handle success and error
// there are mainly 4 combinators in Promises which are 1.Promise.all() , 2.Promise.allSettled() , 3.Promise.race() , 4.Promise.any()