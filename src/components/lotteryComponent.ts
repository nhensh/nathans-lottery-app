export class LotteryComponent {
  numbers = [];

  getNumbers(size, lowest, highest) {
    for(let i = 0; i < size; i++) {
      let add = true;
      const randomNumber = Math.floor(Math.random() * highest) + 1;
      for(var y = 0; y < highest; y++) {
        if(this.numbers[y] == randomNumber) {
          add = false;
        }
      }
      if(add) {
        this.numbers.push(randomNumber);
      } else {
        i--;
      }
    }
    let highestNumber = 0;
    for(let m = 0; m < this.numbers.length; m++) {
      for(let n = m + 1; n < this.numbers.length; n++) {
        if(this.numbers[n] < this.numbers[m]) {
          highestNumber = this.numbers[m];
          this.numbers[m] = this.numbers[n];
          this.numbers[n] = highestNumber;
        }
      }
    }
  }
}
