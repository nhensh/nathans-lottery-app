interface lotteryNumber { number: number, colour: string }

const inRange = (value: number, min: number, max: number) => {
  return value >= min && value <= max;
}

// TODO: change to switch statement or object literal lookup
const setColours = (value: number) => {
  if( inRange(value, 1, 9) ) {
    return 'red';
  } else if( inRange(value, 10, 19) ) {
    return 'blue';
  } else if( inRange(value, 20, 29) ) {
    return 'yellow';
  } else if( inRange(value, 30, 39) ) {
    return 'green';
  } else if( inRange(value, 40, 49) ) {
    return 'pink'; 
  }
};

export default function generate( size: number, lowest: number, highest: number ) {
	const numbers = [];
	while( numbers.length < size ) {
    const randomNumber = Math.floor(Math.random() * highest) + 1;
    if( !numbers.includes( randomNumber) ) {
      numbers.push( randomNumber );
    }
	}
	return numbers.map(n => { 
    return { number: n, colour: setColours(n)};
  });
}

export function sortOrder(numbers) {
  return numbers.sort((a, b) => a.number-b.number);
}
