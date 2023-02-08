import React, { useState } from "react";
import './SearchPokemon.css'

const SearchPokemon = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${searchTerm}`);
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <h2>Search your fav Pokemon</h2>
                <input
                    type="text"
                    placeholder="Name or num..."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
                <br />
                <img src={searchResults.sprites?.front_default} alt={searchResults.name} width="200px" />
                <img src={searchResults.sprites?.back_default} alt={searchResults.name} width="200px" />
                <h3>{searchResults.name?.toUpperCase()}</h3>
            </form>
        </div>
    );
};

export default SearchPokemon;