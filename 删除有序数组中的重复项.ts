
function removeDuplicates(nums: number[]): number {
    if (nums.length <= 1) return nums.length

    let lastValue = nums[0]
    let nextIndex = 1
    for (let i = 1; i < nums.length; i++) {
        const value = nums[i]
        if (value > lastValue) {
            nums[nextIndex] = value

            lastValue = value
            nextIndex++
        }
    }
    return nextIndex
}