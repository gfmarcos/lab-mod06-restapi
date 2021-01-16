import Axios from 'axios';
import { CharacterApi } from './character.api-model';

const url = '/api/results';

export const getCharacter = async (id: string): Promise<CharacterApi> => {
  const { data } = await Axios.get(`${url}/${id}`);
  return data
};

