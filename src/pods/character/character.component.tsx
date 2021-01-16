import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Character } from './character.vm';
import * as classes from './character.styles';


interface Props {
  character: Character;
  onBack: () => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onBack } = props;

  return (
    <Card className={classes.root}>
      <CardHeader title={character.name} subheader={`${character.gender} - ${character.status}`} />
      <CardMedia
        image={character.image}
        title={character.name}
        style={{ height: 0, paddingTop: '50%' }}
      />
       <CardActions disableSpacing>
        <IconButton aria-label="Back" onClick={onBack}>
          <NavigateBeforeIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
