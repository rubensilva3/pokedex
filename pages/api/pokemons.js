//import response from './pokemons.json' assert {type: 'json'};

async function pokemons(req, res) {

  const response = require('./pokemons.json');
  
  //const pokemon_data = await response.json();
  //const pokemon_name = response;

  const date = new Date();
  res.json(response.Name[1]);

}

export default pokemons;






  