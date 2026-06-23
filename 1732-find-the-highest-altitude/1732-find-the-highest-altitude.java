class Solution {
    public int largestAltitude(int[] gain) {
        
        int currAltitude = 0;
        int maxAltitude = 0;

        for(int elem : gain) {

            currAltitude = elem + currAltitude;
            maxAltitude = Math.max(maxAltitude, currAltitude);
        }

        return maxAltitude;
    }
}