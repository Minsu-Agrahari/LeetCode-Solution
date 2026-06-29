class Solution {
    public int numOfStrings(String[] patterns, String word) {
        
        // freq Map
        HashMap<String, Integer> freq = new HashMap<>();
        for (String pattern : patterns) {
            freq.put (pattern, freq.getOrDefault(pattern, 0) +1);
        }

        int patternCnt = 0;
        int len = word.length();

        for(int i=0; i<len; i++) {
        
            StringBuilder sb = new StringBuilder();

            for (int j=i; j<len; j++) {
                sb.append(word.charAt(j));
                String subWord = sb.toString();
                
                if (freq.containsKey(subWord)) {
                    patternCnt += freq.get(subWord);
                    freq.remove(subWord);
                }
            }

            sb.setLength(0);
        }

        return patternCnt;
    }
}