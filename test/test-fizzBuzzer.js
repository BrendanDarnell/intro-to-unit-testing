
const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');


describe(('fizzBuzzer'),function(){

	it('should return fizz-buzz if divisible by 15',function(){

		const isFizzBuzz = [15,30,45,60];

		const isNotFizzBuzz = [9,10,16,222]

		isFizzBuzz.forEach((input)=>{
			const answer = fizzBuzzer(input);
			expect(answer).to.equal('fizz-buzz');
		})

		isNotFizzBuzz.forEach((input)=>{
			const answer = fizzBuzzer(input);
			expect(answer).to.not.equal('fizz-buzz');
		});
	});

	it('should return buzz if divisible by 5 and not 15',function(){

		const isBuzz = [5,10,20,25];

		const isNotBuzz = [8,9,12,30]

		isBuzz.forEach((input)=>{
			const answer = fizzBuzzer(input);
			expect(answer).to.equal('buzz');
		});

		isNotBuzz.forEach((input)=>{
			const answer = fizzBuzzer(input);
			expect(answer).to.not.equal('buzz');
		});
	});

	it('should return fizz if divisible by 3 and not 15',function(){

		const isFizz = [3,6,33,63];

		const isNotFizz = [5,15,17,25]

		isFizz.forEach((input)=>{
			const answer = fizzBuzzer(input);
			expect(answer).to.equal('fizz');
		});

		isNotFizz.forEach((input)=>{
			const answer = fizzBuzzer(input);
			expect(answer).to.not.equal('fizz');
		});
	});

	it('should return the input number if not divisible by 5 or 3',function(){

		const isNum = [7,11,16,44,-1];

		const isNotNum = [3,10,15,33,60]

		isNum.forEach((input)=>{
			const answer = fizzBuzzer(input);
			expect(answer).to.equal(input);
		});

		isNotNum.forEach((input)=>{
			const answer = fizzBuzzer(input);
			expect(answer).to.not.equal(input);
		});
	});



});