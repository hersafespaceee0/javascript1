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