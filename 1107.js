fetch("https://pokeapi.co/api/v2/{endpoint}/")
   .then(response => response.json())
   .then(data => {console.log(data)})
    .catch(erro => console.log(erro))
