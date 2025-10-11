import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'react-native';
import { RootRoutes } from "./src/navigation/rootRoutes";

export default function App() {
  return (

    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
      />
      <RootRoutes />
    </NavigationContainer>
  );
}