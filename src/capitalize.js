function capitalize(string) {
    let str2arr = string.split('')
    let caps = str2arr[0].toUpperCase()
    str2arr[0] = caps
    let arr2str = str2arr.join('')
    return arr2str;
  }

module.exports = capitalize;