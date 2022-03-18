function search(nums: number[], target: number): number {
    if (nums.length <= 0) return -1
    if (nums.length == 1) return nums[0] == target ? 0 : -1

    function searchOrder(nums: number[], target: number, start: number, end: number): number {

    }

    function searchUnOrder(nums: number[], target: number, start: number, end: number): number {

    }

    if (nums[0] < nums[nums.length - 1]) return searchOrder(nums, target, 0, nums.length - 1)
    else return searchUnOrder(nums, target, 0 , nums.length - 1)

}