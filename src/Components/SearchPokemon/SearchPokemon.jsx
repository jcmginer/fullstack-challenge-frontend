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
                <button className="btn-search" type="submit">Search</button>
                <div className="result-container">
                    <img src={searchResults.sprites?.front_default} alt={searchResults.name} width="250px" />
                    <img src={searchResults.sprites?.back_default} alt={searchResults.name} width="250px" />
                </div>
                    <h3 className="name-pokemon">{searchResults.name?.toUpperCase()}</h3>
            </form>
        </div>
    );
};

export default SearchPokemon;