'use strict '

const Stack  = require('./stack')

function Brackets(str) {
    let stack = new Stack()
    let arr = str.split('')//[(,)]
    let openBrackets = ['(', '[', '{']
    let closeBrackets = [')', ']', '}']

    let openBracket = '' // ( )
    let closeBracket = ''
    let result = true
    for (let i = 0; i < arr.length; i++) {
      if (openBrackets.includes(arr[i])) {
        stack.push(arr[i])
      }
      if (closeBrackets.includes(arr[i])) {
        openBracket = stack.pop()
        closeBracket = arr[i] 
        if (openBracket === '(' && closeBracket !== ')') {
          result = false
        }
        if (openBracket === '[' && closeBracket !== ']') {
          result = false
        }
        if (openBracket === '{' && closeBracket !== '}') {
          result = false} }
    }
    if (stack.top !== null) {
      result = false
    }
    return result
}
console.log('Mohammad Haroun test ==> trial1: {()} ==>',Brackets( '(){}'));


module.exports = Brackets