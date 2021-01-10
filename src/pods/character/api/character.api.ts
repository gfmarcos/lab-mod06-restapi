import Axios from 'axios';
import { CharacterApi } from './character.api-model';

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacter = async (id: string): Promise<CharacterApi[]> => {
  const { data } = await Axios.get(url);
  return data.results.find((c) => c.id === id);
};

