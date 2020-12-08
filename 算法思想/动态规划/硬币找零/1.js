// 最少硬币找零问题

class MinCoinChange {
    constructor(coins) {
        this.coins = coins;// 1
        this.cache = {};// 2
    }
    makeChange(amount) {
        let me = this;

        if (!amount) {// 3
            return [];
        }

        if (this.cache[amount]) {// 4
            return this.cache[amount];
        }
        
        let min = [], newMin, newAmount;

        for (let i = 0; i < this.coins.length; i++) {// 5

            let coin = this.coins[i];
            newAmount = amount - coin;// 6

            if (newAmount >= 0) {
                newMin = me.makeChange(newAmount);// 7
            }
            //      8                                9                                         10
            if (newAmount >= 0 && (newMin.length < min.length-1 || !min.length) && (newMin.length || !newAmount)) {
                min = [coin].concat(newMin);// 11
                console.log('new Min ' + min + ' for ' + amount);
                console.log(this.cache);
            }

        }

        return (this.cache[amount] = min);// 12
    }
}

let min = new MinCoinChange([2,5,10,20,50,100]);
console.log(min.makeChange(38));