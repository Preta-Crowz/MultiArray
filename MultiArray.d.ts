export default class MultiArray {
    constructor (...args: Array<any>[])
    get (index: number): any
    append (...args: Array<Array|MultiArray>[]): number
    remove (index: number): number
    length: number
    bodyLength: number
    indexOf (obj: any): number
    find (func: Function): number
    concat (other: Array|MultiArray): MultiArray
    toString (): string
    static checkIndex (index: number): void
    static isMultiArray (arr:any): boolean
}