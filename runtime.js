const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Results for the tinyArray
// insert 122.1 μs
// append 171.7 μs

// Results for the smallArray
// insert 164.2 μs
// append 133.3 μs

// Results for the mediumArray
// insert 247 μs
// append 156.2 μs

// Results for the largeArray
// insert 10.5167 ms
// append 740.4 μs

// Results for the extraLargeArray
// insert 1.2417558 s
// append 7.0502 ms

//The append function (using the push() method) has a better scale for worst case scenarios than the insert function. We can see the time that takes to run each function. As the input gets bigger, the time to perform the append function grows somewhat linearly, and the time to perform the insert function grows more exponentially. This is why: 

// - The append function has a time complexity of O(n)
// - The insert function has a time complexity of O(n^2)

// Another way to explain this is, both functions have a for loop that iterates through every element in the array. So, if the time to run a for loop will be directly related to the size of the input array. This is what is called O(n) time complexity. Now, for the append function, the push() method has a base time complexity of O(1) and therefore the overall time complexity of the function is O(n). As of the insert function, the unshift() method has a time complexity of O(n), wich combined with the complexity of the for loop, the overall is O(n^2).

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
