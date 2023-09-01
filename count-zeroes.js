function countZeroes(arr) {
    let firstZero = findFirstZero(arr);
    if(firstZero === -1) return 0;

    return arr.length - firstZero;  
}

function findFirstZero(arr, lIdx = 0, rIdx = arr.length - 1) {
    if(rIdx >= lIdx) {
        let mIdx = lIdx + Math.floor((rIdx - lIdx) / 2);
        if((mIdx === 0 || arr[mIdx - 1]) && arr[mIdx] === 0) {
            return mIdx;
        } else if (arr[mIdx] === 1) {
            return findFirstZero(arr, mIdx + 1, rIdx);
        }
        return findFirstZero(arr, lIdx, mIdx - 1);
    }
    return -1;
}

module.exports = countZeroes