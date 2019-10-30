export default function generate(size: number, lowest: number, highest: number) {
	const numbers = [];
	while(numbers.length < size) {
		const randomNumber = Math.floor(Math.random() * highest) + 1;
    if(!numbers.includes( randomNumber)) {
      numbers.push( randomNumber );
    }
	}
  
	let highestNumber = 0;
	for(let num of numbers) {
		for(let n = num + 1; n < numbers.length; n++) {
			if(numbers[n] < numbers[num]) {
				highestNumber = numbers[num];
				numbers[num] = numbers[n];
				numbers[n] = highestNumber;
			}
		}
	}
  
	return numbers;
}
