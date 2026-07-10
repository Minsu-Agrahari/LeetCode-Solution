class Solution {
    public int lengthOfLongestSubstring(String s) {
        
        if(s.length() == 0) return 0;

        int len = 1;

        for(int i=0; i<s.length(); i++){

            HashSet<Character> set = new HashSet<>();

            for(int j=i; j<s.length(); j++){
                
                char ch = s.charAt(j);

                if(set.contains(ch)){
                    System.out.print("1 - ");
                    // len = Math.max(len, set.size());
                    break;
                }else if(!set.contains(ch)){
                    // System.out.print("2 - ");
                    set.add(ch);
                }
                
                len = Math.max(len, set.size());

                if(s.length() == set.size()){
                    // System.out.print("3 - ");
                    return set.size();
                }
            }

            // System.out.println(set);
        }

        return len;
    }
}