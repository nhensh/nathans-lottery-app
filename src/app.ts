import 'app.scss';
import generate, { sortOrder } from './lottery';

interface lotteryNumber { number: number, colour: string }

export class App {
  appName: string = 'Nathan\'s Lottery App!';
  ballsSorted: boolean = false;
  displayedNumbers: Array<lotteryNumber>;
  size: number = 6;
  startIndex: number;
  lotteryNumber: lotteryNumber;
  lotteryNumbers: Array<lotteryNumber> = generate(this.size, 1, 49);
  
  constructor() {
    this.displayedNumbers = [];
    this.startIndex = 0;
  }

  getNumber() {
    this.lotteryNumber = this.lotteryNumbers[this.startIndex];
    const nextIndex = this.startIndex + 1;
    this.startIndex = nextIndex;
    this.displayedNumbers.push(this.lotteryNumber);
  };

  sortOrder() {
    this.displayedNumbers = sortOrder(this.lotteryNumbers)
    this.ballsSorted = true;
  };

  reset() {
    this.displayedNumbers = [];
    this.startIndex = 0;
    this.ballsSorted = false;
    this.lotteryNumbers = generate(this.size, 1, 49);
  }
}
