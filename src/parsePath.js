export default function parsePath(str) {
  const strList = str.split('.')
  return (obj) => {
    for(let i = 0; i < strList.length; i++) {
      obj = obj[strList[i]]
    }
    return obj
  }
}