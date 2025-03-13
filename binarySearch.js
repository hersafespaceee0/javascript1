//Write a function `binarySearch(arr, target)` that implements the binary search algorithm 
// to find the index of `target` in a sorted array `arr`. Return -1 if `target` is not found.
//binary search is an algorithm used to find an element in a sorted array.


const arr = [2, 4, 6, 8, 10, 12, 14, 16];

function binarySearch(arr,target){

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
}   
console.log(binarySearch(arr,5));
console.log(binarySearch(arr,12));