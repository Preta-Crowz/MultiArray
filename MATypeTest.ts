import MultiArray from './MultiArray.js';

function check (): boolean {
    let arr1:Array<string> = ['a', 'b', 'c', 'd']
    let arr2:Array<string> = ['e', 'f']
    let arr3:Array<string> = ['g', 'h', 'i', 'j', 'k']
    let arr4:Array<string> = ['l', 'm', 'n', 'o', 'p']
	const MA = new MultiArray(arr1, arr2);
	const MA2 = new MultiArray(arr3, arr4);
	const MA3 = MA.concat(MA2);
	if (!(MA3 instanceof MultiArray)) return false;
	if (!MultiArray.isMultiArray(MA3)) return false;
	return true;
}

const result = check();
if (result) {
    console.log("Typescript test pass");
    Deno.exit(0);
} else {
    console.error("Typescript test failed!");
    Deno.exit(1);
}