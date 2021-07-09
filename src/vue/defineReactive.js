import observe from "./observe"
import Dep from './Dep'

export default function defineReactive(data, key, val) {
    if(arguments.length === 2) {
        val = data[key]
    }
    const dep = new Dep()
    let childOb = observe(val)
    Object.defineProperty(data, key, {
        get() {
            // console.log('访问' + key + '属性')
            if(Dep.target) {
                dep.depend()
                // if(childOb) {
                //     childOb.dep.depend()
                // }
            }
            return val
        },
        set(newVal) {
            if(val === newVal) return
            // console.log('改变' + key + '属性')
            observe(newVal)
            val = newVal
            dep.notify()
        },
        enumerable: true,
        configurable: true
    })
}