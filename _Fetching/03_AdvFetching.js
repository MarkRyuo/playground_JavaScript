


async function getData(){
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu", {
            method: "GET"
        })

        if(!response.ok){
            throw new Error(`Http Error Status: ${response.status}`)
        }

        return response.json() // parse to json 

    } catch (error) {
        console.error(`Fetch Failed: ${error.message}`)
    }
}

async function main() {
    
    const data = await getData() ;

    console.log(data)
}

main()