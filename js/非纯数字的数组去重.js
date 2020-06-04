// 比如输入: [1,'a',24,true,'a',14,true,1,2] 
// 输出: [1,'a',24,true,14,2]
// 需要去掉重复的'a' 和 1 这两个元素。

let arr = [1,'a',24,true,'a',14,true,1,2];
// console.log(typeof JSON.stringify(arr));
let ret_arr = [];

for (let a of arr) {
    if (!ret_arr.includes(a)) {
        ret_arr.push(a);
    }
}

console.log(ret_arr);