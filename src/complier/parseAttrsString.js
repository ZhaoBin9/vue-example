export default function parseAttrsString(attrsString) {
  if(!attrsString) return []
  console.log(attrsString)
  return [
    { name: 'class', value: '测试1' },
    { name: 'id', value: '测试2' },
  ]
}