"use strict";

const { partition, swap, quickSort } = require("./quickSort");

describe("Sorting and swapping", () => {
  it("tests quick sort iterative", () => {
    let arr = [7, -2, 4, 1, 6, 5, 0, -4, 2];
    swap(arr);
    expect(arr).toEqual([7, -2, 4, 1, 6, 5, 0, -4, 2]);
    console.log(arr);
  });




  it(" partition", () => {
    let arr = [7, -2, 4, 1, 6, 5, 0, -4, 2];
    partition(arr);
    expect(arr).toEqual([7, -2, 4, 1, 6, 5, 0, -4, 2]);
    console.log(arr);
  });
});
