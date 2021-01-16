import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';
const url = '/api/results';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const { data } = await Axios.get(url);
  return data;
};
