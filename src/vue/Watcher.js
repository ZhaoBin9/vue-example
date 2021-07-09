import Dep from './Dep'
import parsePath from './parsePath'

let uid = 0

export default class Watcher {
  constructor(target, expression, callback) {
    this.id = uid++
    this.target = target
    this.getter = parsePath(expression)
    this.callback = callback
    this.value = this.get()
  }
  
  update() {
    this.run()
  }

  get() {
    Dep.target = this
    const obj = this.target
    let value
    try {
      value = this.getter(obj)
    } finally {
      Dep.target = null
    }

    return value
  }

  run() {
    this.getAndInovke(this.callback)
  }

  getAndInovke(callback) {
    const value = this.getter(this.target)
    if(value !== this.value || typeof value === 'object') {
      const oldValue = this.value
      this.value = value
      callback.call(this.target, value, oldValue)
    }
  }
}