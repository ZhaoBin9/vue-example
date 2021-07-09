export default class Dep {
  constructor() {
    this.subs = []
  }

  addSub(sub) {
    this.subs.push(sub)
  }

  depend() {
    if(Dep.target) {
      this.addSub(Dep.target)
    }

  }

  notify() {
    const subs = this.subs.slice()
    for(let i = 0; i < subs.length; i++) {
      console.log(subs, subs[i], i, 'update')
      subs[i].update()
    }
  }
}