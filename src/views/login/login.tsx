import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextField } from '../../components/textInput/textInput';
import { Button } from '../../components/button/button';
import { useLoginViewService } from './loginViewService';

export default function Login() {

  const { sendToRegister } = useLoginViewService();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F9FAFB',
      }}
    >
      <Text style={{
        fontSize: 48,
        fontWeight: 'bold',
        color: '#1E6091',
        textAlign: 'center',
        marginVertical: 32,
      }}>
        GateKeeper
      </Text>
      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>
          Acesse sua conta
        </Text>
        <Text style={{ fontSize: 16, color: '#6B7280', marginBottom: 16 }}>
          Digite suas credenciais para entrar.
        </Text>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 24, gap: 24 }}>
        <TextField placeholder='Email' />
        <TextField placeholder='Senha' />
        <Button text="Entrar" />
        <TouchableOpacity onPress={sendToRegister} style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', color: '#1E6091' }}>Não possui uma conta? {''}
            <Text style={{ textDecorationLine: 'underline' }}>Cadastre-se</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
