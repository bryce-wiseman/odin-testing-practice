function reverseString(string) {
    let str2arr = string.split('')
    let reversed = str2arr.reverse()
    let arr2str = reversed.join('')
    return arr2str;
  }

module.exports = reverseString;