package com.guigu.recursion;

/**
 * Created by yongbin
 * 2020/7/9 10:59 下午
 */
public class Queen8 {

    // 定义一个max表示共有多少个皇后
    int max = 8;
    // 定义数组array,表示皇后存放位置的结果，比如array = {0, 1, 3, 4, 7, 5, 2, 6}
    int array[] = new int[max];
    static int count = 0;
    static int judgeCount = 0;
    public static void main(String[] args) {
        Queen8 queen8 = new Queen8();
        queen8.check( 0 );
        System.out.println( count );
        System.out.println( judgeCount );
    }

    // 编写一个方法，放置第n个皇后
    // 特别注意：check是每次进入递归时，都有for循环
    private void check(int n) {
        if (n == max) { // n=8 表示放到了第9个皇后
            print();
            return;
        }
        // 一次放置皇后，并判断是否冲突
        for (int i = 0; i < max; i++) {
            // 先把当前这个皇后n放入到该行的第i列
            array[n] = i;
            // 判断当前放置第n个皇后到第i列时，是否冲突
            if (judge( n )) {
                // 接着放第n+1个皇后，即开始递归
                check( n + 1 );
            }
            // 如果冲突，就继续执行array[n]=i,即将本行的第n个皇后放置在本行的后移一个位置
        }
    }

    // 当我们摆放第n个皇后时，判断是否和前面n-1个是否冲突

    /**
     *
     * @param n 表示第n个皇后
     * @return
     */
    private boolean judge(int n) {
        judgeCount++;
        for (int i = 0; i < n; i++) {
            // 说明
            // 1、array[i] == array[n] 表示判断第n个皇后是否和前面第n-1个皇后在同一列
            // 2、Math.abs( n - i ) == Math.abs( array[i] - array[n] 表示判断第n个皇后是否和前面第n-1个皇后在同一斜线
            if (array[i] == array[n] || Math.abs( n - i ) == Math.abs( array[i] - array[n] )) {
                return false;
            }
        }
        return true;
    }


    // 写一个方法，将皇后摆放的位置打印出来
    private void print() {
        count++;
        for (int i = 0; i < array.length; i++) {
            System.out.print( array[i] + " " );
        }
        System.out.println();
    }
}