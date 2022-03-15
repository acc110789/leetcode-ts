function isPalindrome(x: number): boolean {
    if (x < 0) return false
    if (x == 0) return true

    let data = x
    let rev = 0
    while (data > 0) {
        let mod = data % 10
        data = Math.floor(data / 10)
        rev = rev * 10 + mod
    }
    return rev == x
}