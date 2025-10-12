import { CommonActions, useNavigation } from "@react-navigation/native";

export const useHomeViewService = () => {

    const navigation = useNavigation();

    const sendToRegister = () => {
        navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [{ name: 'Auth', params: { screen: 'Register' } }],
        }));
    };

    return { sendToRegister };
};