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