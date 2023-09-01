function sortedFrequency(arr, val) {
    let firstIdx = findFirstVal(arr, val);
    if(firstIdx === -1) return firstIdx;
    let lastIdx = findLastVal(arr, val);
    return lastIdx - firstIdx + 1;
}

function findFirstVal(arr, val, leftIdx = 0, rightIdx = arr.length) {
    if(rightIdx >= leftIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if((midIdx === 0 || val > arr[mid - 1]) && arr[midIdx] === val) {
            return midIdx;
        } else if (val > arr[midIdx]) {
            return findFirstVal(arr, val, midIdx + 1, rightIdx);
        } else {
            return findFirstVal(arr, val, leftIdx, midIdx - 1);
        }
    }
    return -1;
}

function findLastVal(arr, val, leftIdx = 0, rightIdx = arr.length) {
    if(rightIdx >= leftIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if((midIdx === arr.length - 1 || val < arr[midIdx + 1]) && arr[midIdx] === val) {
            return midIdx;
        } else if (val < arr[midIdx]) {
            return findLastVal(arr, val, leftIdx, midIdx - 1);
        } else {
            return findLastVal(arr, val, midIdx + 1, rightIdx)
        }
    }
    return -1;
}

module.exports = sortedFrequency