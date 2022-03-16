function generateParenthesis(n: number): string[] {

    function generateImpl(left: number, right: number): string[] {
        let result: string[] = []

        if (left == 0) {
            if (right == 0) return result

            let str = ""
            for (let i = 0; i < right; i++) {
                str = str + ")"
            }
            result.push(str)
            return result
        }

        if (left == right) {
            //只能先取一个左括号
            return generateImpl(left - 1, right).map(value => {
                return "(" + value
            })
        }

        //left < right
        generateImpl(left - 1, right).forEach(value => result.push("(" + value))
        generateImpl(left, right - 1).forEach(value => result.push(")" + value))

        return result
    }

    return generateImpl(n, n)
}