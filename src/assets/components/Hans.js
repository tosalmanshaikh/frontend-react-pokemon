// import React, {useEffect, useState} from "react";
// import axios from "axios";
//
// const baseUrl = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
//
//
//
// function Hans() {
//
//
//     const [pokemonData, setPokemonData] = useState([]);
//
// useEffect(() => {
//
//     fetchPokemonData();
//
//
// },[])
//
//    async function fetchPokemonData(){
//
//        try {
//
//         const response = await axios.get(baseUrl)
//            console.log(response.data)
//            setPokemonData(response.data)
//        }
//
//        catch (e) {
//            console.error(e);
//
//        }
//
//
//     }
//
//     return (
//
//         <div>
//             <ul>
//                 {pokemonData.map(pokemon) => {}}
//
//             </ul>
//             <h1>hans</h1>
//
//         </div>
//     )
//
// }
//
// export default Hans;