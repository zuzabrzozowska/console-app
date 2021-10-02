const { expect } = require('@jest/globals');
const { validate, receiveItems, sellItems, changeSaldo, isDelivery } = require('./helpers');

it('return false if string is not equal to large i', () => {
	expect(isDelivery('hello')).toEqual(false)
	expect(isDelivery('S4')).toEqual(false)
	expect(isDelivery('S')).toEqual(false)
	expect(isDelivery('i')).toEqual(false)
	expect(isDelivery('I ')).toEqual(false)
	expect(isDelivery(null)).toEqual(false)
	expect(isDelivery()).toEqual(false)
})

it('return true if large i is passed in to isDelivery', () => {
	expect(isDelivery('I')).toEqual(true)
})

it('if there is no number in input, throw console error', () => {
	const input = 'Ihello'
	const inStock = 10
	const options = []

	global.console = {error: jest.fn()}

	changeSaldo(input, inStock, options)
	expect(console.error).toBeCalled()
})

it('if the number in input is 0, throw console error', () => {
	const input = 'I0'
	const inStock = 10
	const options = []

	global.console = {error: jest.fn()}

	changeSaldo(input, inStock, options)
	expect(console.error).toBeCalled()
})

it('if the number in input is -4, throw console error', () => {
	const input = 'I-4'
	const inStock = 10
	const options = []

	global.console = {error: jest.fn()}

	changeSaldo(input, inStock, options)
	expect(console.error).toBeCalled()
})

it('if in stock there is less items than what we want to sell, then show error', () => {
	const input = 'S5'
	const inStock = 1
	const options = []

	global.console = {error: jest.fn()}

	changeSaldo(input, inStock, options)
	expect(console.error).toBeCalled()
})

it('if input is I3 it should add 3 items to current stock and return 4', () => {
	const input = 'I3'
	const inStock = 1
	const options = []

	expect(changeSaldo(input, inStock, options)).toEqual(4)
})

test('when you sell 4 items, and you have 10 in stock, then you should be left with 6', () => {
	expect(sellItems(4, 10)).toBe(6);
});

test('when you get 4 items, and you have 10 in stock, it should return 14', () => {
	expect(receiveItems(4, 10)).toBe(14);
});

it('if the amount is not a number, return false', () => {
	expect(validate('hello')).toEqual(false)
})

it('if the amount is not a number, return false', () => {
	expect(validate('=')).toEqual(false)
})

it('if the amount is a whitespace, return false', () => {
	expect(validate(' ')).toEqual(false)
})

it('if the amount is null, return false', () => {
	expect(validate(null)).toEqual(false)
})

it('if the amount is false, return false', () => {
	expect(validate(false)).toEqual(false)
})

it('if no amount, return false', () => {
	expect(validate()).toEqual(false)
})

it('if amount is not integer, return false', () => {
	expect(validate(10.5)).toEqual(false)
})

it('if amount is lower than 1, return false', () => {
	expect(validate(0)).toEqual(false)
})

it('if amount is lower than 1, return false', () => {
	expect(validate(-33)).toEqual(false)
})

it('if amount is lower than 1, return false', () => {
	expect(validate(-3.1)).toEqual(false)
})
