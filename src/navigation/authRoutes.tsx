import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/login/login';
import Register from '../views/register/register';

const Stack = createStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}