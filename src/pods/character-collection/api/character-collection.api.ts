import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';
/* import { mockHotelCollection } from './character-collection.mock-data'; */

/* let hotelCollection = [...mockHotelCollection]; */

const url = 'https://rickandmortyapi.com/api/character';

/* export const getHotelCollection = async (): Promise<HotelEntityApi[]> => {
  return hotelCollection;
}; */

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const { data } = await Axios.get(url);
  return data.results;
};

export const deleteHotel = async (id: string): Promise<boolean> => {
  hotelCollection = hotelCollection.filter((h) => h.id !== id);
  return true;
};
