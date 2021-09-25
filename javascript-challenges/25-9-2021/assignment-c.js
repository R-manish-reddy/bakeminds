// c) Define insert function on array which accepts first parameter as insert element and
// second parameter as index. Function should return an array after inserting value on
// the given index.
// Input=> [8,3,7,4].insert(9,2)
// Output=> [8,3,9,7,4]
// Input=> [7,2,9,5,3].insert(2,0)
// Output=> [2,7,2,9,5,3]

const arr = [1,2,3,4,5]
Array.prototype.insert = function(a,b){
x=this
this.splice(b,0,a)
return x
}
console.log(arr.insert(0,2))