import React, { useState } from "react";
import '../SearchPokemon/SearchPokemon.css'
import { getGifApi } from '../../Api/getApi';


const SearchGifPokemon = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const results = await getGifApi(searchTerm);
        setSearchResults(results);
    };
    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <h2>Search GIF of Pokemon</h2>
                <input
                    type="text"
                    placeholder="Name Pokemon..."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
                <br />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "16px" }}>
                    {searchResults.map((result) => (
                        <img key={result.id} src={result.images.downsized_medium.url} alt={searchResults.name} width="150px" />
                    ))}
                </div>
            </form>
        </div>
    );
};

export default SearchGifPokemon;