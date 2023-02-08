import React, { useState } from "react";
import './SearchPokemon.css'
import { getPokeApi } from '../../Api/getApi';

const SearchPokemon = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const results = await getPokeApi(searchTerm);
        setSearchResults(results);
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