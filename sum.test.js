// This line tells jest which file to test
//const sum = require('./sum')
// This line dictates the result we expect
// test('adds 1 + 2 to equal 3', ()=> {
//     expect(sum(1,2)).toBe(3)
// })

// const stringLength = require('./sum')
//  test('String length should be greater than than or equal to 1',()=> {
//      expect(stringLength('lanzz')).toBeGreaterThanOrEqual(1)
//  })
//  test('String length should be less than or equal to 10',()=> {
//      expect(stringLength('lanzz')).toBeLessThanOrEqual(10)
//  })
//  const reverseString = require('./sum')
// test('return reverse of entered string',()=>{
//     expect(reverseString('lanzz')).toEqual('zznal')
// })
const Calculator = require('./sum')
describe('check calculator add methods', () => {
    test('a + b should be greater than 1', () => {
        expect(Calculator.add(1, 2)).toBeGreaterThan(1)
    })
    test('a + b should not be undefined', () => {
        expect(Calculator.add(1, 2)).not.toBeUndefined()
    })
    test('a + b should be truthy', () => {
        expect(Calculator.add(1, 2)).not.toBeFalsy()
    })
    test('1 + 2 should be equal to 3', () => {
        expect(Calculator.add(1, 2)).toBe(3)
    })
})
describe('check calculator subtract methods', () => {
    test('a + b should be greater than 1', () => {
        expect(Calculator.subtract(5, 3)).toBeGreaterThan(1)
    })
    test('a + b should not be undefined', () => {
        expect(Calculator.subtract(5, 4)).not.toBeUndefined()
    })
    test('a + b should be truthy', () => {
        expect(Calculator.subtract(5, 4)).not.toBeFalsy()
    })
    test('5 - 4 should be equal to 1', () => {
        expect(Calculator.subtract(5, 4)).toBe(1)
    })
})
describe('check calculator divide methods', () => {
    test('a / b should be greater than 3', () => {
        expect(Calculator.divide(20, 4)).toBeGreaterThan(3)
    })
    test('a / b should not be undefined', () => {
        expect(Calculator.divide(5, 4)).not.toBeUndefined()
    })
    test('a / b should be truthy', () => {
        expect(Calculator.divide(5, 4)).not.toBeFalsy()
    })
    test('5 / 4 should be 5', () => {
        expect(Calculator.divide(20, 4)).toBe(5)
    })
})
describe('check calculator multiply methods', () => {
    test('a * b should be greater than 1', () => {
        expect(Calculator.multiply(5, 3)).toBeGreaterThan(1)
    })
    test('a * b should not be undefined', () => {
        expect(Calculator.multiply(5, 4)).not.toBeUndefined()
    })
    test('a * b should be truthy', () => {
        expect(Calculator.multiply(5, 4)).not.toBeFalsy()
    })
    test('5 * 4 should be equal to 1', () => {
        expect(Calculator.multiply(5, 4)).toBe(20)
    })
})

describe('return string but with the first letter in upper case', () => {
    test('capitalize(lanzz) should return Lanzz', () => {
        expect(Calculator.capitalize('lanzz')).toBe('Lanzz')
    })
})