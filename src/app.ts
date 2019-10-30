import generate from './lottery';

export class App {
  public appName: string = 'Nathan\'s Lottery App!';
  public lotteryNumbers: string[] = generate(6, 1, 49);
}
