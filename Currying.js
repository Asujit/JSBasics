function multiply(a){
    return function(b){
        return function(c){
            return function(d){
                return a*b*c*d;
            }
        }
    }
}

console.log(multiply(1)(2)(3)(4))



function greet(name){
    return function(msg){
        return function(sign){
            return `Hello ${name}, ${msg} ${sign}`
        }
    }
}
console.log(greet("Sujit")("how are you")("??"))


const sum = a => b => c => d => a+b+c+d;
console.log(sum(1),(2),(3),(4));
