import axios from 'axios';

export const searchCharacterService = async (nameToSearch = '') => {
    try {
        const uri = `https://pokeapi.co/api/v2/pokemon/${nameToSearch}`;
        const res = await axios.get(uri);
        return res.data;
    } catch (error) {
        console.log('Error', error.message);
        return null;
    }
}
