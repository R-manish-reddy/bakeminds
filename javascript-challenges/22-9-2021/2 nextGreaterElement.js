// Given an array, write a function to print the Next Greater Element (NGE) for
// every element. The Next greater Element for an element x is the first greater
// element on the right side of x in the array. Elements for which no greater
// element exist, consider the next greater element as -1.
// Examples:
// 1. For an array, the rightmost element always has the next greater
// element as -1.
// 2. For an array that is sorted in decreasing order, all elements have
// the next greater element as -1.
// 3. For the input array [4, 5, 2, 25], the next greater elements for each
// element are as follows.
// Element NGE
//  4 --> 5
//  5 --> 25
//  2 --> 25
//  25 --> -1
// 4. For the input array [13, 7, 6, 12}, the next greater elements for each
// element are as follows.
//  Element NGE
//  13 --> -1
//  7 --> 12
//  6 --> 12
//  12 --> -1



let ngeFinder = function (arr) {
    var nxt, i, j;
    for (i = 0; i < arr.length; i++) {
        nxt = -1
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                nxt = arr[j]
                break;
            }
        }
        console.log(nxt)

    }
}
ngeFinder([11, 13, 21, 3])