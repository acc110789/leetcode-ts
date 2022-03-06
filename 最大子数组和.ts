function maxSubArray(nums: number[]): number {
    const length = nums.length
    if (length == 0) return 0
    if (length == 1) return nums[0]

    //length > 1
    let dict: number[] = new Array(length)
    dict[0] = nums[0]

    let result: number = nums[0]

    for (let index = 1; index < length; index++) {
        let value = Math.max(dict[index - 1], 0) + nums[index]
        dict[index] = value
        result = Math.max(result, value)
    }

    return result
}