import parseAttrsString from "./parseAttrsString"

export default function parse(templateStr) {
  const stack1 = []
  const stack2 = [{ children: [] }]
  let index = 0
  let rest = ''
  // 开始标记
  const startRegExp = /^\<([a-z]+[1-6]?)(\s[^\<]+)?\>/
  // 结束标记
  const endRegExp = /^\<\/([a-z]+[1-6]?)\>/
  // 抓取结束标记前的文字
  const wordRegExp = /^([^\<]+)\<\/[a-z]+[1-6]?\>/

  while(index < templateStr.length - 1) {
    rest = templateStr.substring(index)
    if(startRegExp.test(rest)) {
      const [_, tag, attrsString] = rest.match(startRegExp)
      console.log('检测到开始标记', tag)
      stack1.push(tag)
      stack2.push({ tag, children: [], attrs: parseAttrsString(attrsString) })
      index += tag.length + 2
    } else if(endRegExp.test(rest)) {
      const tag = rest.match(endRegExp)[1]
      console.log('检测到结束标记', tag)
      let pop_tag = stack1.pop()
      if(tag === pop_tag) {
        const pop_arr = stack2.pop()
        if(stack2.length > 0) {
          stack2[stack2.length - 1].children.push(pop_arr)
        }
      } else {
        throw new Error(stack1[stack1.length - 1] + '标签没有闭合')
      }
      index += tag.length + 3
    } else if (wordRegExp.test(rest)) {
      const word = rest.match(wordRegExp)[1]
      if(!/^\s+$/.test(word)) {
        // 不是全空
        console.log('检测到文字', word)
        stack2[stack2.length - 1].children.push({ 'text': word, 'type': 3 })
      }
      index += word.length
    } else {
      index++
    }
  }

  return stack2[0].children[0]
  console.log(stack2)
}