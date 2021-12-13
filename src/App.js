//working: for one pokemon - :)

// import React, {useEffect, useState} from 'react';
// import './App.css';
// import axios from "axios";
// // import Button from "./assets/components/button";
// import PokemonCard from "./assets/components/PokemonCard";
// // import Hans from "./assets/components/Hans";
//
// function App() {
//
//     const [pokemonData, setPokemonData] = useState('');
//     const [endPoint, setEndPoint] = useState('https://pokeapi.co/api/v2/pokemon/jigglypuff')
//     const [counter, setCounter] = useState(0);
//
//
//     useEffect(() => {
//
//         async function fetchData() {
//             try {
//                 const result = await axios.get(endPoint);
//                 console.log(result.data);
//                 setPokemonData(result.data)
//             } catch (e) {
//                 console.error(e);
//             }
//         }
//
//         fetchData()
//         console.log("we gaan beginnen :)")
//     }, [endPoint])
//
//
//     return (
//         <div>
//             {/*<Hans/>*/}
//             <PokemonCard endPoint={endPoint}/>
//
//             {/*<Button isDisabled={true} type="button"*/}
//             {/*        clickHandler={() => setCounter(pokemonData.previous)}> vorige </Button>*/}
//             {/*<Button isDisabled={false} type="button"*/}
//             {/*        clickHandler={() => setCounter(pokemonData.next)}> volgende </Button>*/}
//
//         </div>
//     );
// }
//
// export default App;




//working: for 20 pokemon - :)

import axios from "axios";
import './App.css';
import React, {useState, useEffect} from "react";
import PokemonCard from "./assets/components/PokemonCard";

function App() {
    const [pokemonData, setPokemonData] = useState('');
    const [endPoint, setEndPoint] = useState(`https://pokeapi.co/api/v2/pokemon`); // hier we give the website base as a start reference


    //why? useEffect: you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.
    useEffect(() => {

        async function fetchData() {
            try {
                // here we mean with (endpoint) our base url as  start point
                const result = await axios.get(endPoint)
                console.log("hier halen we data binnen: naam, url? --> 2");
                console.log(result.data);
                setPokemonData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData()
        console.log("we gaan beginnen :D --> 1");
    }, [endPoint])

    // start reference point?
    // here we give endpoint as dependency otherwise it will load only the first time and stop after!

    return (

        <div>
            <span className="buttons">
            <button type="button" onClick={() => setEndPoint(pokemonData.previous)}>Vorige</button>
            <button type="button" onClick={() => setEndPoint(pokemonData.next)}>Volgende</button>
            </span>

            {/* pokemonData &&: if it is  pokemonData than go on further */}
            {/* --> we pick up pokemonData.results and map this to be able to filter name and url */}

            {pokemonData && <>
                {pokemonData.results.map((pokemon) => {
                    return (

                        //<PokemonCard: typical so you can reuse this is PokemonCard.js
                        // we are able to filter name and url now because we mappen "results" earlier
                        //key= {pokemon.name} - because it is unique?

                        <PokemonCard key={pokemon.name} banana={pokemon.url}/>
                    )
                })}

            </>}
        </div>
    );
}

export default App;









































//hoe kunnen we dit voor alle 20?

// import React, {useEffect, useState} from 'react';
// import './App.css';
// import axios from "axios";
// import Button from "./assets/components/button";
// import PokemonCard from "./assets/components/PokemonCard";
//
// function App() {
//
//     const [pokemonData, setPokemonData] = useState('');
//     const [endPoint, setEndPoint] = useState('https://pokeapi.co/api/v2/pokemon/')
//     const [counter, setCounter] = useState(0);
//
//
//     useEffect(() => {
//
//         async function fetchData() {
//             try {
//                 const input = await axios.get(endPoint);
//                 console.log(input.data.results);
//                 setPokemonData(input.data.results)
//             } catch (e) {
//                 console.error(e);
//             }
//         }
//
//         fetchData()
//         console.log("we gaan beginnen :)")
//     }, [])
//
//
//     return (
//         <div>
//
//
//             {pokemonData.results.map((pokemon) => {
//                 return (
//
//                     <li>
//                         {pokemon.name}
//                     </li>
//                 )
//
//             })}
//
//             <PokemonCard endPoint={endPoint}/>
//
//             {/*<Button isDisabled={true} type="button"*/}
//             {/*        clickHandler={() => setCounter(pokemonData.previous)}> vorige </Button>*/}
//             {/*<Button isDisabled={false} type="button"*/}
//             {/*        clickHandler={() => setCounter(pokemonData.next)}> volgende </Button>*/}
//
//         </div>
//     );
// }

// export default App;


