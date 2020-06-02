// 快速排序

let arrs = [49, 38, 65, 97, 76, 13, 27, 49];

let quick = (arr, left, right) => {
    if (arr.length > 1) {
        let index = partition(arr, left, right);

        if (left < index - 1) {
            quick(arr, left, index - 1);
        }

        if (index < right) {
            quick(arr, index, right);
        }
    }
};

let partition = (arr, left, right) => {
    let pivot = arr[Math.floor((left+right)/2)];
    let i = left;
    let j = right;
    
    while (i <= j) {
        while (arr[i] < pivot) {
            ++i;
        }
        while (arr[j] > pivot) {
            --j;
        }
        
        if (i <= j) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            i++;
            j--;
        }
        
    }

    return i;// 这里返回i，作为下次分割数组的依据
};

quick(arrs, 0, arrs.length -1);

console.log(arrs);

/**
 * 快速排序算法的时间复杂度为 O(nlogn)，是所有时间复杂度相同的排序方法中性能最好的排序算法。
 */