import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { Character, createEmptyCharacter } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';
import { HotelComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [hotel, setHotel] = React.useState<Character>(createEmptyCharacter());
  const { id } = useParams();
  const history = useHistory();

  const handleLoadHotel = async () => {
    const apiHotel = await api.getCharacter(id);
    console.log(await api.getCharacter(id));
    setHotel(mapCharacterFromApiToVm(apiHotel));
  };

  React.useEffect(() => {
    console.log('----------ID');
    console.log(id);
    if (id) {
      handleLoadHotel();
    }
  }, []);

  const handleSave = async (hotel: Hotel) => {
    const apiHotel = mapHotelFromVmToApi(hotel);
    const success = await api.saveHotel(apiHotel);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save hotel');
    }
  };
  return (
    <>
      <h1>sadasd</h1>
    </>
  );
  /*   return <HotelComponent hotel={hotel} onSave={handleSave} />; */
};
