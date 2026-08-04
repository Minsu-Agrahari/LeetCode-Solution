class Solution {
    public List<Integer> findMissingElements(int[] nums) {
        
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;

        HashSet<Integer> set = new HashSet<>();

        for (int elem : nums) {
            min = Math.min (min, elem);
            max = Math.max (max, elem);

            set.add(elem);
        }

        ArrayList<Integer> list = new ArrayList<>();

        for(int i=min; i<=max; i++) {
            if(!set.contains(i)){
                list.add(i);
            }
        }

        return list;
    }
}