import observe from './observe'
import Watcher from './Watcher'

const data = {
  a: {
    b: 12
  },
  m: [1, 2, 3]
}
observe(data)
new Watcher(data, 'a.b', (val, oldVal) => {
  console.log('wacther', val, oldVal)
})
data.a.b++
data.a.b++
data.a.b++
data.a.b++
data.a.b++
// data.m.splice(0, 1, 3)
// console.log('sss')