import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { Character, createEmptyCharacter } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';
import { HotelComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setHotel] = React.useState<Character>(createEmptyCharacter());
  const { id } = useParams();
  const history = useHistory();

  const handleLoadHotel = async () => {
    const apiCharacter = await api.getCharacter(id);
    setHotel(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
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
  return <HotelComponent character={character} />;
};
