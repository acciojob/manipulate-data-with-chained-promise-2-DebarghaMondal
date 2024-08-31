// Function to return a promise resolving with the array after 3 seconds
function getArrayPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

// Function to filter out odd numbers and return the result after 1 second
function filterOddNumbers(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredArray = arr.filter(num => num % 2 === 0);
            updateOutput(`Filtered (even numbers): ${filteredArray}`);
            resolve(filteredArray);
        }, 1000);
    });
}

// Function to multiply even numbers by 2 and return the result after 2 seconds
function multiplyEvenNumbers(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multipliedArray = arr.map(num => num * 2);
            updateOutput(`Multiplied (even numbers * 2): ${multipliedArray}`);
            resolve(multipliedArray);
        }, 2000);
    });
}

// Function to update the text of the HTML element with the ID "output"
function updateOutput(text) {
    const outputElement = document.getElementById('output');
    if (outputElement) {
        outputElement.textContent = text;
    } else {
        console.error('Element with ID "output" not found');
    }
}

// Main function to execute the promise chain
function processArray() {
    getArrayPromise()
        .then((arr) => filterOddNumbers(arr))
        .then((filteredArray) => multiplyEvenNumbers(filteredArray))
        .catch((error) => {
            console.error('Error processing array:', error);
        });
}

// Execute the function
processArray();
