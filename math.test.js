import { describe } from 'vitest';
import { add, subtract } from './math';

describe('Addition tests', () => {
    it('should add two numbers', () => {
        const sumArray = [1, 2];
        expect(add(sumArray)).toEqual(3);
    });
    
    it('should add three numbers', () => {
        const sumArray = [1, 2, 3];
        expect(add(sumArray)).toEqual(6);
    });
    
    it(`should add negative numbers`, () => {
        const sumArray = [-1, -2, -3];
        expect(add(sumArray)).toEqual(-6);
    });
    
    it(`should add floating point numbers`, () => {
        const sumArray = [0.1, 0.2];
        expect(add(sumArray)).toEqual(0.30000000000000004);
    });
});

describe('Subtract tests', () => {
    it('should subtract two numbers', () => {
        const subArray = [1, 2];
        expect(subtract(subArray)).toEqual(-3);
    });    
});
