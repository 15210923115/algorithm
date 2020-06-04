// 给出一段英文连续的英文字符窜，找出重复出现次数最多的字母

// 输入 ： afjghdfraaaasdenas 

// 输出 ： a

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
// console.log(Object.keys(obj).join('')); 字符串去重

let max = {
    key: '',
    value: 0
};

for (let i in obj) {
    if (obj[i] > max.value) {
        max = {
            key: i,
            value: obj[i]
        };
    }
}

console.log(max.key);