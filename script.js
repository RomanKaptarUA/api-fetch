// API
// no async/await
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then((response) => {
//     if (!response.ok) {
//         throw new Error("Network response was not ok " )
//     }
//     return response.json();
// })
// .then(data => console.log(data.weight)) 
// .catch((error) => console.error(error));

// ///////////////////////////////////////////////////////////////////////////
// // async/await
// fetchData()
// async function fetchData() {
//     try {
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
//         if (!response.ok) {
//             throw new Error("Network response was not ok" );
//         }
//         const data = await response.json();
//         console.log(data.weight);
//     } catch (error) {
//         console.error(error);
//     }
// }
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
getPokemonData()
async function getPokemonData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error("Network response was not ok" );
        }
        const data = await response.json();
        // console.log(data.weight);
        pokemonPhoto = data.sprites.front_default;
        const pokemonSprite = document.getElementById("pokemonSprite");

        pokemonSprite.src = pokemonPhoto;
        pokemonSprite.style.display = "block";
    } catch (error) {
        console.error(error);
    }
}