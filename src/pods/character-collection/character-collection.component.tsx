import * as React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  onCreateHotel: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onView:(id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onCreateHotel, onEdit, onDelete, onView } = props;

  return (
    <div className={classes.root}>
      {/*<Button variant="contained" color="primary" onClick={onCreateHotel}>
        Add hotel
      </Button> */}

      <Typography variant="h4" component="h1">
        Ejercicio 1 - API Rest de Rick and Morty
      </Typography>

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onEdit={onEdit} onDelete={onDelete} onView={onView} />
          </li>
        ))}
      </ul>
    </div>
  );
};
