// Return an array showing the cumulative sum at each index of an array of integers.

// Example-
// Input =>[1,3,5,7]

// Output=> [1, 4, 9, 16]
// Input =>[1]
// Output=> [1]
// Input =>[]
// Output=> []
// Input =>[1,2]
// Output=> [1,3]

var cumulativeSum = function (arr) {
    let i, result,sum;
    sum = arr[0]
    result = [];
    for (i = 0; i < arr.length; i++) {
        if (i == 0) {
            result.push(arr[i])
            continue
        }
     sum += arr[i]
     result.push(sum)
    }
    console.log(result)
}

cumulativeSum([1,4,3])