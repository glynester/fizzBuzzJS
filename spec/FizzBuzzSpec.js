describe("FizzBuzz", function() {

  var fizzBuzz;

  describe("prints numbers",function(){
    it("divisible by 15", function(){
	// fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.play(15)).toEqual('Fizzbuzz');
    });
  });
});



// describe('multiples of 3', function() {
//     it('fizzes for 3', function() {
//       expect(fizzBuzz.play(3)).toEqual('fizz');
//     });
