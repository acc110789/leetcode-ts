function isValid(s: string): boolean {
    const tokens: string[] = []

    function isLeft(ch: string) {
        return ch == '(' || ch == '{' || ch == '['
    }

    function isRight(ch: string) {
        return ch == ')' || ch == '}' || ch == ']'
    }

    function match(left: string, right: string) {
        return (left == '(' && right == ')') ||
            (left == '[' && right == ']') ||
            (left == '{' && right == '}')
    }

    for (let i = 0; i < s.length; i++) {
        const ch = s.charAt(i)
        if (isLeft(ch)) {
            tokens.push(ch)
            continue
        }
        if (isRight(ch)) {
            const last = tokens[tokens.length - 1]
            if (!match(last, ch)) return false
            tokens.pop()
        }
    }

    return tokens.length == 0
}