// a) Define sum function on array which should return sum of all digits in array
// Input= > [5,3,2,1].sum()
// Output => 11
// Input= > [9,8].sum()
// Output => 17

let x=0;
Array.prototype.sum= function(){
  this.map(a=>x+=a);
  return x;
}
console.log([9,8].sum())

