import MultiArray from './MultiArray.js';

function check () {
    let arr1 = ['a', 'b', 'c', 'd']
    let arr2 = ['e', 'f']
    
    const ma = new MultiArray(arr1, arr2);
    const expected = ['a', 'b', 'c', 'd', 'e', 'f'];
    let i = 0;
    for (let c of ma) {
        if (c !== expected[i]) return;
        i++;
    }

    return true;
}

const result = check();
if (result) {
    console.log("Iter test pass");
    process.exit(0);
} else {
    console.error("Iter test failed!");
    process.exit(1);
}