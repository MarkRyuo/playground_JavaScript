/*
  How This Works:
  1. We use the Fetch API to call data from the Pokémon API (PokeAPI).
  2. fetch() sends a GET request to the given URL — returns a Promise.
  3. If the response is successful (status 200), we parse it as JSON.
  4. Then we extract the Pokémon name and log it in the console.
  5. If there’s an error (like 404 or no internet), it’s caught in .catch().
  6. .finally() runs whether success or fail — great for cleanup/logging.
*/

//Get
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(`Pokémon Name: ${data.forms[0].name}`);
  })
  .catch(error => {
    console.error(`Fetch failed: ${error.message}`);
  })
  .finally(() => {
    console.log("Fetch operation complete ");
  });


/**
 * Remind this always:
 * fetch()
 * response & request
 * data 
 * throw new Error 
 * !response.ok 
 * response.status
 * response.json 
 */