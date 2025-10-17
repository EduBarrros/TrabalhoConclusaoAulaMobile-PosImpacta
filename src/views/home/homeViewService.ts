import React from "react";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { getSecureItem, setSecureItem } from "../../services/storage/encryptedStorage";
import { SecurePassword } from "../../models/securePassword";
import { Notifier } from "react-native-notifier";


export const useHomeViewService = () => {

    const navigation = useNavigation();

    const [showModal, setShowModal] = React.useState(false);
    const [nickname, setNickname] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [totalSecurePasswords, setTotalSecurePasswords] = React.useState(0);
    const [userSecurePasswords, setUserSecurePasswords] = React.useState<SecurePassword[]>([]);

    React.useEffect(() => {
        getTotalSecurePasswords();
        getUserSecurePasswords();
    }, []);

    const sendToRegister = () => {
        navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [{ name: 'Auth', params: { screen: 'Register' } }],
        }));
    };

    const getTotalSecurePasswords = async () => {
        const securePasswords: SecurePassword[] = await getSecureItem('SecurePassword') || [];

        const selectedUser = await getSecureItem('selectedUser');

        const users = securePasswords.filter(sp => sp.userId === selectedUser.id);

        setTotalSecurePasswords(users.length);
    };

    const getUserSecurePasswords = async () => {
        const securePasswords: SecurePassword[] = await getSecureItem('SecurePassword') || [];

        const selectedUser = await getSecureItem('selectedUser');

        const userSecurePasswords = securePasswords.filter(sp => sp.userId === selectedUser.id);

        setUserSecurePasswords(userSecurePasswords);
    }

    const createSecurePassword = async () => {
        if(!nickname || !password || !confirmPassword) {
            Notifier.showNotification({
                title: "Atenção!",
                description: "Preencha todos os campos.",
                duration: 4000,
                showAnimationDuration: 800,
            });
            return;
        }

        const selectedUser = await getSecureItem('selectedUser');

        const newSecurePassword: SecurePassword = {
            id: (Math.random() * 100000).toString(),
            userId: selectedUser.id,
            name: nickname,
            password: password
        };

        const securePasswords: SecurePassword[] = await getSecureItem('SecurePassword') || [];

        securePasswords.push(newSecurePassword);

        await setSecureItem('SecurePassword', securePasswords);

        Notifier.showNotification({
            title: "Sucesso!",
            description: "Senha segura criada com sucesso.",
            duration: 4000,
            showAnimationDuration: 800,
        });

        setShowModal(false);
        setNickname('');
        setPassword('');
        setConfirmPassword('');

        getTotalSecurePasswords();
        getUserSecurePasswords();
    };

    const cancelCreateSecurePassword = () => {
        setShowModal(false);
        setNickname('');
        setPassword('');
        setConfirmPassword('');
    }

    return { sendToRegister, showModal, setShowModal, totalSecurePasswords, nickname, setNickname, password, setPassword, confirmPassword, setConfirmPassword, cancelCreateSecurePassword, createSecurePassword, userSecurePasswords};
};