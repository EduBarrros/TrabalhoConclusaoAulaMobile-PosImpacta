import { NavigationContainer } from "@react-navigation/native";
import { MyStack } from "./src/navigation/routes";

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}