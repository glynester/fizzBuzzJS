describe("FizzBuzz", function() {

  var fizzBuzz;

  describe("prints numbers"){
    it("divisible by 15", function(){
	fizzBuzz = new FizzBuzz();
      expect(isDivisibleByFifteen(15)).toBe(true);
    });
  });
});
