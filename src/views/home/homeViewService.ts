import React from "react";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { getSecureItem, setSecureItem } from "../../services/storage/encryptedStorage";
import { SecurePassword } from "../../models/securePassword";
import { Notifier } from "react-native-notifier";


export const useHomeViewService = () => {

    const navigation = useNavigation();

    const [showCreateModal, setShowCreateModal] = React.useState(false);
    const [nickname, setNickname] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [totalSecurePasswords, setTotalSecurePasswords] = React.useState(0);
    const [userSecurePasswords, setUserSecurePasswords] = React.useState<SecurePassword[]>([]);
    const [showRevealModal, setShowRevealModal] = React.useState(false);
    const [revealPasswordAuth, setRevealPasswordAuth] = React.useState<string>('');
    const [showSecurePassword, setShowSecurePassword] = React.useState<boolean>(false);
    const [selectedSecurePasswordData, setSelectedSecurePasswordData] = React.useState<SecurePassword | null>(null);

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

        const selectedUserId = await getSecureItem('selectedUserId');

        const users = securePasswords.filter(sp => sp.userId === selectedUserId);

        setTotalSecurePasswords(users.length);
    };

    const getUserSecurePasswords = async () => {
        const securePasswords: SecurePassword[] = await getSecureItem('SecurePassword') || [];

        const selectedUserId = await getSecureItem('selectedUserId');

        const userSecurePasswords = securePasswords.filter(sp => sp.userId === selectedUserId);

        setUserSecurePasswords(userSecurePasswords);
    }

    const createSecurePassword = async () => {
        if (!nickname || !password || !confirmPassword) {
            Notifier.showNotification({
                title: "Atenção!",
                description: "Preencha todos os campos.",
                duration: 4000,
                showAnimationDuration: 800,
            });
            return;
        }

        const selectedUserId = await getSecureItem('selectedUserId');

        const newSecurePassword: SecurePassword = {
            id: (Math.random() * 100000).toString(),
            userId: selectedUserId,
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

        setShowCreateModal(false);
        setNickname('');
        setPassword('');
        setConfirmPassword('');

        getTotalSecurePasswords();
        getUserSecurePasswords();
    };

    const cancelCreateSecurePassword = () => {
        setShowCreateModal(false);
        setNickname('');
        setPassword('');
        setConfirmPassword('');
    }

    const logout = async () => {

        await setSecureItem('selectedUserId', null);

        navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [{ name: 'Auth', params: { screen: 'Login' } }],
        }));
    }

    const RevealSecurePassword = async () => {
        const users = await getSecureItem('users') || [];

        const selectedUserId = await getSecureItem('selectedUserId');

        const currentUser = users.find((user: any) => user.id === selectedUserId);

        if (currentUser?.password !== revealPasswordAuth) {
            Notifier.showNotification({
                title: "Atenção!",
                description: "Senha de acesso incorreta.",
                duration: 4000,
                showAnimationDuration: 800,
            });
            return;
        }

        setShowSecurePassword(true);
    }

    const revealHandler = (securePassword: SecurePassword) => {
        console.log('revealHandler called with:', securePassword);
        setSelectedSecurePasswordData(securePassword);
        setShowRevealModal(true);
        setShowSecurePassword(false);
        setRevealPasswordAuth('');
    }

    const closeRevealHandler = () => {
        setShowRevealModal(false);
        setShowSecurePassword(false);
        setRevealPasswordAuth('');
        setSelectedSecurePasswordData(null);
    }

    return {
        sendToRegister,
        showCreateModal,
        setShowCreateModal,
        totalSecurePasswords,
        nickname,
        setNickname,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        cancelCreateSecurePassword,
        createSecurePassword,
        userSecurePasswords,
        logout,
        showRevealModal,
        setShowRevealModal,
        revealPasswordAuth,
        setRevealPasswordAuth,
        RevealSecurePassword,
        showSecurePassword,
        revealHandler,
        selectedSecurePasswordData,
        closeRevealHandler
    };
};