import { def } from './utils'

export const arrayPrototype = Object.create(Array.prototype)
const arrayMethods = ['push', 'shift', 'unshift', 'splice']
arrayMethods.forEach(method => {
  const oldMethod = arrayPrototype[method]
  def(arrayPrototype, method, function() {
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = arguments
        break;
      case 'splice':
        console.log(Array.prototype, arguments)
        inserted = [].slice.call(arguments, 2)
        break
      default:
        break;
    }
    const result = oldMethod.apply(this, arguments)
    if (inserted) {
      this.__ob__.observeArray(inserted)
    }
    console.log(this)
    return result
  }, false)
  // arrayPrototype[method] = 
})
