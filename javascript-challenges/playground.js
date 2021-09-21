function diffArray(arr1, arr2) {
    var newArr = [];

    for (var i = 0; i < arr1.length; i++) {

        for (var j = 0; j < arr1.length; j++) {

            if (arr1[i] === arr2[j]) {


                continue;


            }
            if (arr1[i] !== arr2[j]) {

                if (j < arr1.length ) {
                    continue;
                }
            }
            if (arr1[i] !== arr2[j]) {


                newArr.push(arr1[i])

            }







        }


    }

    return console.log(newArr)

}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);