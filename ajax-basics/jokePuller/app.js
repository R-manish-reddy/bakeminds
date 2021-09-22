document.querySelector('.get-jokes').addEventListener('click',pullJokes);

function pullJokes(e){
  
    const xhr = new XMLHttpRequest();
    var numOfJokes = document.getElementById('number').value;
    xhr.open('GET',`http://api.icndb.com/jokes/random/${numOfJokes}`,true)
    
    xhr.onload = function(){
        const jokesList = JSON.parse(this.responseText)
        let output = '';
        if(this.status === 200){
          
            jokesList.value.forEach(function(joke){
                output += `<li>${joke.joke}</li>
                `
            })
        }else
        {
            output += '<li>Something went wrong</li>';
        }

        document.querySelector('.output').innerHTML = output;

    }
    xhr.send();


    e.preventDefault();
}