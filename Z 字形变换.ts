function convert(s: string, numRows: number): string {
    if (numRows <= 1) return s
    if (s.length <= 1) return s

    const mapArray: Array<Array<string>> = new Array<number>(numRows).fill(0).map(() => { return new Array<string>() })
    let ascend = true
    let nextMapIndex = 0

    let nextChIndex = 0

    while (nextChIndex < s.length) {
        mapArray[nextMapIndex].push(s.charAt(nextChIndex))
        nextChIndex++

        if (ascend) {
            if (nextMapIndex === numRows - 1) {
                nextMapIndex --
                ascend = false
            } else {
                nextMapIndex ++
            }
        } else {
            if (nextMapIndex === 0) {
                nextMapIndex ++
                ascend = true
            } else {
                nextMapIndex --
            }
        }
    }

    return mapArray.reduce((previousValue, currentValue) => { return previousValue + currentValue.join("") }, "")
}