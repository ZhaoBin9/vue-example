import observe from "./observe"

export default function defineReactive(data, key, val) {
    if(arguments.length === 2) {
        val = data[key]
    }
    observe(val)
    Object.defineProperty(data, key, {
        get() {
            console.log('访问' + key + '属性')
            return val
        },
        set(newVal) {
            if(val === newVal) return
            console.log('改变' + key + '属性')
            observe(newVal)
            val = newVal
        },
        enumerable: true,
        configurable: true
    })
}