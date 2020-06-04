// 不借助临时变量，进行两个整数的交换
// 输入 a = 2, b = 4 输出 a = 4, b =2
// 这种问题非常巧妙，需要大家跳出惯有的思维，利用 a , b进行置换。

// 主要是利用 + - 去进行运算，类似 a = a + ( b - a) 实际上等同于最后 的 a = b;

function swap(a, b) {
    b = b - a;
    a = a + b;
    b = a - b;
    return [a,b];
}

console.log(swap(2,5));