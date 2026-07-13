class Solution {
    public List<Integer> sequentialDigits(int low, int high) {
        
        String str = "123456789";
        int strLen = str.length();

        int lowLen = String.valueOf(low).length();
        int highLen = String.valueOf(high).length();

        ArrayList<Integer> result = new ArrayList<>();

        for(int i=lowLen; i<=highLen; i++) {
            for(int j=0; j<strLen; j++) {

                if(j+i > strLen) break;
                
                String strVal = str.substring(j, j+i);
                int digit = Integer.valueOf(strVal);

                if(digit >= low && digit <= high) {
                    result.add(digit);
                }else if(digit > high)break;

            }
        }

        return result;
    }
}