'use strict';
const HashTable = require("./hashTable");

const repeatedWord = (str) => {
  const hashTable = new HashTable(1024);
  let splittedWords = str
    .toLowerCase()
    .replace(/[^((a-z)& )]/gm, "")
    .split(" ");
  console.log(splittedWords);
  for (let i = 0; i < splittedWords.length; i++) {
    const index = hashTable.hash(splittedWords[i]);


    if (hashTable.get[index]) {
      return splittedWords[i];
    } else hashTable.add(splittedWords[i], 1);
  }
};
module.exports = repeatedWord;