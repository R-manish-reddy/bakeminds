//Convert the given number into a roman numeral.

function convertToRoman(num) {
    
    var romanValues ={
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
    };
    
    var roman =''
    for(let key in romanValues ){
       // console.log(romanValues[key])
       
       while(num >= romanValues[key] ){
           roman= roman+key
           num=num-romanValues[key]
       }
    }
    console.log(roman)
 return roman
}

convertToRoman(551);










