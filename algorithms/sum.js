// Given an array if intergers, calculate the cumulative sum of the array

// Solution 1
// const sum = [1,3,5,7].reduce((acc, cur) => acc + cur, 0);

// Solution 2
export function cumSum(arr) {
  let total = 0;
  
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    total += arr[i];
  } 
  
  return total;
}

console.log('sum: ', cumSum([1,3,5,7]));