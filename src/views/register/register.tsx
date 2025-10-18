import React from 'react';
import { Text, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextField } from '../../components/textField/textField';
import { Button } from '../../components/button/button';
import { useRegisterViewService } from './registerViewService';

export default function Register() {

    const ViewService = useRegisterViewService();

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#F9FAFB',
            }}
        >
            <View style={{ padding: 24 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>
                    Crie uma nova conta
                </Text>
                <Text style={{ fontSize: 16, color: '#6B7280', marginBottom: 16 }}>
                    Por favor insira suas informações para criar uma nova conta.
                </Text>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 24, gap: 24 }}>
                <TextField placeholder='Nome completo' value={ViewService.userName} onChangeText={ViewService.setUserName} />
                <TextField placeholder='Email' value={ViewService.email} onChangeText={ViewService.setEmail} />
                <TextField placeholder='Senha' value={ViewService.password} onChangeText={ViewService.setPassword} secureTextEntry />
                <Button text="Cadastrar" onPress={ViewService.registerUser} />
                <Pressable
                    style={({ pressed }) => [{
                        opacity: pressed ? 0.7 : 1,
                        alignItems: 'center'
                    }]}
                    onPress={ViewService.sendToLogin}
                >
                    <Text style={{ color: '#1E6091', fontWeight: 'bold' }}>Já possui uma conta? {''}
                        <Text style={{ textDecorationLine: 'underline' }}>Entrar</Text>
                    </Text>
                </Pressable>
                <Text style={{ textAlign: 'center', marginTop: 16, color: '#6B7280' }}>
                    Ao se cadastrar, você concorda com nossos Termos de Serviço e Política de Privacidade.
                </Text>
            </View>
        </SafeAreaView>
    );
}