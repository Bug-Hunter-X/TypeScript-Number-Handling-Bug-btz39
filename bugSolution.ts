function printNumber(num: number): void {
  if (num < 0) {
    throw new Error('Number must be non-negative.');
  } else if (num === 0) {
    console.log('Zero');
  } else if (num === 1) {
    console.log('One');
  } else if (num === 2) {
    console.log('Two');
  } else {
    console.log(`Number is ${num}`);
  }
}