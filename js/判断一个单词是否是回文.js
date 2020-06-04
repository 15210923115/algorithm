// “回文串”是一个正读和反读都一样的字符串，比如“level”或者“noon”等等就是回文串。

let str = 'level';
// let str = 'noon';
let split = str.split('');
let len = split.length;

// 方法1
function isPalindrome1() {
    for (var i = 0, j = len - 1; i <= j; i++, j--) {
        if (i === j) {
            return '是1';
        } else {
            if (split[i] !== split[j]) {
                return '不是';
            }
        }
    }
    return '是2';
}

// 方法2
function isPalindrome2() {
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome1());

console.log(isPalindrome2());
