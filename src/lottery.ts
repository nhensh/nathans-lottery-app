const generate = (size, lowest, highest) => {
	const numbers = [];
	for(var i = 0; i < size; i++) {
		var add = true;
		var randomNumber = Math.floor(Math.random() * highest) + 1;
		for(var y = 0; y < highest; y++) {
			if(numbers[y] == randomNumber) {
				add = false;
			}
		}
		if(add) {
			numbers.push(randomNumber);
		} else {
			i--;
		}
	}
  
	let highestNumber = 0;
	for(var m = 0; m < numbers.length; m++) {
		for(var n = m + 1; n < numbers.length; n++) {
			if(numbers[n] < numbers[m]) {
				highestNumber = numbers[m];
				numbers[m] = numbers[n];
				numbers[n] = highestNumber;
			}
		}
	}
  
	return numbers;
}