/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    let len = nums.length;
    let resultArr = [];

    nums.sort((a, b) => a-b);

    for (let fix=0; fix<len-1; fix++){

        // skip duplicate fixed values
        if (fix>0 && nums[fix] === nums[fix-1]){
            continue;
        }

        let i=fix+1;
        let j=len-1;

        // 2sum n1+n2+n3 = 0
        while(i<j) {
            let n1 = nums[fix];
            let n2 = nums[i];
            let n3 = nums[j];

            let sum = n1 + n2 + n3;

            if(sum === 0){
                let curr = [n1, n2, n3];
                resultArr.push(curr);

                // smiliar pass
                while((i+1) < len && i < j){
                    if(nums[i] === nums[i+1]) {
                        i++;
                    }else break;
                }
                while(j>0 && i < j){
                    if(nums[j] === nums[j-1]) {
                        j--;
                    }else break;
                }

                i++;
                j--;
            }else if(sum < 0){
                i++;
            }else{
                j--;
            }
        }
    }
    return resultArr;
};