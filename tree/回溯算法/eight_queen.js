// 回溯算法解决八皇后问题

let Queenes = [0,0,0,0,0,0,0,0];
let counts = 0;

main();

function main() {
    eight_queen(0);
    console.log(`摆放方式有${counts}种`);
}

function eight_queen(line) {
    //在数组中为0-7列
    for (let list = 0; list < 8; list++) {
        //对于固定的行列，检查是否和之前的皇后位置冲突
        if (check(line, list)) {
            //不冲突，以行为下标的数组位置记录列数
            Queenes[line] = list;
            if (line==7) {
                //统计摆法的Counts加1
                counts++;
                //输出这个摆法
                print();
                //每次成功，都要将数组重归为0
                Queenes[line] = 0;
                return;
            }
            //继续判断下一样皇后的摆法，递归
            eight_queen(line+1);
            //不管成功失败，该位置都要重新归0，以便重复使用。
            Queenes[line] = 0;
        }
    }
}

function check(line, list) {
    for (let index = 0; index < line; index++) {
        let data = Queenes[index];
        if (list == data) {
            return 0;
        }
        if ((index+data) == (line+list)) {
            return 0;
        }
        if ((line-data) == (line-list)) {
            return 0;
        }
    }
    return 1;
}

function print() {
    console.log(`第${counts}个：`);
    
    for (let line = 0; line < 8; line++) {
        let str = '> ';
        let list;
        for (list = 0; list < Queenes[line]; list++) {
            str += String(0);
        }
        str += String('#');
        for (list = Queenes[line] + 1; list<8; list++) {
            str += String(0);
        }
        console.log(`${str}`);
    }

    console.log('\n');
}