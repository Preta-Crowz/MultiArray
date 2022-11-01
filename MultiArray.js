/*********************************************
 *              MultiArray.js
 * Allows to use multiple arrays as one array
 *********************************************/

let inspect;
if (typeof process !== 'undefined') {
    const util = await import('util');
    if (process.isBun) {
        // bun
        inspect = "inspect";
    } else {
        // node
        inspect = util.inspect.custom;
    }    
} else {
    // deno
    inspect = Deno.customInspect;
}

class MultiArrayHandle {
    static get (target, prop) {
        if (typeof prop == 'symbol' || isNaN(prop)) {
            return Reflect.get(...arguments);
        }
        prop = parseInt(prop);
        return target.get(prop);
    }
}

export default class MultiArray {
    constructor () {
        this.body = [];
        this.append(...arguments);
        this.proxy = new Proxy(this, MultiArrayHandle);
        return this.proxy;
    }

    get (index) {
        MultiArray.checkIndex(index);
        for (let curr of this.body) {
            if (curr.length <= index) {
                index -= curr.length;
                continue;
            }
            return curr[index];
        }
    }

    append () {
        const args = [...arguments];
        if (!args.every(Array.isArray)) {
            for (let idx in args) {
                if (!Array.isArray(args[idx])) {
                    let type = typeof args[idx];
                    throw new TypeError(`Only array can be added : got ${type} on index ${idx}`);
                }
            }
        }
        this.body = this.body.concat(args);
        return this.bodyLength;
    }

    remove (index) {
        MultiArray.checkIndex(index);
        if (this.bodyLength <= index) throw new RangeError(`Body out of range : got ${index}, length is ${this.bodyLength}`);
        this.body.splice(index, 1);
        return this.bodyLength;
    }

    get length () {
        let sum = 0;
        for (let curr of this.body) {
            sum += curr.length;
        }
        return sum;
    }

    get bodyLength () {
        return this.body.length;
    }

    indexOf (obj) {
        let padd = 0;
        for (let curr of this.body) {
            let index = curr.indexOf(obj);
            if (index == -1) {
                padd += curr.length;
                continue;
            }
            return padd + index;
        }
        return -1;
    }

    find (func) {
        let padd = 0;
        for (let curr of this.body) {
            for (let index in curr) {
                index = parseInt(index);
                if (func(curr[index])) return padd + index;
            }
            padd += curr.length;
        }
        return -1;
    }

    toString () {
        return `MultiArray[${this.bodyLength}(${this.length})]`
    }

    [inspect] () {
        return this.toString();
    }

    static checkIndex (index) {
        if (!Number.isInteger(Number(index))) {
            throw new TypeError(`Index should be Number, got ${typeof index}`);
        }
    }
}