import { StackActions, useNavigation } from "@react-navigation/native";

export const useWelcomeViewService = () => {

    const navigation = useNavigation();

    const sendToLogin = () => {
        navigation.dispatch(StackActions.push('Auth', { screen: 'Login' }));
    };

    const sendToRegister = () => {
       navigation.dispatch(StackActions.push('Auth', { screen: 'Register' }));
    };

  return { sendToLogin, sendToRegister };
};