import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F9FAFB',
      }}
    >
      <Text>
        Login Screen
      </Text>
    </SafeAreaView>
  );
}
