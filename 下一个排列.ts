/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    if (nums.length <= 1) return
    if (nums.length == 2) {
        const tmp = nums[0]
        nums[0] = nums[1]
        nums[1] = tmp
        return
    }

    let i = nums.length - 2
    while (i >= 0) {
        if (nums[i] >= nums[i + 1]) i--
        else break
    }

    if (i < 0) {
        nums.reverse()
        return
    }

    let j = nums.length - 1
    for (; true; j--) {
        if (nums[j] > nums[i]) break
    }
    const tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp

    //从i + 1开始进行reverse
    let m = i + 1
    let n = nums.length - 1
    while (m < n) {
        let tmp = nums[m]
        nums[m] = nums[n]
        nums[n] = tmp
        m++
        n--
    }
}