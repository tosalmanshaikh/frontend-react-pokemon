// working: for one pokemon - :)

// import React, {useEffect, useState} from 'react';
// import axios from "axios";
//
//
//
// function PokemonCard ({endPoint} ) {
//
//     const [pokemonData, setPokemonData] = useState('');
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
//         // console.log("we gaan beginnen :)")
//     }, [])
//
//
//     return (
//         <div>
//             {pokemonData && <> <h3>{pokemonData.name}</h3>
//                 <img alt="jigglypuff-image" src={pokemonData.sprites.front_default}/>
//                 <p>weight: {pokemonData.weight}</p>
//                 <p>moves: {pokemonData.moves.length}</p>
//
//                 {pokemonData.abilities.map((pokemon) => {
//                     return (
//
//                         <li>
//                             {pokemon.ability.name}
//                         </li>
//                     )
//
//                 })}
//
//             </> }
//
//
//             {/*<Button isDisabled={true} type="button"*/}
//             {/*        clickHandler={() => setCounter(pokemonData.previous)}> vorige </Button>*/}
//             {/*<Button isDisabled={false} type="button"*/}
//             {/*        clickHandler={() => setCounter(pokemonData.next)}> volgende </Button>*/}
//         </div>
//     );
// }
//
// export default PokemonCard;





//working: for 20 pokemon - :)

import React, {useEffect, useState} from 'react';
import axios from "axios";

//banana: now we are going to use the URL that we already fetched to go one step depper to be get more data?
function PokemonCard  ({banana})  {

    const [pokemonData, setPokemonData] = useState('');

    //useEffect: always on top of everything!
    useEffect(() => {

        async function fetchData() {
            try {
                const result = await axios.get(banana)
                console.log(" hier gaan we door de url om meer informatie uit te halen zoals weight, moves, abilities --> 4 ?")
                console.log(result.data);
                setPokemonData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData()
        console.log('start! --> 3');
    }, [])

    return (
        <div className="pokemon-module">
            <ul className="PokemonCards">
            {pokemonData && <>
                <h3>{pokemonData.name}</h3>
                <img src={pokemonData.sprites.front_default} alt="pokemon-image"/>
                <h4>Weight</h4>
                {pokemonData.weight}
                <h4>Moves</h4>
                {pokemonData.moves.length}
                <h4>Abilities</h4>
                {/*// we are going to map through abilities to refine name(ability) */}
                {pokemonData.abilities.map((pokemon) => {
                    return (
                        <li>{pokemon.ability.name}</li>) // .name here means ability -

                })}

            </>}</ul>

        </div>
    )
}
export default PokemonCard;





//m

// import react, {useState, useEffect} from 'react'
// import axios from "axios";
//
// function PokemonCard({url}) {
//
//     const [pokemon, setPokemon] = useState()
//     const [loading, setLoading] = useState(true)
//
//     useEffect(() => {
//
//         async function fetchData() {
//             setLoading(true)
//             try {
//                 const result = await axios.get(url);
//                 setPokemon(result.data)
//                 console.log(result.data)
//             } catch (e) {
//                 console.error(e);
//             }
//             setLoading(false)
//         }
//
//         fetchData()
//     }, [])
//     if (loading) return `loading...`
//
//     return (
//         <div className="Pokemon-module">
//             <ul className="PokemonCards">
//                 <h1>{pokemon.name}</h1>
//                 <img alt="pokemon-image" src={pokemon.sprites.front_default}/>
//                 <h2>weight: {pokemon.weight}</h2>
//                 <h2>moves: {pokemon.moves.length}</h2>
//                 <h2>abilities: </h2>
//                 {pokemon.abilities.map((show) => {
//                     return (
//                         <li>
//                             {show.ability.name}
//                         </li>
//                     )
//                 })}
//             </ul>
//         </div>
//     )
// }
//
// export default PokemonCard;




























//hoe verdeer?
// import React, {useEffect, useState} from 'react';
// import axios from "axios";
//
//
// function PokemonCard ({endPoint} ) {
//
//     const [pokemonData, setPokemonData] = useState([]);
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
//         // console.log("we gaan beginnen :)")
//     }, [])
//
//
//     return (
//         <div>
//             {pokemonData.results && <> <h3>{pokemonData.name}</h3>
//                 <img alt="jigglypuff-image" src={pokemonData}/>
//                 <p>weight: {pokemonData.weight}</p>
//                 <p>moves: {pokemonData.moves.length}</p>
//
//                 {pokemonData.results.map((pokemon) => {
//                     return (
//
//                         <li>
//                             {pokemon.name}
//                         </li>
//                     )
//
//                 })}
//
//             </> }
//
//
//             {/*<Button isDisabled={true} type="button"*/}
//             {/*        clickHandler={() => setCounter(pokemonData.previous)}> vorige </Button>*/}
//             {/*<Button isDisabled={false} type="button"*/}
//             {/*        clickHandler={() => setCounter(pokemonData.next)}> volgende </Button>*/}
//         </div>
//     );
// }
//
// export default PokemonCard;





//  NOVA


// import React, { useState, useEffect, useContext } from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
// } from 'react-router-dom';
// import axios from 'axios';
// import SearchBar from './components/searchBar/SearchBar';
// import TabBarMenu from './components/tabBarMenu/TabBarMenu';
// import MetricSlider from './components/metricSlider/MetricSlider';
// import ForecastTab from './pages/forecastTab/ForecastTab';
// import TodayTab from './pages/todayTab/TodayTab';
// import { TempContext } from './context/TempContext';
// import './App.css';
//
// const apiKey = '80da339f580ee3d5a0cdea6c86ecb847';
//
// function App() {
//     const [weatherData, setWeatherData] = useState({});
//     const [location, setLocation] = useState('');
//     const [error, toggleError] = useState(false);
//
//     const { kelvinToMetric } = useContext(TempContext);
//
//     useEffect(() => {
//         async function fetchData() {
//             toggleError(false);
//
//             try {
//                 const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${apiKey}&lang=nl`);
//                 console.log(result.data);
//                 setWeatherData(result.data);
//             } catch (e) {
//                 console.error(e);
//                 toggleError(true);
//             }
//         }
//
//         if (location) {
//             fetchData();
//         }
//     }, [location]);
//
//     return (
//         <>
//             <div className="weather-container">
//
//                 {/*HEADER -------------------- */}
//                 <div className="weather-header">
//                     <SearchBar setLocationHandler={setLocation}/>
//                     {error &&
//                         <span className="wrong-location-error">
//               Oeps! Deze locatie bestaat niet
//             </span>
//                     }
//
//                     <span className="location-details">
//             {Object.keys(weatherData).length > 0 &&
//                 <>
//                     <h2>{weatherData.weather[0].description}</h2>
//                     <h3>{weatherData.name}</h3>
//                     <h1>{kelvinToMetric(weatherData.main.temp)}</h1>
//                 </>
//             }
//           </span>
//                 </div>
//
//                 {/*CONTENT ------------------ */}
//                 <Router>
//                     <div className="weather-content">
//                         <TabBarMenu/>
//
//                         <div className="tab-wrapper">
//                             <Switch>
//                                 <Route path="/komende-week">
//                                     <ForecastTab coordinates={weatherData.coord}/>
//                                 </Route>
//                                 <Route path="/" exact>
//                                     <TodayTab coordinates={weatherData.coord}/>
//                                 </Route>
//                             </Switch>
//                         </div>
//                     </div>
//                 </Router>
//
//                 <MetricSlider/>
//             </div>
//         </>
//     );
// }
//
// export default App;