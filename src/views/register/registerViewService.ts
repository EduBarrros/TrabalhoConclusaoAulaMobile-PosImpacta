import { CommonActions, useNavigation } from "@react-navigation/native";

export const useRegisterViewService = () => {

  const navigation = useNavigation();

  const sendToLogin = () => {
    navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [{ name: 'Auth', params: { screen: 'Login' } }],
    }));
  };

  return { sendToLogin };
};