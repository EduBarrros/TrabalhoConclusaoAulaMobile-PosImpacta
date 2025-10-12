import { CommonActions, useNavigation } from "@react-navigation/native";

export const useWelcomeViewService = () => {

  const navigation = useNavigation();

  const sendToLogin = () => {
    navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [{ name: 'Auth', params: { screen: 'Login' } }],
    }));
  };

  const sendToRegister = () => {
    navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [{ name: 'Auth', params: { screen: 'Register' } }],
    }));
  };

  return { sendToLogin, sendToRegister };
};