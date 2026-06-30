class Solution {
    public int numberOfSubstrings(String s) {
        
        int i=0, j=0;
        int len = s.length(); 
        int wordCount = 0;
        int countA = 0, countB = 0, countC = 0;

        while (i<=j && j<len) {
            char ch = s.charAt(j);

            if (ch == 'a') countA++;
            if (ch == 'b') countB++;
            if (ch == 'c') countC++;

            while (countA >= 1 && countB >= 1 && countC >= 1) {
                wordCount += 1 + (len - (j+1));

                if (s.charAt(i) == 'a') countA--;
                if (s.charAt(i) == 'b') countB--;
                if (s.charAt(i) == 'c') countC--;
                
                i++;
            }
            j++;
        }

        return wordCount;
    }
}