function twoSum(nums: number[], target: number): number[] {
    let map = new Map<number, number>();
    for(let key in nums) {
        let l = target - nums[key];
        if(map[l] !== undefined){
            return [map[l],key];
        }
        map[nums[key]] = key;
    }
}