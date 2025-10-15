import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../views/welcome/welcome";
import { AuthRoutes } from "./authRoutes";
import { AppRoutes } from "./appRoutes";

const Stack = createStackNavigator();

export function RootRoutes() {
  return (
    <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Auth" component={AuthRoutes} />
      <Stack.Screen name="App" component={AppRoutes} />
    </Stack.Navigator>
  );
}
