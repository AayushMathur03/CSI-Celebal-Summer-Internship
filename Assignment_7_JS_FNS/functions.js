// 1. Join array elements into a string
function joinArrayElements() {
    const myColor = ["Red", "Green", "White", "Black"];
    
    // Different ways to join
    console.log("=== Array Joining ===");
    console.log("Default join:", myColor.join());  // "Red,Green,White,Black"
    console.log("Comma join:", myColor.join(","));  // "Red,Green,White,Black"
    console.log("Plus join:", myColor.join("+"));   // "Red+Green+White+Black"
}

// 2. Find most frequent element in array
function findMostFrequent() {
    const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    const frequency = {};

    for (let item of arr1) {
        frequency[item] = (frequency[item] || 0) + 1;
    }
    
    let maxCount = 0;
    let mostFrequent = null;
    
    for (let item in frequency) {
        if (frequency[item] > maxCount) {
            maxCount = frequency[item];
            mostFrequent = item;
        }
    }
    
    console.log("=== Most Frequent Element ===");
    console.log(`${mostFrequent} (${maxCount} times)`);
}

// 3. Truncate string to specified length
function truncateString(str, length) {
    return str.slice(0, length);
}

// 4. Capitalize first letter of each word
function capitalizeWords(str) {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
}

// 5. Find elements between two numbers (exclusive)
function arrBetween(num1, num2, arr) {
    return arr.filter(num => num > num1 && num < num2);
}

// 6. Find index of element in array
function findIndex(arr, element) {
    return arr.indexOf(element);
}

console.log("JavaScript Assignment Solutions");
console.log("================================");

joinArrayElements();

findMostFrequent();

console.log("=== String Truncation ===");
console.log(truncateString("Robin Singh", 4));

console.log("=== Capitalize Words ===");
console.log(capitalizeWords('js string exercises')); 

console.log("=== Array Between ===");
console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7])); 
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6])); 
console.log(arrBetween(7, 32, [1, 2, 3, 78])); 

console.log("=== Find Index ===");
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));