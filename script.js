//your JS code here. If required.
function getNumbers() {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve([1, 2, 3, 4]);
		}, 3000)
	});
}

getNumbers().then(numbers =>{
	return new Promise((resolve, reject)=>{
		let evenNumber = numbers.filter(number => number % 2 === 0);
		setTimeout(()=>{
			resolve(evenNumbers);
		}, 1000)
	});
})

.then(evenNumbers => {
	return new Promise((resolve, reject)=>{
		let doubledNumbers = evenNumbers.map(number => number * 2);
		setTimeout(()=>{
			resolve(doubledNumbers);
		}, 2000)
	});
})

.then(doubledNumbers =>{
	let outputElement = document.getElementById('output');
	 outputElement.innerText = doubledNumbers.join(',');
});


