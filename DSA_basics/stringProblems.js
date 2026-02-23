function reverseString(str){
    let arr = str.split('');
    let left = 0;
    let right = arr.length -1;
     
    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    
    }
    return arr.join('');
}

console.log(reverseString("Hey , What are you doing?"));


function findVowelandCount(str){
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let result = [];

    for(let i=1; i<str.length; i++){
        if(vowels.includes(str[i])){
            result.push(str[i]);
        }
    }
    console.log(result.length);
    return result;
}

console.log(findVowelandCount("Hey what are you doing?"));