// import React, { useState } from "react";

// const SearchGifPokemon = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [searchResults, setSearchResults] = useState([]);

//     const handleChange = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=bGxseFYWimnT5Oak5soRo3J55d2NLlJt&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`);
//             const data = await response.json();
//             setSearchResults(data);
//             console.log(data)

//         } catch (error) {
//             console.error(error);
//         }
//     };
//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>Search GIF of Pokemon</h2>
//             <input
//                 type="text"
//                 placeholder="Name or num..."
//                 value={searchTerm}
//                 onChange={handleChange}
//             />
//             <button type="submit">Search</button>
//             <br />
//             <ul>
//                 {searchResults.map((result) => (
//                     <li key={result.id}>{result.title}</li>
//                 ))}
//             </ul>
//             <h3>{searchResults.name?.toUpperCase()}</h3>
//             <img src={searchResults.sprites?.front_default} alt={searchResults.name} width="200px" />
//             <img src={searchResults.sprites?.back_default} alt={searchResults.name} width="200px" />
//         </form>
//     );
// };

// export default SearchGifPokemon;