import React, { useEffect, useRef } from 'react';
import { Animated, Modal, Pressable, Text, View } from 'react-native';

export const CreateSecurePasswordModal = ({ visible, onSubmit, onClose }: { visible: boolean, onSubmit: () => void, onClose: () => void }) => {
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
          backgroundColor: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)'],
          }),
        }}
      >
        <View
          style={{
            backgroundColor: '#fff',
            padding: 24,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
          }}
        >
          <Text>Modal para cadastro de senha segura</Text>
          <Pressable onPress={onClose} style={{ marginTop: 16 }}>
            <Text style={{ color: '#0D3B66', fontWeight: 'bold' }}>Fechar</Text>
          </Pressable>
        </View>
      </Animated.View>
    </Modal>
  );
}