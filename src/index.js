import observe from './observe'

const data = {
  a: {
    b: 12
  },
  m: [1, 2, 3]
}
observe(data)
data.a
data.m.splice(0, 1, 3)
// console.log('sss')