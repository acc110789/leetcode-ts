
const dict = new Map<number, number>();

function climbStairs(n: number): number {
    if (n == 1) return 1
    if (n == 2) return 2

    if (dict.has(n)) return dict.get(n)

    let result = climbStairs(n - 2) + climbStairs(n - 1)
    dict.set(n, result)
    return result
}