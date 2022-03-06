function generate(numRows: number): number[][] {
    let result: number[][] = []
    if (numRows < 1) return result

    result.push([1])
    if (numRows < 2) return result

    while (result.length < numRows) {
        let newRow: number[] = []
        let lastRow = result[result.length - 1]

        lastRow.forEach((value, index) => {
            if (index == 0) newRow.push(1)
            else newRow.push(lastRow[index] + lastRow[index - 1])
        })
        newRow.push(1)

        result.push(newRow)
    }

    return result
}