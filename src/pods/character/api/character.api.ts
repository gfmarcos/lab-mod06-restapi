import Axios from 'axios';
import { CharacterApi } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCities, mockHotelCollection } from './character.mock-data';

const url = 'https://rickandmortyapi.com/api/character';

export const getHotel = async (id: string): Promise<CharacterApi[]> => {
  const { data } = await Axios.get(url);
  return data.results.find((c) => c.id === id);
};

/* export const getHotel = async (id: string): Promise<Hotel> => {
  return mockHotelCollection.find((h) => h.id === id);
}; */

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveHotel = async (hotel: Hotel): Promise<boolean> => {
  return true;
};
