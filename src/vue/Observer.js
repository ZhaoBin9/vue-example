import defineReactive from "./defineReactive"
import { arrayPrototype } from "./array"
import observe from "./observe"
import { def } from './utils'

export default class Observer {
    constructor(value) {
        def(value, '__ob__', this, false)
        if(Array.isArray(value)) {
            Object.setPrototypeOf(value, arrayPrototype)
        } else {
            this.walk(value)
        }
    }

    walk(value) {
        for(const key in value) {
            defineReactive(value, key)
        }
    }

    observeArray(array) {
        for(let i = 0; i < array.length; i++) {
            observe(array[i])
        }
    }
}