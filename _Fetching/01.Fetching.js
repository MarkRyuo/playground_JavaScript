

//Static Vanilla Js Fetching

fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
    method: "GET"
})
    .then(response => {
        
        if(!response.ok) throw new Error(`http error status: ${response.status}`) //check if response is ok
        return response.json() // Parse the json data
    })
    .then(data => {
        console.log(data)
    }) // data
    .catch(error => console.error(error.message)) // catch the error
    .finally() // Always log