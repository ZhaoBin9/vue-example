export const def = function defineReactive(obj, key, value, enumerable = false) {
    Object.defineProperty(obj, key, {
        value,
        enumerable,
        configurable: true,
        writable: true
    })
}