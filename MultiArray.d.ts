type ArrayAny<T> = Array<T> | MultiArray<T>

export default class MultiArray<T> {
    constructor (...args: ArrayAny<T>[])

    /**
     * Get element from MultiArray.
     * 
     * @param index - Index of element from MultiArray.
     * 
     * @throws TypeError
     * Thrown when argument is not integer.
     * 
     * @returns Returns element that was on index. If not exist, returns nothing.
     */
    get (index: number): T

    /**
     * Add new body to MultiArray.
     *
     * @param args - One or more of Array or MultiArray to added on body.
     * 
     * @throws TypeError
     * Thrown when argument is not Array or MultiArray.
     * 
     * @returns New length of body.
     */
    append (...args: ArrayAny<T>[]): number

    /**
     * Remove body from MultiArray.
     *
     * @param index - Index of body from MultiArray.
     * 
     * @throws TypeError
     * Thrown when argument is not integer.
     * 
     * @throws RangeError
     * Thrown when index is out of range.
     * 
     * @returns New length of body.
     */
    remove (index: number): number

    /**
     * Length of MultiArray, or sum of length from body.
     */
    length: number

    /**
     * Length of MultiArray body, or count of referenced arrays.
     */
    bodyLength: number

    /**
     * Found object from MultiArray and returns its index.
     * 
     * @param obj - Object to find.
     * 
     * @returns Index of object in MultiArray. If not exist, returns -1.
     */
    indexOf (obj: T): number

    /**
     * Found object from MultiArray by filter and returns its index.
     * 
     * @param func - Filter to use.
     * 
     * @returns Index of object in MultiArray. If not exist, returns -1.
     */
    find (func: Function): number

    /**
     * Concat two MultiArray to get new MultiArray.
     * 
     * @param other - MultiArray to concat.
     * 
     * @throws TypeError
     * Thrown when argument is not MultiArray.
     * 
     * @returns New MultiArray with combined body.
     */
    concat (other: MultiArray<T>): MultiArray<T>

    toString (): string

    /**
     * Check the argument is MultiArray or not.
     * 
     * @param arr - Object to check.
     */
    static isMultiArray (arr:any): boolean

    [Symbol.iterator](): Generator<T>;
}