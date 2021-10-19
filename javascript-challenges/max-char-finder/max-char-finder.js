function max(str) {
  var strArr = str.trim().split("");
  var cleanStrArr = strArr.filter((a) => a !== " ");
  // console.log(cleanStrArr);
  var count = {};
  var ans;
  for (let i = 0; i < cleanStrArr.length; i++) {
    var char = cleanStrArr[i];
    if (!count[char]) {
      count[char] = 0;
    }
    count[char]++;
  }

  var trashArr = [];
  for (j in count) {
    trashArr.push(count[j]);
  }

  for (x in count) {
    if (Math.max(...trashArr) === count[x]) {
      ans = x;
    }
  }
  console.log(ans);
}
max("hii");
