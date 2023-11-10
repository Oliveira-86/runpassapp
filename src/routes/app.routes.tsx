import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Garmin from '../screens/Garmin';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="garmin" component={Garmin} />
    </Navigator>
  );
}
