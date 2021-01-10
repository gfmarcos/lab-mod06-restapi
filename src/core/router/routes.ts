import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  viewCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  viewCharacter: '/characte/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'viewCharacter'> {
  viewCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  viewCharacter: (id) => generatePath(switchRoutes.viewCharacter, { id }),
};
