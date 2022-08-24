function hasTargetSum(array, target) {
  // Write your algorithm here

  for(let i = 0; i < array.length; i++){
    const remainder = target - array[i]

    for(let j = 0; j < array.length; j++){

      /*
        ignore if it is self (for instance, target may be 10, and the
        first value in the array is 5 and there is no other 5 in the
        array. In this case, ignore the value
      */
      if(i === j){
        continue
      }

      if(array[j] == remainder){
        return true
      }
    }
  }

  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n^2), since there is one nested loop
*/

/* 
  Add your pseudocode here
  
  iterate through the array subtracting each value from target value
  and trying to find if the remainder is present in the rest of the 
  values
    if the remainder is present, return true. Otherwise return false
*/

/*
  Add written explanation of your solution here

  For two numbers to add to a certain value, one must be a remainder
  when the other is subtracted from the target value
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([76, 2, -2, 6, 12, 15], 13));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 53, 1, 5, 4], 9));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
