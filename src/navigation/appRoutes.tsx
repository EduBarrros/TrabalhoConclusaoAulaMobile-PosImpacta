import { createStackNavigator } from '@react-navigation/stack';
import Home from '../views/home/home';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}