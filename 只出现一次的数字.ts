function singleNumber(nums: number[]): number {
    let result = 0
    for (let index in nums) {
        result = result ^ nums[index]
    }
    return result
}