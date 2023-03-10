import React, { useState } from "react";
import '../SearchGifPokemon/SearchGifPokemon.css'
import { getGifApi } from '../../Api/getApi';

const CategoriesSelector = () => {
    const [searchTerm, setSearchTerm] = useState("");
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
                <div className="btn-container">
                    <button className="btn-search" value='pikachu' onClick={() => setSearchTerm('pikachu')} type="submit">Pikachu</button>
                    <button className="btn-search" value='bulbasaur' onClick={() => setSearchTerm('bulbasaur')} type="submit">Bulbasaur</button>
                    <button className="btn-search" value='squirtle' onClick={() => setSearchTerm('squirtle')} type="submit">Squirtle</button>
                    <button className="btn-search" value='charmander' onClick={() => setSearchTerm('charmander')} type="submit">Charmander</button>
                </div>
                <div className="result-container">
                    {searchResults.map((result) => (
                        <img key={result.id} src={result.images.downsized_medium.url} alt={searchResults.name} width="150px" />
                    ))}
                </div>
            </form>
        </div>
    );
};

export default CategoriesSelector;
