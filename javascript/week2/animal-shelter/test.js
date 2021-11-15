'use strict'
const AnimalShelter=require('./animal-shelter')

// const stack = new Stack();
// const queue = new Queue();
// const stackQueue = new StackQueue();
const animalShelter = new AnimalShelter();



describe("Animal Shelter Test", () => {

 it("Can successfully enqueue multiple values into an animalShelter", () => {
    animalShelter.enqueue('dog');
    expect(animalShelter.rear.value).toEqual('dog');
    animalShelter.enqueue('cat');
    expect(animalShelter.rear.value).toEqual('cat');
  });

  it("Can successfully dequeue out of an animalShelter the expected value", () => {
    let popItem = animalShelter.dequeue('cat');
    expect(popItem.value).toEqual('dog');
  });

  
  it("Can successfully empty a queue after multiple animalShelter", () => {
   
    
    expect(animalShelter.dequeue('caat')).toBeNull();
  });

  it("Can successfully dequeue not pref in animalShelter", () => {
    animalShelter.enqueue('snack');
    let popItem = animalShelter.dequeue();
    expect(popItem).toEqual(null);
  });


});