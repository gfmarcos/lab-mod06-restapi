import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { Character } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';
import { HotelComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [hotel, setHotel] = React.useState<Hotel>(createEmptyHotel());
  const { id } = useParams();
  const history = useHistory();

  const handleLoadHotel = async () => {
    const apiHotel = await api.getHotel(id);
    setHotel(mapHotelFromApiToVm(apiHotel));
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

  return <HotelComponent hotel={hotel} onSave={handleSave} />;
};
