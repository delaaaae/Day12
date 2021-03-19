function sumFibonacci(num) {
    var a = 0, b = 1, f = 1, sum = 0;
  var arr = [0, 1];

  while (f <= num) {
    if (f % 2 == 1)
      sum += f;
    arr.push(f);
    f = a + b;
    a = b; 
    b = f;       
  }

  return sum;
      }


console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));

module.exports = sumFibonacci;