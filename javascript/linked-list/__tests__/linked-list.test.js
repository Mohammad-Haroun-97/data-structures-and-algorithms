'use strict';
  const LinkedList = require('../index');
describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();});

  it('Test Instantiation', () => {
    const ll = new LinkedList();

    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });


  it('Test Insertion', () => {
    const ll = new LinkedList();

    ll.insert('a');

    expect(ll.head.value).toEqual('a');
    expect(ll.head.next).toBeNull();
  });

  it('Test Head Property', () => {
    const ll = new LinkedList();

    ll.insert('a');
    ll.insert('b');

    expect(ll.head.value).toEqual('b');
    expect(ll.head.next.value).toEqual('a');
  });

  it('Test Multiple Insertions', () => {
    const ll = new LinkedList();

    ll.insert('a');
    ll.insert('b');
    ll.insert('c');

    expect(ll.head.value).toEqual('c');
    expect(ll.head.next.value).toEqual('b');
    expect(ll.head.next.next.value).toEqual('a');
  });

  it('Test Includes', () => {
    const ll = new LinkedList();

    ll.insert('a');
    ll.insert('b');
    ll.insert('c');

    expect(ll.includes('c')).toBe(true);
    expect(ll.includes('a')).toBe(true);
    expect(ll.includes('h')).toBe(false);
  });

  it('Test Reading All Node Values',()=>{
    let ll = new LinkedList();

    ll.insert('a');
    ll.insert(false);
    ll.insert(null);
    ll.insert('c');
    ll.insert('d');

    expect(ll.toString()).toBe('{d} -> {c} -> NULL -> {false} -> {a}');
  });

  it('it adds Multiple elements to the end of the list', () => {
    const ll = new LinkedList();
    ll.insert(1)
    ll.insert(3)
    ll.insert(2)
    ll.append(5)
    
  })
  it('it adds a new node before the last node', () => {
    const ll = new LinkedList();
    ll.insert(1)
    ll.insert(2)
    ll.insert(3)
    ll.insertBefore(5,2)
    
  })
  it('it adds a new node after the last node', () => {
    const ll = new LinkedList();
    ll.insert(1)
    ll.insert(2)
    ll.insert(3)
    ll.insertAfter(5,2)
   
  })






});