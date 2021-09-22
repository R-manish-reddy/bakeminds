var isValid = function(string) {

    const map = new Map();
    const stack = [];

    map.set(')','(');
    map.set('}','{');
    map.set(']','[');


    for(let i = 0; i<string.length;i++){
        var curr_val = string[i];
        var peek = stack[stack.length-1];

        if(map.has(curr_val) && map.get(curr_val)===peek){
             stack.pop();
        }else{

            stack.push(curr_val)
        }
    }
   if(stack.length ===0){
       console.log("valid")
   }else{console.log("not valid")}
   
    
};
isValid("(){}")