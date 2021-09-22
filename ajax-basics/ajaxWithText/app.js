document.getElementById('button').addEventListener('click',getData);

function getData(){
   
     const  xhr = new XMLHttpRequest();
    
     xhr.open('GET','data.txt',true);
     console.log('ready state',xhr.readyState)
     xhr.onload = function(){
     console.log()
        if(this.status === 200){
            // console.log(this.status)
            // console.log(this.readyState)
            // console.log(this.responseText);
            document.getElementById('output').innerHTML= `<h1> ${this.responseText}</h1>`
        }
     }

xhr.send()
}