/**
 * 选择数组来保存栈里面的元素
 * items [] 栈用来存放元素的地方
 * 栈要实现的几个方法：
 *  push：向栈顶添加元素
 *  pop：移除并返回栈顶的元素
 *  peek：返回栈顶的元素
 *  isEmpty：栈是否是空的，如果是返回true
 *  clear：清空栈
 *  size：栈里面元素的个数
 *  print：打印栈里面所有的元素
 */

function Stack() {
    this.items = [];// 保存栈里的元素   
}

Stack.prototype.push = function (element) {
    this.items.push(element);
}

Stack.prototype.pop = function () {
    return this.items.pop();
}

Stack.prototype.peek = function () {
    return this.items[this.items.length -1];
}

Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
}

Stack.prototype.size = function () {
    return this.items.length;
}

Stack.prototype.clear = function () {
    this.items = [];
}

Stack.prototype.print = function () {
    console.log(this.items.toString());
}

let s = new Stack();

console.log(`初始化栈，并检查栈是否为空：${s.isEmpty()}`);

s.push(1);
s.push(2);
s.push(3);

console.log(`往栈里添加元素后，打印栈里面的元素为：`);

s.print();

console.log(`栈里面元素的个数：${s.size()}`);

console.log(`获取栈顶元素为：${s.peek()}`);

console.log(`移除栈顶的元素：${s.pop()}，移除栈顶后栈里面元素的个数为：${s.size()}`);

s.clear();

console.log(`清空栈后栈里面元素的个数为：${s.size()}`);

/**
 * 案例：十进制转二进制
 */

function divideBy2(decNumber) {
    let remStack = new Stack();
    let rem = null;
    let binaryString = [];

    while (decNumber > 0) {
        rem = decNumber % 2;
        remStack.push(rem);
        decNumber = Math.floor(decNumber/2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}

console.log(divideBy2(10));
console.log(divideBy2(430));

/**
 * 案例：
 * 		十进制转换任意进制算法
 * 要点：
 * 		十进制转换成二进制时，余数是0或1；
 * 		十进制转换成八进制时，余数是0到7之间的数；
 * 		十进制转换成十六进制时，余数是0到9之间的数据加上A(10)、B(11)、C(12)、D(13)、E(14)、F(15)
 *		因此我们需要对栈中的数字做个转化才行，即代码中的digits变量
 */

function baseConverter(decNumber, base) {
    let remStack = new Stack(),
    rem,
    baseString = '',
    digits = '0123456789ABCDEF';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }

    return baseString;
}

// 十进制转换2进制
console.log('十进制转换2进制：');
console.log(baseConverter(24, 2));
console.log(baseConverter(512, 2));
console.log(baseConverter(1024, 2));
console.log(baseConverter(1002462, 2));

// 十进制转换8进制
console.log('十进制转换8进制：');
console.log(baseConverter(24, 8));
console.log(baseConverter(512, 8));
console.log(baseConverter(1024, 8));
console.log(baseConverter(1002462, 8));

// 十进制转换16进制
console.log('十进制转换16进制：');
console.log(baseConverter(24, 16));
console.log(baseConverter(512, 16));
console.log(baseConverter(1024, 16));
console.log(baseConverter(1002462, 16));