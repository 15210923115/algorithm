// 插入排序：直接插入排序函数
// 很多初学者所说的插入排序，实际上指的就是直接插入排序算法，插入排序算法还包括折半插入排序、2-路插入排序，表插入排序和希尔排序等
let arr = [3,1,7,5,2,4,9,6,8,25,100,32,1023];

// 我自己写的方法： 没有原地修改数组
// function insertion () {
//     let retarr = [];
//     for (let i=0; i<arr.length; i++) {

//         let item = arr[i];

//         if (i===0) {
//             retarr.push(item);
//         } else if (i===1) {
//             if (item >= retarr[0]) {
//                 retarr.push(item);
//             } else {
//                 retarr.unshift(item);
//             }
//         } else {
//             for (let j=0; j<i; ++j) {
//                 if (j === 0 && item < retarr[j]) {// 第一个元素
//                     retarr.unshift(item);
//                     j = i;
//                 } else if (item === retarr[j]) {
//                     retarr.splice(j, 0, item);
//                     j = i;
//                 } else if (item > retarr[j] && item < retarr[j+1]) {
//                     retarr.splice(j+1, 0, item);
//                     j = i;
//                 } else if (j === i-1) {// 最后一个元素
//                     retarr.push(item);
//                     j = i;
//                 }
//             }
//         }
        
//     }
    
//     console.log(retarr);
// }

// insertion();

// 书上写的方法：原地修改数组
function insertion () {
    let length = arr.length, j, temp;
    
    for (let i=1; i<length; i++) {
        if (arr[i] < arr[i-1]) {// 若第 i 个元素大于 i-1 元素则直接插入（不用管了，让它在原地不动）；反之，需要找到适当的插入位置后再插入。
            j = i;
            temp = arr[i];
            while (j>0 && arr[j-1] > temp) {// 采用顺序查找方式找到插入的位置，在查找的同时，将数组中的元素进行后移操作，给插入元素腾出空间
                arr[j] = arr[j-1];
                j--;
            }
            arr[j] = temp;// j是递减的，插入到正确位置
        }
    }
}

insertion();

console.log(arr);