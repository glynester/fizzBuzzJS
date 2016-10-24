describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function(){
    fizzBuzz = new FizzBuzz();
  });

  describe("divisible by 5 and 3",function(){
    it("divisible by 15", function(){
      expect(fizzBuzz.play(15)).toEqual('Fizzbuzz');
    });
  });

  describe("divisible by 3", function(){
    it("divisible by 3", function(){
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });
  });

  describe("divisible by 5", function(){
    it("divisible by 5", function(){
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });
  });

});
