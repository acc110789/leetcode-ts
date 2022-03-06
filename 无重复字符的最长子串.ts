function lengthOfLongestSubstring(s: string): number {
    let length = s.length
    if (length <= 0) return 0
    if (length == 1) return 1

    //length >= 2
    let startIndex = 0
    let endIndex = 1

    let resultCharSet = new Set<String>()
    resultCharSet.add(s.charAt(0))
    let result = 1

    while (endIndex < length) {
        let endChar = s.charAt(endIndex)
        if (resultCharSet.has(endChar)) {
            let startChar = s.charAt(startIndex)
            resultCharSet.delete(startChar)
            startIndex ++
        } else {
            resultCharSet.add(endChar)
            endIndex ++
        }
        result = Math.max(result, resultCharSet.size)
    }
    return result
}