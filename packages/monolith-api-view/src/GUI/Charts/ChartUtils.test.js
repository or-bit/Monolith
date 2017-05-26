import ChartUtils from './ChartUtils';

/* eslint-disable no-unused-expressions */

describe('ChartUtils Test Suite', () => {
    describe('when testing isArrayOfStrings', () => {
        describe('with an array containing only strings', () => {
            it('should return true', () => {
                const array = [
                    'a',
                    '1',
                    '?',
                    '',
                ];
                expect(ChartUtils.isArrayOfStrings(array)).toBeTruthy();
            });
        });
        describe('with an array containing strings and numbers', () => {
            it('should return false', () => {
                const array = [
                    'a',
                    1,
                    '?',
                    '',
                ];
                expect(ChartUtils.isArrayOfStrings(array)).toBeFalsy();
            });
        });
        describe('with an object', () => {
            it('should return false', () => {
                const array = { test: 'example' };
                expect(ChartUtils.isArrayOfStrings(array)).toBeFalsy();
            });
        });
    });
    describe('when testing isArrayOfObjects', () => {
        describe('with an array containing only strings', () => {
            it('should return false', () => {
                const array = [
                    'a',
                    '1',
                    '?',
                    '',
                ];
                expect(ChartUtils.isArrayOfObjects(array)).toBeFalsy();
            });
        });
        describe('with an array containing strings and numbers', () => {
            it('should return false', () => {
                const array = [
                    'a',
                    1,
                    '?',
                    '',
                ];
                expect(ChartUtils.isArrayOfObjects(array)).toBeFalsy();
            });
        });
        describe('with an array containing 1 object', () => {
            it('should return false', () => {
                const array = [{ test: 'example' }];
                expect(ChartUtils.isArrayOfObjects(array)).toBeTruthy();
            });
        });
    });
});
