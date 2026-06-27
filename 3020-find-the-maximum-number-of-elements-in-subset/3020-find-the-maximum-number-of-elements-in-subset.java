class Solution {
    public int maximumLength(int[] nums) {
        
        HashMap<Integer, Integer> freq = new HashMap<>();

        for (int num : nums) {
            freq.put(num, freq.getOrDefault(num, 0) +1);
        }

        int ans = 1;

        // Special handling for 1
        if(freq.containsKey(1)) {
            int ones = freq.get(1);
            ans = Math.max(ans, (ones % 2 == 0)? (ones-1) : ones);
        }

        for (int x : freq.keySet()) {
            if(x == 1) continue;

            int curr = x;
            int len = 0;

            while (freq.getOrDefault(curr, 0) >= 2) {
                len += 2;

                if(curr > 1000000000L / curr) break;

                curr *= curr;
            }

            if (freq.getOrDefault(curr, 0) == 1) {
                len++;
            }else {
                len -= 1;
            }

            ans = Math.max(ans, len);
        }

        return ans;
    }
}