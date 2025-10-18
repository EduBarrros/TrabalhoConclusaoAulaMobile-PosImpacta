import React from 'react';
import { Text, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/button/button';
import { useWelcomeViewService } from './welcomeViewService';

export default function Welcome() {

  const { sendToLogin, sendToRegister } = useWelcomeViewService();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F9FAFB',
      }}
    >
      <View
        style={{
          flex: 1.2,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 16,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#1C1C1E',
          }}
        >
          Bem-vindo ao
        </Text>
        <Text
          style={{
            fontSize: 48,
            fontWeight: 'bold',
            color: '#1E6091',
            textAlign: 'center',
            marginVertical: 8,
          }}
        >
          GateKeeper
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 32,
            fontSize: 16,
            lineHeight: 22,
            color: '#1C1C1E',
            paddingHorizontal: 8,
          }}
        >
          Seu controle de acessos seguro e confiável.
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#0D3B66',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          paddingHorizontal: 24,
          paddingVertical: 36,
          justifyContent: 'center',
          boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Button
          text="Entrar"
          onPress={sendToLogin}
          type="secondary"
        />
        <Pressable
          onPress={sendToRegister}
          style={({ pressed }) => [{
            opacity: pressed ? 0.7 : 1,
            marginTop: 24,
            alignItems: 'center'
          }]}
        >
          <Text style={{ fontWeight: 'bold', color: '#E2E8F0' }}>Não possui uma conta? {''}
            <Text style={{ textDecorationLine: 'underline' }}>Cadastre-se</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
