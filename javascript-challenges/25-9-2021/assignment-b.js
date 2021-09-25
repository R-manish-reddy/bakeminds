// b) Define swap function on array which accepts two indexes and swap elements
// present on the index.
// Input => [4,5,8,2].swap(0,1)
// Output => [5,4,8,2]
// Input => [4,5,8,2].swap(0,1)
// Output => [5,4,8,2]



Array.prototype.swap=function(a,b){
 y= this
 let x=this.splice(a,1,this[b])
 y.splice(b,1,...x)
return y;
}

console.log([1,2,3,4,5].swap(2,1));
