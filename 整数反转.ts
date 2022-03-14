function reverse(x: number): number {
    if (x === 0) return x

    let multi = x > 0 ? 1 : -1
    function reverseImpl(positive: number): number {
        let nums: number[] = []
        let remain = positive
        while (remain > 0) {
            nums.push(remain % 10)
            remain = Math.floor(remain / 10)
        }

        return  nums.reduce((previousValue, currentValue) => {
            return previousValue * 10 + currentValue
        }, 0)
    }

    let result = reverseImpl(Math.abs(x)) * multi
    if (result > 2 ** 31 - 1) return 0
    if (result < -(2 ** 31)) return 0
    return result
}