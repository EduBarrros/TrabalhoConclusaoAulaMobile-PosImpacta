import React from 'react';
import { Text, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextField } from '../../components/textField/textField';
import { Button } from '../../components/button/button';
import { useLoginViewService } from './loginViewService';
import Checkbox from 'expo-checkbox';

export default function Login() {

  const ViewService = useLoginViewService();

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
        <TextField placeholder='Email' value={ViewService.email} onChangeText={ViewService.setEmail} />
        <TextField placeholder='Senha' secureTextEntry value={ViewService.password} onChangeText={ViewService.setPassword} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox
            value={ViewService.isChecked}
            onValueChange={ViewService.setChecked}
            color={true ? '#0D3B66' : undefined}
            style={{ width: 20, height: 20, borderRadius: 4 }}
          />
          <Text style={{ marginLeft: 8, fontSize: 14, color: '#6B7280' }}>Salvar usuário para próximo</Text>
        </View>
        <Button text="Entrar" onPress={ViewService.userLogin} />
        <Pressable
          onPress={ViewService.sendToRegister}
          style={({ pressed }) => [{
            opacity: pressed ? 0.7 : 1,
            alignItems: 'center'
          }]}
        >
          <Text style={{ fontWeight: 'bold', color: '#1E6091' }}>Não possui uma conta? {''}
            <Text style={{ textDecorationLine: 'underline' }}>Cadastre-se</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
