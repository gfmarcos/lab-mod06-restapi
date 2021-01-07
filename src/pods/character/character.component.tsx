import React from 'react';
import { Formik, Form } from 'formik';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from 'common/components';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Typography from '@material-ui/core/Typography';
import { formValidation } from './character.validations';
import { Hotel } from './character.vm';
import * as classes from './character.styles';
import { Lookup } from 'common/models';

interface Props {
  hotel: Hotel;
  cities: Lookup[];
  onSave: (hotel: Hotel) => void;
}

export const HotelComponent: React.FunctionComponent<Props> = (props) => {
  const { hotel, cities, onSave } = props;

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          title={hotel.name}
          subheader="September 14, 2016"
        />
        <CardMedia
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <NavigateBeforeIcon />
          </IconButton>
        </CardActions>
      </Card>

      <Formik
        onSubmit={onSave}
        initialValues={hotel}
        enableReinitialize={true}
        validate={formValidation.validateForm}
      >
        {() => (
          <Form className={classes.root}>
            <TextFieldComponent name="name" label="Name" />
            <TextFieldComponent name="address" label="Address" />
            <RatingComponent name="rating" max={5} />
            <SelectComponent name="city" label="City" items={cities} />
            <TextFieldComponent
              name="description"
              label="Description"
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
    </>
  );
};
