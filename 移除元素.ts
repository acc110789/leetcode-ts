function removeElement(nums: number[], val: number): number {
    if (nums.length == 0) return 0
    if (nums.length == 1) return nums[0] == val ? 0 : 1

    let i = 0
    let j = nums.length - 1

    while (i < j) {
        while (i < j && nums[j] == val) j--

        while (i < j && nums[i] != val) i++

        if (i < j) {
            let tmp = nums[j]
            nums[j] = nums[i]
            nums[i] = tmp
        }
    }

    return nums[i] == val ? i : i + 1
}