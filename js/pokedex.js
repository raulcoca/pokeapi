// En nuestro archivo JavaScript tendremos que seguir el siguiente flujo de funciones:

// Recuperar la lista con el id "podekex" y almacenarla en una variable.

// Ejecutar el fetch mediante una función recuperando los 150 primeros Pokemon a través de un bucle for e indicar el endpoint correcto de la API. En este caso los vamos a recuperar de la siguiente url: https://pokeapi.co/api/v2/pokemon/

// Hay que tener en cuenta que hay que especificarle a la url el valor que va a recuperar el bucle en cada iteración, ya que la información de cada Pokémon se almacenará en una url como estas:

// https://pokeapi.co/api/v2/pokemon/1

// https://pokeapi.co/api/v2/pokemon/2

// https://pokeapi.co/api/v2/pokemon/3

// Una vez recuperada la información tendremos que mapearla para imprimir los diferentes parámetros de los que compone. Para ello crearemos la constante pokemon dentro de la misma función en la que almacenaremos en diferentes valores la información recogida:

//    const pokemon = results.map((result) => ({
// 	            name: result.name,
// 	            image: result.sprites['front_default'],
// 	            type: result.types.map((type) => type.type.name).join(', '),
// 	            id: result.id
// En este caso hemos almacenado el nombre, la imagen, el tipo y el id (número). Si investigáis la API se pueden recuperar muchísima más información como los stats, los videojuegos en los que aparecen o diferentes generaciones de imágenes y displays.

// Una vez desglosada la información habrá que pintarla a través de otra función que nos recupere el resultado del fetch y nos pinte dentro de nuestro elemento pokedex una lista con dichos elementos. Esta función deberá ser ejecutada una vez termine la función del fetch (recordemos el flujo de funciones).
// Por último tenemos que llamar a la función fetch para que se ejecute al arrancar la aplicación y así nos recuperará la información y nos pintará nuestro listado.
// Tened muy en cuenta la estructura del proyecto a la hora de llamar archivos para que todo funciones correctamente.

getPokemons = () => {
    for (let i = 0; i < 150; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
            .then((response) => response.json())
            .then((pokemonData) => {
                const pokemon = {
                    name: pokemonData.name,
                    image: pokemonData.sprites['front_default'],
                    type: pokemonData.types
                        .map((type) => type.type.name)
                        .join(', '),
                    id: pokemonData.id,
                };
                printPokemons(pokemon);
            });
    }
};

printPokemons = (pokemon) => {
    const pokedex = document.querySelector('#pokedex');
    const pokemonHTML = `
    <li class="card">
    <h2 class="card-title">${pokemon.name}</h2>
    <img class="card-img" src="${pokemon.image}" alt="${pokemon.name}">
    <p class="card-subtitle">Type: ${pokemon.type}</p>
    <p>ID: ${pokemon.id}</p>
    </li>
    `;
    pokedex.innerHTML += pokemonHTML;
};

getPokemons();
