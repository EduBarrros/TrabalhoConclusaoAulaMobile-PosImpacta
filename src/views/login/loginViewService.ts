import { CommonActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { User } from "../../models/user";
import { getSecureItem, removeSecureItem, setSecureItem } from "../../services/storage/encryptedStorage";
import { Notifier, NotifierComponents } from "react-native-notifier";

export const useLoginViewService = () => {

    const navigation = useNavigation();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isChecked, setChecked] = React.useState(false);

    React.useEffect(() => {
        const loadLastUser = async () => {
            const lastUser: User | null = await getSecureItem('lastUser');
            if (lastUser) {
                setEmail(lastUser.email);
                setChecked(true);
            }
        };
        loadLastUser();
    }, []);

    const sendToRegister = () => {
        navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [{ name: 'Auth', params: { screen: 'Register' } }],
        }));
    };


    const userLogin = async () => {
        const users: User[] = await getSecureItem('users') || [];

        const user = users.find(user => user.email === email && user.password === password);

        if (user) {

            if (isChecked) {
                await setSecureItem('lastUser', user);
            } else {
                await removeSecureItem('lastUser');
            }

            Notifier.showNotification({
                title: `Bem-vindo, ${user.name}!`,
                description: "Login realizado com sucesso.",
                duration: 4000,
                showAnimationDuration: 800,
                componentProps: {
                    titleStyle: { color: '#007BFF' },
                    containerStyle: { borderColor: '#007BFF', borderWidth: 1, borderRadius: 8 },
                },
            });
            navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{ name: 'App', params: { screen: 'Home' } }],
            }));
        } else {
            Notifier.showNotification({
                title: "Atenção!",
                description: "Usuário ou senha inválidos.",
                duration: 4000,
                showAnimationDuration: 800,
                componentProps: {
                    titleStyle: { color: '#EB2121' },
                    containerStyle: { borderColor: '#EB2121', borderWidth: 1, borderRadius: 8 },
                },
            });
            return;
        }
    }

    return { sendToRegister, email, setEmail, password, setPassword, userLogin, isChecked, setChecked };
};