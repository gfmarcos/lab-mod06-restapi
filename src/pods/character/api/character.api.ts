import Axios from 'axios';
import { Character } from '../character.vm';
import { CharacterApi } from './character.api-model';

const url = '/api/results';

export const getCharacter = async (id: string): Promise<CharacterApi> => {
  const { data } = await Axios.get(`${url}/${id}`);
  return data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  await Axios.put(`${url}/${character.id}`, character);
  return true;
};
