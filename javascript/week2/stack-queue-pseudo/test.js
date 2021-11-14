'use strict';

const master = require('./stackwithpesudo');
const Pseudo = master.queue;
const Node = master.node;


describe('Testing enqueue function', () => {
  it('Should add values to the pseudoqueue', () => {
    const pseudo = new Pseudo;
    pseudo.enqueue(new Node(1));
    pseudo.enqueue(new Node(2));
    expect(pseudo.stack1.top.value.value).toEqual(2);
  });
});

describe('Testing dequeue function', () => {
    it('should dequeue an item from Queue',()=>{

    let queue=new Pseudo();
    queue.enqueue(10);
    queue.enqueue(14);
    queue.enqueue(12);
    queue.dequeue();
    expect(queue.stack1.top.value).toEqual(12);
    expect(queue.stack1.length).toEqual(3);

})});