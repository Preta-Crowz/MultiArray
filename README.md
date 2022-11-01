# MultiArray

Allows to use multiple arrays as one array.
Use this may reduce "few" memory usage, but access will slower and datas will fragmented.

## Please read

This is ES6 Module. You can not use `require()` to import it.
Not all functions from Array was implemented for now.

Not recommended to use it without understand it's implement.
It can make your program slower without any advantage on specific environments.

## Install

node.js
```shell
npm install multiarray
```

deno
```
no installation required (it will download from internet)
```

bun.js
```shell
bun install multiarray
```

## Usage

deno
```js
import MultiArray from 'https://deno.land/x/multiarray/MultiArray.js';
```

others
```js
import MultiArray from 'multiarray';
```

## Example

```js
import MultiArray from 'multiarray';
let single = [1, 2, 3, 4];
let square = [1, 4, 9, 16];
let cubic = [1, 8, 27, 64];
const arr = new MultiArray(single, square); // Work as [1, 2, 3, 4, 1, 4, 9, 16]
console.log(arr[6]) // Will log 9
arr.append(cubic) // Can add array to already created MultiArray
arr.remove(0) // Or remove array
console.log(arr[6]) // Will log 27
```