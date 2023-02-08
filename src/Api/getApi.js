export const getPokeApi = async (searchTerm) => {
    try {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${lowerCaseSearchTerm}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getGifApi = async (searchTerm) => {
    try {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=bGxseFYWimnT5Oak5soRo3J55d2NLlJt&q=${lowerCaseSearchTerm}&limit=9&offset=0&rating=g&lang=en`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};