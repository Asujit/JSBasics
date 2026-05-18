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

/// OR /// Wihtout built-in functions

function reverseStr(str){
    let newStr = '';
    
    for(let i = str.length-1; i>=0; i--){
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseStr("What is this ?"))


function findVowels(str){
    const vowelsList = ['a','e','i','o','u','A','E','I','O','U'];
    const vowelsFound = [];
    let currentIndex = 0;

    for(let i=0; i<str.length; i++){
        let currentChar = str[i];
        for(let j=0; j<vowelsList.length; j++){
            if(currentChar === vowelsList[j]){
                vowelsFound[currentIndex] = currentChar;
                currentIndex++;
                break;
            }
        }
    }

    return vowelsFound;
};

console.log(findVowels("Hey What are you doing?"));




function removeVowels(str){

    const vowels = "aeiouAEIOU";

    let result = "";

    for(let i=0; i<str.length; i++){
        let currentChar = str[i];

        isVowel = false;
        for(let j=0; j<vowels.length; j++){
            if(currentChar === vowels[j]){
                isVowel = true;
                break;
            }
        }
        if(!isVowel){
            result += currentChar;
        }
    }
    return result;
}

console.log(removeVowels("Hey what are you doing ?"));



function isPalindrome(str){

    if(str.length <= 1) return true;

    let left = 0;
    let right = str.length-1;

    while(left < right){
        if(str[left] !== str[right]){
            return false;
        }

            left++;
            right--;
    }
    return true;
};

console.log(isPalindrome("racecar"));
console.log(isPalindrome("Sujit"));



function charFrequency(str){
    const freq = {};

    for(let i=0; i< str.length; i++){
        const currentChar = str[i];

        let exists = false;
        for(let key in freq){
            if(key === currentChar){
                freq[key] = freq[key] + 1;
                exists = true;
                break;
            }
        }

        if(!exists){
            freq[currentChar] = 1
        }
    }
    return freq;
}

console.log(charFrequency('Hey what are you doing ?'));