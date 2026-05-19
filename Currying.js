// function multiply(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return a*b*c*d;
//             }
//         }
//     }
// }

// console.log(multiply(1)(2)(3)(4))



// function greet(name){
//     return function(msg){
//         return function(sign){
//             return `Hello ${name}, ${msg} ${sign}`
//         }
//     }
// }
// console.log(greet("Sujit")("how are you")("??"))


// const sum = a => b => c => d => a+b+c+d;
// console.log(sum(1),(2),(3),(4));



//////////// practice ///////////


function sum(a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}

console.log(sum(2)(6)(1));




function evaluate(operation){
    return function(a){
        return function(b){
            if(operation === "sum") return a + b;
            else if(operation === "sub") return a - b;
            else if(operation === "mul") return a * b;
            else if(operation === "div") return a / b;
            else "Invalid Operation";
        }
    }
}

console.log(evaluate("sum")(4)(2));
console.log(evaluate("sub")(4)(2));
console.log(evaluate("mul")(4)(2));
console.log(evaluate("div")(4)(2));



/// for infinit params

function add(a){
    return function(b){
        if(b) return add(a + b);
        return a;
    }
}

console.log(add(1)(2)(3)(4)(5)());
