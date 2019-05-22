#! /usr/bin/env node

function getParams() {
	let decimal = process.argv[2]
	let digits = process.argv[3]
	let accuracy = process.argv[4]

	if (decimal && digits && accuracy) {
		switch (decimal) {
			case 'pi':
				decimal = Math.PI
				break
			case 'e':
				decimal = Math.E
				break
			case 'sqrt2':
				decimal = Math.SQRT2
				break
			default:
				break
		}
		return approximate(decimal, digits, accuracy)
	} else {
		console.log(
			"Usage: node decimal-approximator.js [decimal to approximate] [max digits in fraction] [digits of accuracy]\n Tip: Can use 'pi', 'e', or 'sqrt2' for the decimal values of those constants."
		)
	}
}

function testApproximation(approximation, accuracy) {
	const remainder = approximation % 1
	return remainder < Math.pow(10, -accuracy)
}

function notMultipleOf(a, b) {
	return a % b !== 0
}

function approximate(decimal, digits, accuracy) {
	console.log(`Testing approximations with accuracy of ${Math.pow(10, -accuracy)}...`)
	const approximations = []
	function notDuplicate(divisor, dividend) {
		if (approximations.length === 0) return true
		return approximations.every(([ aS, aV ]) => notMultipleOf(divisor, aS) && notMultipleOf(dividend, aV))
	}
	for (let divisor = 1; divisor < Math.pow(10, digits); divisor++) {
		let dividend = divisor / decimal
		if (testApproximation(dividend, accuracy)) {
			let remainder = dividend % 1
			dividend -= remainder
			if (notDuplicate(divisor, dividend)) approximations.push([ divisor, dividend, remainder ])
		}
	}

	if (approximations.length > 0) {
		return approximations.map(
			([ divisor, dividend, remainder ]) =>
				`${divisor} / ${dividend} = ${divisor / dividend} ... R = ${remainder}`
		)
	} else {
		return 'No approximations found.'
	}
}

console.log(getParams())
