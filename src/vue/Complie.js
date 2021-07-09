export default class Complie {
  constructor(el, vue) {
    this.$vue = vue
    this.$el = document.querySelector(el)

    if(this.$el) {
      const $fragment = this.node2Fragment(this.$el)

      this.complie($fragment)

      this.$el.appendChild($fragment)
    }
  }

  node2Fragment(el) {
    const fragment = document.createDocumentFragment()
    let child

    while(child = el.firstChild) {
      fragment.appendChild(child)
    }

    return fragment
  }

  complie(el) {
    const childNodes = el.childNodes
    const self = this
    const reg = /\{\{(.*)\}\}/

    childNodes.forEach(node => {
      const text = node.textContent
      console.log(node, node.nodeType, text)

      if(node.nodeType === 1) {
        self.complieElement(node)
      } else if(node.nodeType === 3 && reg.test(text)) {
        const [_, name] = text.match(reg)
        this.complieText(node, name)
      }
    })
    console.log(el)
  }

  complieElement(node) {
    const nodeAttrs = node.attributes;

    [].slice.call(nodeAttrs).forEach(attr => {
      const attrName = attr.name
      const value = attr.value
      const dir = attrName.substring(2)

      if(attrName.indexOf('v-') === 0) {
        if(dir === 'model') {
          console.log('发现了model指令', a)
        } else if(dir === 'if') {
          console.log('发现了if指令', a)
        }
      }
    })
  }

  complieText(node, name) {
    console.log('text', this.getVueVal(this.$vue, name))
    node.textContent = this.getVueVal(this.$vue, name)
  }

  getVueVal(vue, exp) {
    let val = vue
    exp = exp.split('.')
    exp.forEach(name => {
      val = val[name]
    })

    return val
  }
}