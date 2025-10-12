import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextField } from '../../components/textInput/textInput';
import { Button } from '../../components/button/button';
import { useRegisterViewService } from './registerViewService';

export default function Register() {

    const { sendToLogin } = useRegisterViewService();

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
                <TextField placeholder='Nome completo' />
                <TextField placeholder='Email' />
                <TextField placeholder='Senha' />
                <Button text="Cadastrar" />
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={sendToLogin}>
                    <Text style={{ color: '#1E6091', fontWeight: 'bold' }}>Já possui uma conta? {''}
                        <Text style={{ textDecorationLine: 'underline' }}>Entrar</Text>
                    </Text>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', marginTop: 16, color: '#6B7280' }}>
                    Ao se cadastrar, você concorda com nossos Termos de Serviço e Política de Privacidade.
                </Text>
            </View>
        </SafeAreaView>
    );
}