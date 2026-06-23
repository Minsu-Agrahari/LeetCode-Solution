class Solution {
    public int maxIceCream(int[] costs, int coins) {
        
        Arrays.sort(costs);
        System.out.println(Arrays.toString(costs));

        int iceCream_count = 0;

        for (int cost : costs) {
            coins = coins - cost;
            
            if(coins >= 0 ) {
                // System.out.println(cost + " --- " + (coins-cost));
                iceCream_count++;
            }else break;
        }

        return iceCream_count;
    }
}