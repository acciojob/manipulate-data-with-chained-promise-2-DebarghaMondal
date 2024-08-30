// Step 1: Create a function that returns a promise
function getNumbers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Step 2: Chain the promise to filter out odd numbers
getNumbers().then(numbers => {
  return new Promise((resolve, reject) => {
    let evenNumbers = numbers.filter(number => number % 2 === 0);
    setTimeout(() => {
      resolve(evenNumbers);
    }, 1000);
  });
})

// Step 3: Chain another promise to multiply even numbers by 2
.then(evenNumbers => {
  return new Promise((resolve, reject) => {
    let doubledNumbers = evenNumbers.map(number => number * 2);
    setTimeout(() => {
      resolve(doubledNumbers);
    }, 2000);
  });
})

// Step 4: Update the HTML element with the final array
.then(doubledNumbers => {
  let outputElement = document.getElementById('output');
  outputElement.innerText = doubledNumbers.join(', ');
});