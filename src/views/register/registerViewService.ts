import { CommonActions, useNavigation } from "@react-navigation/native";
import { getSecureItem, setSecureItem } from "../../services/storage/encryptedStorage";
import { User } from "../../models/user";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useRegisterViewService = () => {

  const navigation = useNavigation();

  const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const sendToLogin = async () => {
    //await AsyncStorage.clear()
    navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [{ name: 'Auth', params: { screen: 'Login' } }],
    }));
  };

  const registerUser = async () => {
    const userData: User = {
      id: (Math.random() * 100000).toFixed(0),
      name: userName,
      email,
      password
    };
    
    const users: User[] = await getSecureItem('users') || [];

    if(users.find(user => user.email === email)) {
      console.log('Email já cadastrado');
      throw new Error('Email já cadastrado');
    }

    await setSecureItem('users', [...users, userData]);

    navigation.dispatch(CommonActions.reset({
       index: 0,
       routes: [{ name: 'Auth', params: { screen: 'Login' } }],
    }));
  }



  return { sendToLogin, registerUser, userName, setUserName, email, setEmail, password, setPassword };
};