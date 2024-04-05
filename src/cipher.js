function caesarCipher(string, shift) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let string2Arr = string.split('')
    let newArr = []
    let punc = /\p{P}/gu

    string2Arr.forEach(letter => {
        if (letter == ' ') {
            let space = ' '
            newArr.push(space)
        } else if (punc.test(letter) == true) {
            
            newArr.push(letter)
        } else {
            let letterNum = alphabet.indexOf(letter)
            letterNum += shift
            if (letterNum > 25) {
                letterNum = (letterNum % 26)
            }
            newArr.push(alphabet[letterNum])
        }
    });
    
    let arr2String = newArr.join('')
    return arr2String
  }

module.exports = caesarCipher;