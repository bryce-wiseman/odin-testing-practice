function analyzeArray(arr) {

    let sortedArr = arr.sort(function(a, b) {return a - b})
    
    let lengthVal = sortedArr.length
    let minVal = sortedArr[0]
    let maxVal = sortedArr[sortedArr.length - 1]
    let averageVal = sortedArr[Math.floor(sortedArr.length / 2)]
        
    let results = {
        average: averageVal,
        min: minVal,
        max: maxVal,
        length: lengthVal
    }

    return results
}

module.exports = analyzeArray;