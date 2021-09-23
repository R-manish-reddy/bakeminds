// From a unsorted array, check whether there are any two numbers that will sum up to a given
// number?
// Examples:
// > sumFinder([6,4,3,2,1,7], 9);
// = true
// > sumFinder([6,4,3,2,1,7], 2);
// = false


let sumFinder = function (arr, sum) {
    let i, result;
    for (i = 0; i < arr.length; i++) {

        if (result === true) {
            break
        };

        for (j = 0; j < arr.length; j++) {

            if (i === j) {
                continue
            }
            if (arr[i] + arr[j] === sum) {
                result = true
                break;

            } else {
                result = false
            }

        }


    }
    console.log(result)
}

sumFinder([10, 2, 3, 4, 5], 15)
