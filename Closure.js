let f = 10;

function sum(a){
    return function (b){
        return function (c){
            return function (d){
                return function (e){
                    return a+b+c+d+e+f;
                }
            }
        }
    }
}

console.log(sum(1)(3)(5)(7)(9));


function createBase(num){
    return function (innerNum){
        console.log(num + innerNum);
    }
}

let addSix = createBase(6);
addSix(10);
addSix(21);



//----------- in this "var" have functional scope that's why it is not giving 0,1,2 so for it we can use "let"
// for(var i=0; i<3; i++){
//     setTimeout(() =>{
//         console.log(i);
//     }, i*1000);
// }


// using 'var' print 0,1,2


// for(var i=0; i<3; i++){

//     function inner(i){
//         setTimeout(() =>{
//             console.log(i);
//         }, i*1000)
//     }
//     inner(i);
// }



// use closure to use private counter

function counter(){
    let num = 5
    return function add(i){
        return num + i;
    }
}

const count = counter();

console.log(count(10));
console.log(count(15));


// Module Pattern


const Module = (function (){
     function Private(){
        console.log("Private");
    }


    return {
        Public : function(){
            console.log("Public");
        }
    }
})();

Module.Public();
// Module.Private(); /// this is not accessible because 'Private' not returning



// using closure make function runs only once 

let view;

function like(){
    let called = 0;

    return function(){
        if(called > 0){
            console.log("Function already called")
        }else{
            view = "Yes, I Saw the video";
            console.log("Video was amazing & ",view);
            called++;
        }
    }
}

let isLiked = like();
isLiked();
isLiked();