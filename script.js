// Chunk Array Exercise

// Given an array "arr" and a chunk size "size", return a chunked array. A chunked array contains the original elements in "arr", but consists 
// of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// Example 1:
//      Input: arr = [1,2,3,4,5], size = 1
//      Output: [[1],[2],[3],[4],[5]]
//      Explanation: The arr has been split into subarrays each with 1 element.

// PREP

// P - We are given an array (arr = [1,2,3,4,5]) and chunk size (size = 1). They want us to split that array into chunks of 1 (size = 1).
// R - Those chunks will be subarrays in the output i.e. [[1],[2],[3],[4],[5]]
// E - Another example could be arr = [1, 2, 3, 4, 5], size = 3. The output of that would look like [[1, 2, 3][4, 5]]. First subarray list will
//      have 3 elements, the other one would have only 2 because the arr only had 5 elements to begin with.
// P - To return the output, we should write a function to take in 2 parameters (arr, size). We would want to run a FOR loop to iterate each 
//         element in "arr". We'll create 2 empty arrays: 1 to store the resulting chunks and 1 to build the chunks. At each iteration, the loop should 
//          store the current element inside a subarray and append it in the final output line. A conditional statement would be required to ensure 
//          the iteration is equal chunk size and push it to the result array and reset the subarray for the next iteration. 




var chunk = function(arr, size) {
    const result = []; // empty array to store the resulting chunks
    let subarr = []; // empty subarray to build the chunks
  
    for (let i = 0; i < arr.length; i++) {
      subarr.push(arr[i]); // Add the current element of the input array to the subarray. push() method is used here to add new items to the end of an array. 
  
      if (subarr.length === size) {
        // If the subarray reaches the specified size, add it to the result array, and reset the subarray.
        result.push(subarr);
        subarr = [];
      }
    }
  
    if (subarr.length !== size) {  // if there are any remaining elements in the subarray, add it to the result.
      result.push(subarr);
    }
  
    return result; // Return the array of chunks.
  };
  
  const arr = [1, 2, 3, 4, 5]; 
  const size = 1; 
  const chunks = chunk(arr, size); 
  
  console.log(chunks); 