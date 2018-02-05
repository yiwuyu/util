const getFileSize = (value = 0) => {
  const recursion = (size, index) => {
    const temp = size / 1024
    if (size < 1000) {
      return {size, index}
    } else {
      return recursion(temp, index + 1)
    }
  }
  let map = recursion(value, 0)
  let unitMap = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const index = map.size.toString().indexOf('.')
  if (index < 0) {
    // 无小数点
    return map.size + unitMap[map.index]
  } else {
    // 有小数点
    return parseFloat(map.size.toString().substring(0, index + 3)) + unitMap[map.index]
  }
}
