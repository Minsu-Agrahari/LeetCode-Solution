class Solution {
    public int countMajoritySubarrays(int[] nums, int target) {

        int len = nums.length;
        int[] prefixSum = new int[len];

        for(int i=0; i<len; i++) {
            int val = (nums[i] == target) ? 1 : -1;

            if (i==0) {
                prefixSum[i] = val;
            }else
                prefixSum[i] = prefixSum[i-1] + val;
        }   

        int majorityCount = 0;

        for (int i=0; i<len; i++) {
            for (int j=i; j<len; j++) {

                int sum;

                if (i == 0) {
                    sum = prefixSum[j];
                }else{
                    sum = prefixSum[j] - prefixSum[i-1];
                }

                if (sum > 0){
                    majorityCount++;
                }
            }
        }

        return majorityCount;
    }
}