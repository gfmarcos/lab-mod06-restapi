import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

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
      <CardContent>
        <Formik
          onSubmit={onSave}
          initialValues={character}
          enableReinitialize={true}
        >
          {() => (
            <Form className={classes.root}>
              <TextFieldComponent
                name="description"
                label="Edit description"
                multiline={true}
                rows={3}
                rowsMax={5}
              />
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};
