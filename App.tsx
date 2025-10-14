import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'react-native';
import { RootRoutes } from "./src/navigation/rootRoutes";
import { NotifierWrapper } from "react-native-notifier";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NotifierWrapper translucentStatusBar>
        <NavigationContainer>
          <RootRoutes />
          <StatusBar
            barStyle="dark-content"
          />
        </NavigationContainer>
      </NotifierWrapper>
    </GestureHandlerRootView>
  );
}