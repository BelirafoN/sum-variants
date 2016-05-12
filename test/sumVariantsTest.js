/**
 * Developer: BelirafoN
 * Date: 08.04.2016
 * Time: 14:19
 */

"use strict";

const getSumVariants = require('../lib/sumVariants');
const assert = require('assert');

describe('getSumVariants functionality', () => {
    let targetSum = 10,
        sourceArr = [];

    beforeEach(() => {
        sourceArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    });

    it('Returned value is Array', () => {
        assert.ok(Array.isArray(getSumVariants([], targetSum)));
    });

    it('Each of variants is Array', () => {
        let result = getSumVariants(sourceArr, targetSum).every(variant => {
            return Array.isArray(variant);
        });
        assert.ok(result);
    });

    it('Sum of all variants is equal targetSum', () => {
        let result = getSumVariants(sourceArr, targetSum).every(variant => {
            return variant.reduce((sum, curr) => sum += curr, targetSum);
        });
        assert.ok(result);
    });

    it('Get all of impossible variants', () => {
        assert.equal(getSumVariants(sourceArr, targetSum).length, 18);
    });

    it('All variants is unique', () => {
        let variants = getSumVariants([1,2,3,4,5,5,2,4,1,8,4,5], targetSum),
            controlSet = new Set();

        variants.reduce((set, variant) => {
            controlSet.add(variant.sort());
        }, controlSet);

        assert.equal(variants.length, controlSet.size);
    });

    it('Support of negative values as summand', () => {
        let arr = [23, -13];
        assert.deepEqual(getSumVariants(arr, 10).sort(), [arr.sort()])
    });

    it('Support of double values as summand', () => {
        let arr = [.9, 0, 9.1];
        assert.deepEqual(getSumVariants(arr, 10), [[0.9, 9.1], [0.9, 9.1, 0]])
    });

    it('Support of numbers as strings', () => {
        let arr = [.9, 6, '4', 9.1];
        assert.deepEqual(getSumVariants(arr, 10), [[0.9, 9.1], [4, 6]])
    });

    it('Skip invalid summands', () => {
        let arr = [[], 5, 'summand', 5];
        assert.deepEqual(getSumVariants(arr, 10), [[5, 5]])
    });

    it('Support of doubles of summands', () => {
        let arr = [5, 5, -5, 15];
        assert.deepEqual(getSumVariants(arr, 10), [[5, 5], [-5, 15]])
    });

    it('Filtering of doubles of summands', () => {
        let arr = [5, 5, -5, 15];
        assert.deepEqual(getSumVariants(arr, 10, true), [[-5, 15]])
    });

});