(function (x){
    return (function (y){
        console.log("Value of x is", x);
    })(5);
})(4);


console.log("first");


// callback function


function greet(name){
    return "Hi" + name;
}

function display(cb){
    console.log(cb("Sujit"));
}

display(greet);