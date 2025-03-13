//Given an array of numbers, return an array where each element is the product of all the elements in the original array except the current element.

function getWeights(arr){
    const finalArray = [];
    for(let index = 0; index<arr.length; index++){
        console.log("current number:" + arr[index]);
        //multiply all the other elements except the currnet number
        //put that result in final array
        let productOfOtherElements = 1
        for(let innerLoopIndex = 0; innerLoopIndex<arr.length; innerLoopIndex ++){
            if(index !== innerLoopIndex){
                productOfOtherElements = productOfOtherElements * arr[innerLoopIndex]
            }
        }
        //push that result in the final array
        finalArray.push(productOfOtherElements)
    }
    return finalArray;
}
const result = getWeights([1,2,3,4,5])

console.log(result); // [120, 60, 40, 30, 24]

const resultTwo = getWeights([122,32,767,23,444,34,90,434,243,545,23]);
console.log(resultTwo);




//Write a function `binarySearch(arr, target)` that implements the binary search algorithm 
// to find the index of `target` in a sorted array `arr`. Return -1 if `target` is not found.
//binary search is an algorithm used to find an element in a sorted array.


const nums = [1, 3, 5, 7, 9, 11];

function binarySearch(arr,target)
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2); //math.floor rounds down the result to an integer

        if (arr[mid] === target) {
            return mid; // return the index
        } else if (arr[mid] < target) {
            left = mid + 1; // ignore left half and search the right
        } else { // mid > target
            right = mid - 1; // ignore the right half and search the left
        }
    }

    return -1; // Target not found
    
console.log(binarySearch(nums,9));
