function maxArea(height: number[]): number {
    if (height.length <= 1) return 0

    let i = 0
    let j = height.length - 1

    let result = (j - i) * Math.min(height[i], height[j])
    while (i < j) {
        let current = (j - i) * Math.min(height[i], height[j])
        result = Math.max(result, current)

        if (height[i] <= height[j]) {
            //移动i
            let k = i + 1
            while (k < j) {
                if (height[k] > height[i]) break
                k++
            }
            i = k
        } else {
            //移动j
            let k = j - 1
            while (i < k) {
                if (height[k] > height[j]) break
                k--
            }
            j = k
        }
    }


    return result
}