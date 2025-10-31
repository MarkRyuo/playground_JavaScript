

//Static Vanilla Js Fetching

fetch("http://sample/v1/api", {
    method: "GET"
})
    .then(response => {
        
        if(!response.ok) throw new Error(`http error status: ${response.status}`)
        return response.json() // Parse the json data
    })
    .then(data => {
        
        cons
    }) // data
    .catch() // catch the error
    .finally() // Always log