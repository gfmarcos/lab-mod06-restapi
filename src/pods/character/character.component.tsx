import React from 'react';
import { Formik, Form } from 'formik';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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
      <CardHeader
        title={character.name}
        subheader={`${character.gender} - ${character.status}`}
      />
      <CardMedia
        image={character.image}
        title={character.name}
        style={{ height: 0, paddingTop: '50%' }}
      />
      <Formik onSubmit={} initialValues={character}>
        <Form></Form>
      </Formik>
      <CardContent>∫
        <Typography variant="body2" color="textSecondary" component="p">
          {character.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Back" onClick={onBack}>
          <NavigateBeforeIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
