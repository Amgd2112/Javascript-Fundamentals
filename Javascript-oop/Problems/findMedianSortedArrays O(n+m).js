/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let allNums = merge(nums1, nums2);
    let totalLenth = nums1.length + nums2.length;

    if (totalLenth%2==0){
        let mid = totalLenth/2;
        return (allNums[mid - 1] + allNums[mid]) / 2;
    }
    return allNums[Math.floor(totalLenth/2)];
};

var merge = function(nums1, nums2){
    let len1 = nums1.length, len2 = nums2.length;
    let allNums = new Array(len1 + len2);

    let i = 0, j = 0, k = 0;
    while((i < len1) && (j < len2)){
        if(nums1[i] < nums2[j]){
            allNums[k] = nums1[i];
            i+=1;
        } else {
            allNums[k] = nums2[j];
            j+=1;
        }
        k+=1;
    }

    while(i < len1){
        allNums[k] = nums1[i];
        i+=1;
        k+=1;
    }

    while(j < len2){
        allNums[k] = nums2[j];
        j+=1;
        k+=1;
    }

    return allNums;
};
