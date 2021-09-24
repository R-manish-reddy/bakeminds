// Write a function that removes first two elements of array and insert them after 4th element

// Example-
// Input =>moveElements([1,3,5,7])

// Output=> [5, 7, 1, 3]
// Input =>[]
// Output=> false
// Input =>[1]
// Output=> false
// Input =>[1,2]
// Output=> [null,null,1,2]
// Input =>[1,2,3]
// Output=> [3,null,1,2]
// Input =>[1,2,3,4]
// Output=> [3,4,1,2]
// Input =>[1,2,3,4,5,6]
// Output=> [3,4,1,2,5,6]

var moveElements = function (arr){
    let i, result;
    if(arr.length < 4 && arr.length > 1){
        for(i=arr.length-1;i<3;i++){
            arr.push(null)
        }
    }else{
        result = false
    }
   if(arr.length >3){
       const x = arr
       const y = arr.splice(0, 2)
         x.splice(2,0,...y)
         result = x     
     }

console.log(result)
}
moveElements([1,3])