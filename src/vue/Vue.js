import Complie from "./Complie";
import observe from './observe'
import Watcher from "./Watcher";

export default class Vue {
  constructor(options) {
    this.$options = options || {}
    this._data = options.data || undefined
    observe(this._data)
    this.__initData()
    new Complie(options.el, this)
    this._initWatch()
  }

  __initData() {
    const self = this
    Object.keys(this._data).forEach(key => {
      Object.defineProperty(self, key, {
        get() {
          return self._data[key]
        },
        set(newVal) {
          self._data[key] = newVal
        }
      })
    })
  }

  _initWatch() {
    const self = this
    const watch = this.$options.watch
    for(const key in watch) {
      new Watcher(this._data, key, watch[key])
    }
  }
}