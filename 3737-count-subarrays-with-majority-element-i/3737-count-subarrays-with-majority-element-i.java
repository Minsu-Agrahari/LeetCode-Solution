// Algo
// Create all the subarray
// and count(target) and count(!target)
// finalCount elemnet with count(target) > count(!target)

class Solution {
    public int countMajoritySubarrays(int[] nums, int target) {
        
        int len = nums.length;
        int majorityCount = 0;

        for (int i=0; i<len; i++) {

            int targetCount = 0;
            int nonTargetCount = 0;
            
            for (int j=i; j<len; j++) {
                
                if (nums[j] == target) {
                        targetCount++;
                }else nonTargetCount ++; 
            

                if (targetCount > nonTargetCount) {
                    majorityCount++;
                }
                
            }
        }

        return majorityCount;
    }
}
