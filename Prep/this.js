// 1

const user = {
    name : "Sujit",
    getName(){
        let name = "Sujit Auti"; 
        console.log(this.name); // this target to the parent object or parent scope not to same scope
    }
}

user.getName();


// 2

const user1 = {
    name : "Sujit",
    ref : this,
}

const info = user1;

console.log(info.ref); 


// 3


function profile(){
    return {
        name: "Sujit",
        ref: this, // for accessing name filed from ref then we need to change ref into function
    };
}

let userProfile = profile();

console.log(userProfile.ref)


// 4

const user2 = {
    name: "Sujit",
    log(){
        console.log(this.name);
    }
}

setTimeout(user2.log, 1000); // that setTimeout throw undefined because 'user2.log' have no more access now because of setTimeout, and if we still run properly this then we need to change 'user2.log' into function. 

// 5


var a = 4;

function cb(){
    console.log(this.a);
}

const obj = {
    a: 5,
    method(fn){
        fn();
    }
}

obj.method(cb);

// 6 - multiple functional operation

const calci = {
    total : 0,
    add(a){
        this.total += a;
        return this;
    },
    sub(a){
        this.total -= a;
        return this;
    },
    mul(a){
        this.total *= a;
        return this;
    },
    div(a){
        this.total /= a;
        return this;
    },
}

const result = calci.add(10).sub(2).div(4).mul(10).add(5);
console.log(result.total);