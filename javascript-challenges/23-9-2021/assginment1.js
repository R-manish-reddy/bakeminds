// Given an array arr[] of integers, find out the maximum difference between any two
// elements such that larger element appears after the smaller number.

// Examples :
// Input : arr = {2, 3, 10, 6, 4, 8, 1}
// Output : 8
// Explanation : The maximum difference is between 10 and 2.
// Input : arr = {7, 9, 5, 6, 3, 2}
// Output : 2
// Explanation : The maximum difference is between 9 and 7.

var diffFinder = function(arr){
     let i,result;
    maxVal =  Math.max(...arr) ;
    for(i=0;i<arr.length;i++){

        if(arr[i]< maxVal)
         result = arr[i]
         break

    }
    console.log(maxVal - result)
}

diffFinder([2,3,46,8,1])