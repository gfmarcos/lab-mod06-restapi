import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.characterCollection]}
          component={CharacterCollectionScene}
        />
        {/* <Route
          exact={true}
          path={switchRoutes.viewCharacter}
          component={HotelScene}
        /> */}
      </Switch>
    </HashRouter>
  );
};
