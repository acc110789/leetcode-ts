function longestCommonPrefix(strs: string[]): string {
    if (strs.length == 0) return ""
    if (strs.length == 1) return strs[0]

    function match(ch: string, index: number): boolean {
        for (let j = 1; j < strs.length; j++) {
            let str = strs[j]
            let valid = index < str.length && str[index] === ch
            if (!valid) return false
        }
        return true
    }

    let result = ""
    let str = strs[0]
    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i)
        if (match(ch, i)) result = result + ch
        else break
    }
    return result
}