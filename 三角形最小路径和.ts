//https://leetcode-cn.com/problems/triangle/

function minimumTotal(triangle: number[][]): number {
    return new MinimumTotal(triangle).get()
}

class MinimumTotal {


    constructor(private triangle: number[][]) {
    }

    get(): number {
        return 0
    }
}