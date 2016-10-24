function FizzBuzz(){
}

FizzBuzz.prototype.play = function(number) {
  if (this.isDivisibleBy(15, number)) {
    return 'Fizzbuzz';
  }
}

FizzBuzz.prototype.isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
}
