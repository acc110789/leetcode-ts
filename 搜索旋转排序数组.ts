function search(nums: number[], target: number): number {
    if (nums.length <= 0) return -1
    if (nums.length == 1) return nums[0] == target ? 0 : -1

    function searchOrder(start: number, end: number): number {
        if (nums[start] == target) return start
        if (nums[end] == target) return end
        if ((end - start) <= 1) return -1

        const middle = Math.floor((start + end) / 2)
        if (nums[middle] == target) return middle

        return nums[middle] < target ? searchOrder(middle, end) : searchOrder(start, middle)
    }

    function searchUnOrder(start: number, end: number): number {
        if (nums[start] == target) return start
        if (nums[end] == target) return end
        if ((end - start) <= 1) return -1

        const middle = Math.floor((start + end) / 2)
        if (nums[middle] == target) return middle

        if (nums[start] < nums[middle]) {
            //前一半正常
            if (nums[start] < target && target < nums[middle]) {
                return searchOrder(start, middle)
            } else {
                return searchUnOrder(middle, end)
            }
        } else {
            //后一半正常
            if (nums[middle] < target && target < nums[end]) {
                return searchOrder(middle, end)
            } else {
                return searchUnOrder(start, middle)
            }
        }
    }

    if (nums[0] < nums[nums.length - 1]) return searchOrder(0, nums.length - 1)
    else return searchUnOrder(0 , nums.length - 1)
}