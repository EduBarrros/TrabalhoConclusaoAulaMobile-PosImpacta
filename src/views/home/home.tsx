import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/button/button';

export default function Home() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#0D3B66',
      }}
    >
      <View style={{ backgroundColor: '#F9FAFB',borderBottomLeftRadius: 24, borderBottomRightRadius: 24, padding: 16, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', marginTop: -50, paddingTop: 60 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8, color: '#0D3B66' }}>
          Olá, Eduardo!
        </Text>
        <Text style={{ fontSize: 64, fontWeight: 'bold' }}>
          10 <Text style={{ fontSize: 24, fontWeight: 'normal' }}>
            Senhas seguras
          </Text>
        </Text>
        <Button text='Adicionar nova senha segura' />
      </View>
      <FlatList
        data={[]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => null}
        contentContainerStyle={{ flexGrow: 1 }}
        ListEmptyComponent={() => (
          <View  style={{ flex: 1, alignItems: 'center', paddingTop: '50%' }}>
            <Text style={{ fontSize: 46 }}>
              🔓
            </Text>
            <Text style={{ textAlign: 'center', color: '#9dbdddff', marginTop: 16, fontSize: 18 }}>
              Nenhuma senha segura cadastrada.
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
