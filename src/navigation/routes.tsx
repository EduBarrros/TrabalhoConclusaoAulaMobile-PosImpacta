import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/login/login';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}