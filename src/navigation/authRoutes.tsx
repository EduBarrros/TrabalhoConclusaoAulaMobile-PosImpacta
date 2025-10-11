import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/login/login';

const Stack = createStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}