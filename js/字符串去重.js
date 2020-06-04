// 给出一段英文连续的英文字符窜，进行字符串去重

// 输入 ： afjghdfraaaasdenas 

// 输出 ： afjghdrsen

let str = 'afjghdfraaaasdenas';

let obj = {};

for (let s of str ) {
    if (obj[s]) {
        obj[s] += 1;
    } else {
        obj[s] = 1;
    }
}

// console.log(obj);
console.log(Object.keys(obj).join('')); 