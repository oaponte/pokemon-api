import { searchCharacterService } from "../../services/search-character.service";

export const getListCharacters = async (limit, next) => {
    const offSet = `?offset=${next}&limit=${limit}`;
    const response = await searchCharacterService(offSet);
    return response?.results;
}
