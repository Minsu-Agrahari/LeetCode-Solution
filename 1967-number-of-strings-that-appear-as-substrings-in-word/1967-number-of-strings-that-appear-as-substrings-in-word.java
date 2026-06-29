class Solution {
    public int numOfStrings(String[] patterns, String word) {
        
        int subCount = 0;

        for (String pattern : patterns) {
            if (word.contains(pattern)) {
                subCount ++;
            }
        }

        return subCount;
    }
}