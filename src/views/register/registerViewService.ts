import { StackActions, useNavigation } from "@react-navigation/native";

export const useRegisterViewService = () => {

    const navigation = useNavigation();

    const sendToLogin = () => {
        navigation.dispatch(StackActions.push('Auth', { screen: 'Login' }));
    };

  return { sendToLogin };
};