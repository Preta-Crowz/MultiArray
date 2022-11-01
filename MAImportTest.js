import MultiArray from './MultiArray.js';

async function check () {
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
    return inspect(ma) === "MultiArray[2(6)]";
}

const result = await check();
if (result) {
    console.log("Import test pass");
    process.exit(0);
} else {
    console.error("Import test failed!");
    process.exit(1);
}