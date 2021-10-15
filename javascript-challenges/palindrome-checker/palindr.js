// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function palindrome(str) {
    const regex = /[^A-Za-z0-9]/g;
    let rawStrArr = str.toLowerCase().replace(regex, "");

   // let rawStrArr= str.toLowerCase().replace(/[^A-Za-z]/g, '')
    rawStrArr = rawStrArr.split('')
    let cleanStrArr = rawStrArr.filter((a)=>a!==' ')
    console.log(cleanStrArr)
    
    let reverseArr = [];
    for(let i = cleanStrArr.length-1;i>=0;i--){
        reverseArr.push(cleanStrArr[i])
    }
    console.log(reverseArr)
    
    if(cleanStrArr.toString() === reverseArr.toString()){
        return console.log(true) 
    }else{
         return console.log(false) 
    }
 // return true;
}

palindrome("mom ----       ");


