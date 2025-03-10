// Function to filter even numbers from an array
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

// Example usage
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
