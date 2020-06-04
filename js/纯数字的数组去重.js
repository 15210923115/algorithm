// 比如输入: [1,13,24,11,11,14,1,2] 
// 输出: [1,13,24,11,14,2]
// 需要去掉重复的11 和 1 这两个元素。

let arr = [1,13,24,11,11,14,1,2];

let obj = {};

for (let a of arr) {// 这一步会将每个数组项的数字元素转化为obj对象的key，使用Object.keys(obj)遍历出来的key都是字符串，需要再将字符串转化为Number类型，所以这个方法只适用于纯数字的数组去重
    if (!obj[a]) {
        obj['_'+a] = true;// 加'_'的目的是防止数组元素被重新排序了
    }
}

// console.log(obj);

let ret = Object.keys(obj).map(o => { // 纯数字的数组去重
    return Number(o.replace('_', ''));
});

console.log(ret);