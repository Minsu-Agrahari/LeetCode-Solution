function countMajoritySubarrays(nums: number[], target: number): number {
    
    let len: number = nums.length;
    let majorityCount: number = 0;

    for (let i=0; i<len; i++) {
        
        let targetCount: number = 0
        let nonTargetCount: number = 0;

        for(let j=i; j<len; j++) {

            if(nums[j] == target) {
                targetCount++;
            }else {
                nonTargetCount++;
            }

            if (targetCount > nonTargetCount) {
                majorityCount++;
            }
        }
    }

    return majorityCount;
};