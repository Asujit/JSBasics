function reverse(arr){
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

console.log(reverse([1,2,3,4,5]));


function maxmin(arr){
    let max = arr[0];
    let min = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return {max, min};
}

console.log(maxmin([1,2,3,4,5]));


function sum(arr){
    let sum = 0;

    for(let i of arr){
        sum += i;
    }

    return sum;
}

console.log("Sum of Array" , sum([1,2,3,4,5]));