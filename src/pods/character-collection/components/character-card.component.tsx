import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton/IconButton';
import EditIcon from '@material-ui/icons/Edit';
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
            style={{ height: 0, paddingTop: '56.25%', marginBottom: '1.5rem' }}
          />
          <Typography style={{ marginBottom: '.5rem' }}>Description</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {character.description}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onView(character.id)}>
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
