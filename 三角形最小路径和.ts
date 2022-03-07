//https://leetcode-cn.com/problems/triangle/

function minimumTotal(triangle: number[][]): number {
    let obj = {
        triangle: triangle,
        length: triangle.length,
        resultTree: [],

        init: function () {
            for (let i = 0; i < this.length; i++) {
                let row = this.triangle[i]
                this.resultTree.push(new Array(row.length))
            }
        },

        traverse: function (row: number, column: number): number {
            if (this.resultTree[row][column] !== undefined) return this.resultTree[row][column]

            let value = this.triangle[row][column]

            let currentResult: number
            if (this.hasElement(row + 1, column)) {
                currentResult = this.selectResult(this.traverse(row + 1, column) + value, currentResult)
            }
            if (this.hasElement(row + 1, column + 1)) {
                currentResult = this.selectResult(this.traverse(row + 1, column + 1) + value, currentResult)
            }
            if (currentResult === undefined) currentResult = value

            this.resultTree[row][column] = currentResult
            return currentResult
        },

        hasElement: function (row: number, column: number): boolean {
            let rowValid = row < this.length
            if (!rowValid) return false

            let rowArray = this.triangle[row]
            return column < rowArray.length
        },

        selectResult: function (result: number, old?: number): number {
            if (old === undefined) return result
            return Math.min(result, old)
        }
    }

    if (obj.length == 0) return 0
    obj.init()
    return obj.traverse(0, 0)
}
