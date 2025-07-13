function first(arr, n) {
  // If n is not provided, return the first element
  if (n === undefined) {
    return arr[0];
  }
  
  // If n is negative or zero, return empty array
  if (n <= 0) {
    return [];
  }
  
  // Return first n elements using slice
  return arr.slice(0, n);
}

// Test Data
console.log(first([7, 9, 0, -2]));        // 7
console.log(first([],3));                 // []
console.log(first([7, 9, 0, -2],3));      // [7, 9, 0]
console.log(first([7, 9, 0, -2],6));      // [7, 9, 0, -2]
console.log(first([7, 9, 0, -2],-3));     // []