import MultiArray from './MultiArray.js';

function check () {
    let arr1 = ['a', 'b', 'c', 'd']
    let arr2 = ['e', 'f']
    let arr3 = ['g', 'h', 'i', 'j', 'k']
    let arr4 = ['l', 'm', 'n', 'o', 'p']
    
    const ma = new MultiArray(arr1, arr2, arr3);

    if (ma.length !== 11 || ma.bodyLength !== 3 ||
        ma[2] !== 'c' || ma[7] !== 'h') return;
    ma.append(arr4); // test adding body
    if (ma.length !== 16 || ma.bodyLength !== 4 ||
        ma[7] !== 'h' || ma[12] !== 'm') return;
    ma.remove(1); // test removing body
    if (ma.length !== 14 || ma.bodyLength !== 3 ||
        ma[5] !== 'h' || ma[10] !== 'm') return;
    arr3.push('q') // test add value to
    arr3.push('r') // referenced array
    if (ma.length !== 16 || ma.bodyLength !== 3 ||
        ma[5] !== 'h' || ma[10] !== 'r' || ma[12] !== 'm') return;
    return true;
}

const result = check();
if (result) {
    console.log("Function test pass");
    process.exit(0);
} else {
    console.error("Function test failed!");
    process.exit(1);
}