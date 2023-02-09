import React, { useState } from "react";
import '../SearchPokemon/SearchPokemon.css'
import { getGifApi } from '../../Api/getApi';

const CategoriesSelector = () => {
    const [searchTerm, setSearchTerm] = useState("pikachu");
    const [searchResults, setSearchResults] = useState([]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const results = await getGifApi(searchTerm);
        setSearchResults(results);
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <h2>Select Pokemon GIF category</h2>
                <button value='pikachu' onClick={() => setSearchTerm('pikachu')} type="submit">Pikachu</button>
                <br />
                <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "16px"}}>
                    {searchResults.map((result) => (
                        <img key={result.id} src={result.images.downsized_medium.url} alt={searchResults.name} width="150px" />
                    ))}
                </div>
            </form>
        </div>
    );
};

export default CategoriesSelector;