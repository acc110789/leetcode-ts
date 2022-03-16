function divide(dividend: number, divisor: number): number {

    function divideImpl(dividend: number, initDivisor: number): number {
        if (dividend < initDivisor) return 0
        if (dividend == initDivisor) return 1


        let result = 0
        let divisor = initDivisor
        const initMulti = 1
        let multi = initMulti

        while (dividend >= divisor) {
            result += multi
            dividend = dividend - divisor

            divisor = divisor + divisor
            multi = multi + multi

            if (dividend < divisor) {
                multi = initMulti
                divisor = initDivisor
            }
        }
        return result
    }

    let sig = 1
    if (dividend < 0) sig = -sig
    if (divisor < 0) sig = -sig

    let raw = divideImpl(Math.abs(dividend), Math.abs(divisor))
    raw = sig > 0 ? raw : -raw

    let result = raw
    if (raw < -(2 ** 31) || raw > (2 ** 31 - 1)) {
        result = 2 ** 31 - 1
    }
    return result
}