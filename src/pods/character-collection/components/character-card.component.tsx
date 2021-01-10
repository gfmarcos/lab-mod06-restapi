import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
  onView: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onView } = props;

  return (
    <Card>
      <CardHeader title={character.name} subheader={character.gender} />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onView(character.id)}>
          <VisibilityIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
