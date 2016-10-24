function FizzBuzz(){
}

FizzBuzz.prototype.play = function(number) {
  if (this.isDivisibleBy(15, number)) {
    return 'FizzBuzz';
  }
}

FizzBuzz.prototype.isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
}

var fizzBuzz = new FizzBuzz();

for (var i = 1; i <= 100; i++) {
  console.log(fizzBuzz.play(i));
}
