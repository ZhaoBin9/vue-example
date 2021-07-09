export default function parseAttrsString(attrsString) {
  if(!attrsString) return []
  let isYinHao = false
  let point = 0
  let result = []
  for(let i = 0; i < attrsString.length; i++) {
    const char = attrsString[i]
    if(char === '"') {
      isYinHao = !isYinHao
    } else if(char === ' ' && !isYinHao) {
      if(!/^\s*$/.test(attrsString.substring(point, i))) {
        result.push(attrsString.substring(point, i).trim())
        point = i
      }
    }
  }

  result.push(attrsString.substring(point).trim())

  result = result.map(item => {
    const [_, name, value] = item.match(/^(.+)="(.+)"$/)

    return {
      name,
      value
    }
  })
  return result
}