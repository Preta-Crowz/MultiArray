# MultiArray

[Deno Document](https://deno.land/x/multiarray/MultiArray.d.ts?doc=&s=default)  
**Don't trust "import" line on docs! Please read below!**

Allows to use multiple arrays as one array.  
Use this may reduce "few" memory usage, but access will slower and datas will fragmented.

## Please read

### Import with ES6
This is ES6 Module. You can not use `require()` to import it.  
Not all functions from Array was implemented for now.

### No `for..in`
MultiArray doesn't support `for..in`.  
Use `for..of` or `MultiArray.prototype.length` to iterate.

### `allowJS` should be false when useing generic.
If you are not using TS, you can ignore it.  
I have no idea why this happens.  
But you should set `allowJS` to false to use generic.

### This can slow your code
Not recommended to use it without understand its implement.  
It can make your program slower without any advantage on specific environments.

## Install

node.js
```shell
npm install multiarr
```

deno
```
no installation required (it will download from internet)
```

bun.js
```shell
bun install multiarr
```

## Usage

deno
```js
import MultiArray from 'https://deno.land/x/multiarray/MultiArray.js';
```

others
```js
import MultiArray from 'multiarr';
```

## Example

```js
import MultiArray from 'multiarr';
let single = [1, 2, 3, 4];
let square = [1, 4, 9, 16];
let cubic = [1, 8, 27, 64];
const arr = new MultiArray(single, square); // Work as [1, 2, 3, 4, 1, 4, 9, 16]
console.log(arr[6]) // Will log 9
arr.append(cubic) // Can add array to already created MultiArray
arr.remove(0) // Or remove array
console.log(arr[6]) // Will log 27
```
