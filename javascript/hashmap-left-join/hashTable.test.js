"use strict";

const {Hashmap} = require("./hashTable");
const leftJoin = require('./leftJoin')


describe("left join", () => {
  let test1 = new Hashmap(300);
  let test2 = new Hashmap(300);
  let test3 = new Hashmap(300);
  let test4 = new Hashmap(300);

  test1.add("fond", "enamored");
  test1.add("wrath", "anger");
  test1.add("diligent", "employed");
  test1.add("outift", "grab");
  test1.add("guide", "usher");

  test2.add("fond", "averse");
  test2.add("wrath", "delight");
  test2.add("diligent", "idle");
  test2.add("guide", "follow");
  test2.add("flow", "jam");

  it("return the correct left join data ", () => {
      let expexted=[
        
            [ 'guide', 'usher', 'follow' ],
            [ 'outift', 'grab', null ],
            [ 'diligent', 'employed', 'idle' ],
            [ 'wrath', 'anger', 'delight' ],
            [ 'fond', 'enamored', 'averse' ]
          ]
          
      console.log(leftJoin(test1, test2));
    expect(leftJoin(test1, test2)).toEqual(expexted);
  });

  it("return empty array if the left hash table is empty ", () => {
    expect(leftJoin(test3, test2)).toStrictEqual([]);
  });

  it("return null for the second value if no match in the right hashtabel", () => {
    expect(leftJoin(test1, test4)[0][2]).toStrictEqual(null);
  });
});