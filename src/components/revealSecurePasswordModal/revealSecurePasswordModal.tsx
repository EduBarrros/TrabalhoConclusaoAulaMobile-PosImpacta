import React, { useEffect, useRef } from 'react';
import { Animated, Modal, Text, View } from 'react-native';
import { TextField } from '../textField/textField';
import { Button } from '../button/button';

interface RevealSecurePasswordModalProps {
    visible: boolean;
    onSubmit: () => void;
    onClose: () => void;
    password?: string;
    setPassword?: (text: string) => void;
}

export const RevealSecurePasswordModal = ({ visible, onSubmit, onClose, password, setPassword }: RevealSecurePasswordModalProps) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (visible) {
            fadeAnim.setValue(0);
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 250,
                useNativeDriver: true,
            }).start();
        } else {
            fadeAnim.setValue(1);
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 250,
                useNativeDriver: true,
            }).start();
        }
    }, [visible]);

    return (
        <Modal transparent visible={visible} animationType="none">
            <Animated.View
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.2)',
                    backgroundColor: fadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)'],
                    }),
                }}
            >
                <View
                    style={{
                        backgroundColor: '#F9FAFB',
                        padding: 24,
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        gap: 16,
                    }}
                >
                    <View style={{ backgroundColor: 'grey', height: 6, width: 50, borderRadius: 4, marginHorizontal: '40%' }} />
                    <Text style={{ fontWeight: 'bold', color: '#0D3B66', fontSize: 18, textAlign: 'center', marginBottom: 16 }}>Cadastro de senha segura</Text>
                    <Text style={{ color: '#0D3B66', fontWeight: '500' }}>
                        Visualizar senha segura
                    </Text>
                    <TextField placeholder='Digite sua senha de acesso para vizualizar' value={password} onChangeText={setPassword} secureTextEntry/>
                    <View>
                        <Button text='Revelar' onPress={onSubmit} />
                        <Button text='Cancelar' onPress={onClose} type='secondary' />
                    </View>
                </View>
            </Animated.View>
        </Modal>
    );
}