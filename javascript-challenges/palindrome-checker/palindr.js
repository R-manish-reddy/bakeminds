// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

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


