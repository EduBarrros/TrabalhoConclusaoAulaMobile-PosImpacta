import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'react-native';
import { RootRoutes } from "./src/navigation/rootRoutes";

export default function App() {
  return (
    <NavigationContainer>
      <RootRoutes />
      <StatusBar
        barStyle="dark-content"
      />
    </NavigationContainer>
  );
}