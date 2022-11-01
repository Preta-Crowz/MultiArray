// This is not testcase!
// This is manual test to check its work
import MultiArray from './MultiArray.js';

let arr1 = ['a', 'b', 'c', 'd']
let arr2 = ['e', 'f']
let arr3 = ['g', 'h', 'i', 'j', 'k']
let arr4 = ['l', 'm', 'n', 'o', 'p']

const ma = new MultiArray(arr1, arr2, arr3);
console.log(`Length : ${ma.length}`)
console.log(`Body : ${ma.bodyLength}`)
console.log(`[2] = ${ma[2]} (expected : c)`);
console.log(`[7] = ${ma[7]} (expected : h)`);
ma.append(arr4);
console.log('added body')
console.log(`Length : ${ma.length}`)
console.log(`Body : ${ma.bodyLength}`)
console.log(`[7] = ${ma[7]} (expected : h)`);
console.log(`[12] = ${ma[12]} (expected : m)`);
ma.remove(1);
console.log('removed body');
console.log(`Length : ${ma.length}`)
console.log(`Body : ${ma.bodyLength}`)
console.log(`[5] = ${ma[5]} (expected : h)`);
console.log(`[10] = ${ma[10]} (expected : m)`);
arr3.push('q')
arr3.push('r')
console.log('added value to arr3');
console.log(`Length : ${ma.length}`)
console.log(`Body : ${ma.bodyLength}`)
console.log(`[5] = ${ma[5]} (expected : h)`);
console.log(`[10] = ${ma[10]} (expected : r)`);
console.log(`[12] = ${ma[12]} (expected : m)`);