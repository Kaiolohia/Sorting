function merge(a1, a2) {
    let res = []
    let leftPointer = 0
    let rightPointer = 0
    while (leftPointer < a1.length && rightPointer < a2.length) {
        if (a1[leftPointer] < a2[rightPointer]) { 
            res.push(a1[leftPointer]);
            leftPointer++;
        } else {
            res.push(a2[rightPointer]);
            rightPointer++;
        }
    }
    while (leftPointer < a1.length) {
        res.push(a1[leftPointer]);
        leftPointer++
    }
    while (rightPointer < a2.length) {
        res.push(a2[rightPointer]);
        rightPointer++
    }
    return res
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let center = Math.floor(arr.length / 2)
    return merge(mergeSort(arr.slice(0,center)), mergeSort(arr.slice(center)))
}

module.exports = { merge, mergeSort};