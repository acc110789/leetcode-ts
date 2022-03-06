function maxProfit(prices: number[]): number {
    if (prices.length < 2) return 0

    let minPrices: number[] = new Array(prices.length)
    minPrices[0] = prices[0]

    let result = 0
    for (let i = 1; i < prices.length; i++) {
        result = Math.max(result, prices[i] - minPrices[i - 1])
        minPrices[i] = Math.min(minPrices[i - 1], prices[i])
    }
    return result
}