import {NavigationContainer} from '@react-navigation/native';

import {AppRoutes} from './app.routes';

export function Routes() {
  const config = {
    screens: {
      Garmin: {
        path: 'garmin/:id?',
        parse: {
          id: (id: String) => `${id}`,
        },
      },
    },
  };

  const linking = {
    prefixes: ['http://localhost:3000/redirect', 'runpass-app://garmin'],
    config,
  };

  return (
    <NavigationContainer linking={linking}>
      <AppRoutes />
    </NavigationContainer>
  );
}
