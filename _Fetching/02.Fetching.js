


function getData(){
    fetch("https://pokeapi.co/api/v2/pokemon/pikach")
        .then(response => {
            if(!response.ok) {
                throw new Error(`Http Error: Status ${response.status}`)
            }

            return response.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error(`Fetch Failed: ${error.message}`))
        .finally(() => {
            console.log("Fetch operation Complete!")
        })
}

getData()