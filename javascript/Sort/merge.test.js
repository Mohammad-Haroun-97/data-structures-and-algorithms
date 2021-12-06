'use strict';

const { mergeSort } = require('./mergeSort');

describe('Merge Sort Method', () => {

    test('merge sort', () => {
        let arr = [4, 8, 7, 2, 11, 1, 3];
        // console.log(mergeSort(arr));
        expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 7, 8, 11]);
        console.log(arr);
    });

});