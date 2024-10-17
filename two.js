function twoSum(nums, target) {
    const numMap = new Map(); // Step 1: Initialize a map to store numbers and their indices

    for (let i = 0; i < nums.length; i++) { // Step 2: Iterate through the array
        const complement = target - nums[i]; // Calculate the complement

        // Step 3: Check if the complement exists in the map
        if (numMap.has(complement)) {
            return [numMap.get(complement), i]; // Return indices if found
        }

        // Step 4: Store the current number and its index in the map
        numMap.set(nums[i], i);
    }

    return []; // Return an empty array if no solution is found
}

// Example usage:
const nums = [2, 7, 11, 15];
let sumArr = document.getElementById("sumarr")
for (let i = 0; i < numbers2.length; i++) {
    sumArr.innerHTML += numbers2[i] + " "
}
const target = 9;
let targetEle = document.getElementById("target")
targetEle.innerHTML = `The target to find sum of two : ${target}`;
const solutionEle = document.getElementById("solution");
const result = twoSum(nums,target);
for(let i = 0; i<result.length; i++){
    solutionEle.innerHTML+= result[i] + " "
}
console.log(twoSum(nums, target)); // Output: [0, 1]