class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    add(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }

    values() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

///////////////////////////////////////////////////////////////

class HashTable {
    constructor(size) {
        this.map = new Array(size)
        this.size = size
    }

    // transform the keys into integer index
    hash(key) {
        // charCodeAt() => a string method that is used to retrieve a Unicode value for a character at a specific position in a string.
        let hash = key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0) * 599 % this.size;
        return hash;

        // return key.toString().length % this.size;
    }

    // add value to the hash table
    add(key, value) {
        // the index the hash integer for each bucket were data are stored
        let index = this.hash(key);
        // if this index is not exist create new one as array 
        if (!this.map[index]) {
            this.map[index] = [];
        }
        // pushing the value to new bucket with that choosen index 
        this.map[index].push([key, value])
        return index
    }

    // Search data
    get(key) {
        let index = this.hash(key);
        // for-of iretate over objects/strings/arrays
        // => It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

        // create an element in each iteration called bucket each bucket has it own hash key as fisrt index
        // if it's matches what we looking for it return the value in that bucket and the key to that bucket too.
        for (let element of this.map[index]) {
            // key
            if (element[0] === key) {
                // value
                return element[1]
            } else {
                return null
            }
        }
    }

    // same as get function instead return true or false in the key exists.
    contains(key) {
        let index = this.hash(key);

        if (!this.map[index]) return false

        for (let element of this.map[index]) {

            if (element[0] === key) {

                return true
            }
        }
    }
}

module.exports=HashTable




const hashTable = new HashTable();

hashTable.add('John', 'Boss');
hashTable.add('Cathy', 'The Real Boss');
hashTable.add('Zach', 'Kid 1');
hashTable.add('Allie', 'Kid 2');
hashTable.get('Zach'); // Kid 1
hashTable.contains('Zach') // true
hashTable.contains('Zak')  // false

console.log(hashTable.contains('Zach')) // true);
console.log(hashTable.get('Zach'));