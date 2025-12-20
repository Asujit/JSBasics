

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
