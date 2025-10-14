import { CommonActions, useNavigation } from "@react-navigation/native";
import { getSecureItem, setSecureItem } from "../../services/storage/encryptedStorage";
import { User } from "../../models/user";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Notifier } from "react-native-notifier";

export const useRegisterViewService = () => {

  const navigation = useNavigation();

  const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const sendToLogin = async () => {
    navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [{ name: 'Auth', params: { screen: 'Login' } }],
    }));
  };

  const registerUser = async () => {

    if(email === 'limpar@limpar.com'){
      await AsyncStorage.clear()
      Notifier.showNotification({
        title: "Dados limpos com sucesso!",
        description: "Todos os dados foram removidos.",
        duration: 4000,
        showAnimationDuration: 800,
      });
      return;
    }

    if (!userName || !email || !password) {
      Notifier.showNotification({
        title: "Atenção!",
        description: "Por favor, preencha todos os campos.",
        duration: 4000,
        showAnimationDuration: 800,
      });
      return;
    }

    if (password.length < 6) {
      Notifier.showNotification({
        title: "Atenção!",
        description: "A senha deve ter no mínimo 6 caracteres.",
        duration: 4000,
        showAnimationDuration: 800,
      });
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      Notifier.showNotification({
        title: "Atenção!",
        description: "Por favor, insira um email válido.",
        duration: 4000,
        showAnimationDuration: 800,
      });
      return;
    }

    const userData: User = {
      id: (Math.random() * 100000).toFixed(0),
      name: userName,
      email,
      password
    };

    const users: User[] = await getSecureItem('users') || [];

    if (users.find(user => user.email === email)) {
      console.log('Email já cadastrado');
      throw new Error('Email já cadastrado');
    }

    await setSecureItem('users', [...users, userData]);

    Notifier.showNotification({
      title: "Sua conta foi criada com sucesso!",
      description: "Você já pode fazer login.",
      duration: 4000,
      showAnimationDuration: 800,
    });

    navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [{ name: 'Auth', params: { screen: 'Login' } }],
    }));
  }



  return { sendToLogin, registerUser, userName, setUserName, email, setEmail, password, setPassword };
};