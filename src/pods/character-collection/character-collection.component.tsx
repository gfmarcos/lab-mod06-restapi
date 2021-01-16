import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  onView:(id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onView } = props;

  return (
    <div className={classes.root}>
      {/*<Button variant="contained" color="primary" onClick={onCreateHotel}>
        Add hotel
      </Button> */}

      <Typography variant="h4" component="h1">
        Ejercicio 2 - Mock Server
      </Typography>

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onView={onView} />
          </li>
        ))}
      </ul>
    </div>
  );
};
