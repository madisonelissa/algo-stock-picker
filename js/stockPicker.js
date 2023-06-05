function stockPicker(prices) {
    let allIndexAndProfit = []
    let highestProfit = null
    let res
    //Calculate the profits from buying and selling each consecutive day, for each value
    for (i = 0; i < prices.length; i++) {
        for (j = i + 1; j < prices.length; j++) {
            allIndexAndProfit.push([i, j, prices[j]-prices[i]])
        };
    };
    //Find highest profit from allIndexAndProfit array
    for (i = 0; i < allIndexAndProfit.length; i++) {
        if (allIndexAndProfit[i][2] > highestProfit || highestProfit === null) {
            highestProfit = allIndexAndProfit[i][2]
            res = []
            res.push(allIndexAndProfit[i])
        }
    }
    //Return indexes and profit for most profitable trades, return 'No profitable trades' if highestProfit is negative
    if (highestProfit > 0) {
        return `[${res[0][0]}, ${res[0][1]}] for a profit of $${res[0][2]}`
    } else {
        return `No profitable trades.`
    }
};

console.log(stockPicker([17,3,6,9,15,8,6,1,10])) // => [1,4] for a profit of $12
console.log(stockPicker([45, 24, 35, 31, 40, 38, 11])) // => [1, 4] for a profit of $16
console.log(stockPicker([25, 1])) //No profitable trades.