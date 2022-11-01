// This is not testcase!
// This is manual test to check main file
import MultiArray from './MultiArray.js';

let inspect;
if (typeof process !== 'undefined') {
    let util = await import('util');
    if (process.isBun) {
        // bun
        util = util.default()
    }
    inspect = util.inspect;
} else {
    // deno
    inspect = Deno.inspect;
}

const ma = new MultiArray([0,1,2], [3,4,5]);
console.log(inspect(ma)); // MultiArray[2(6)]