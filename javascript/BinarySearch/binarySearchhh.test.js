'use strict';
const arrayBinary= require('./binarySearch');

describe('Testing array binary search', () => {
  it('should return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array', () => {
    expect(arrayBinary([4, 8, 15, 16, 23, 42],15)).toEqual(2);
    
  });
});