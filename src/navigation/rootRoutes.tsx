import { createStackNavigator } from "@react-navigation/stack";
import InitialScreen from "../views/initialScreen/initialScreen";
import { AuthRoutes } from "./authRoutes";

const Stack = createStackNavigator();

export function RootRoutes() {
  return (
    <Stack.Navigator initialRouteName='InitialScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="InitialScreen" component={InitialScreen} />
      <Stack.Screen name="Auth" component={AuthRoutes} />
    </Stack.Navigator>
  );
}
