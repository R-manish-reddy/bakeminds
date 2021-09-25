// d) Define delete function on array which search for an element in array and delete it.
// If element is not found, return the same array again.
// Input=> [8,3,7,4].delete(7)
// Output=> [8,3,4]
// Input=> [‘hello’,’z’,41,’well’].delete(‘z’)
// Output=> [‘hello’,41,’well’]
// Input=> [7,2,9,5,3].delete(2)
// Output=> [7,2,9,5,3]




Array.prototype.delete=function(b){
     delEle = this.findIndex(a=> a==b)
     if(delEle!= -1){
        this.splice(delEle,1)
        return this
     }else{
        return this 
     }
       
}
console.log(["aa","bb",32,"zz"].delete(32));

