// 起泡排序，别名“冒泡排序”，该算法的核心思想是将无序表中的所有记录，通过两两比较关键字，得出升序序列或者降序序列。
// 通过一趟趟的比较，一个个的“最大值”被找到并移动到相应位置，直到检测到表中数据已经有序，或者比较次数等同于表中含有记录的个数，排序结束，这就是起泡排序。

let arr = [38, 49, 65, 76, 13, 27, 49, 97];

let bubble = (arr) => {

    let temp;
    for (let i = 0; i<arr.length; i++) {
        for (let j = 0; j<arr.length - i; j++) {
            // 升序
            if (arr[j] > arr[j+1]) {
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    console.log(arr);
};

bubble(arr);