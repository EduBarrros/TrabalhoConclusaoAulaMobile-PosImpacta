import React from 'react';
import { FlatList, Modal, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/button/button';
import { useHomeViewService } from './homeViewService';
import { CreateSecurePasswordModal } from '../../components/createSecurePasswordModal/createSecurePasswordModal';
import { SecurePassword } from '../../models/securePassword';
import { SecurePasswordCard } from '../../components/securePasswordCard/securePasswordCard';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RevealSecurePasswordModal } from '../../components/revealSecurePasswordModal/revealSecurePasswordModal';

export default function Home() {

  const ViewService = useHomeViewService();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#0D3B66',
      }}
    >
      <View style={{ backgroundColor: '#F9FAFB', borderBottomLeftRadius: 24, borderBottomRightRadius: 24, padding: 16, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', marginTop: -50, paddingTop: 60 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8, color: '#0D3B66' }}>
            Olá, Eduardo!
          </Text>
          <Pressable
            style={({ pressed }) => [{
              opacity: pressed ? 0.7 : 1,
            }]}
            onPress={ViewService.logout}>
            <Ionicons name="log-out-outline" size={32} color="#0D3B66" />
          </Pressable>
        </View>
        <Text style={{ fontSize: 64, fontWeight: 'bold', color: '#0D3B66' }}>
          {ViewService.totalSecurePasswords} <Text style={{ fontSize: 24, fontWeight: 'normal' }}>
            Senhas seguras
          </Text>
        </Text>
        <Button text='Adicionar nova senha segura' onPress={() => ViewService.setShowCreateModal(true)} />
      </View>
      <FlatList
        data={ViewService.userSecurePasswords}
        style={{ marginTop: 24 }}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }: { item: SecurePassword }) => <SecurePasswordCard securePasswordData={item} onReveal={() => ViewService.revealHandler(item)} onOptions={() => null}/>}
        contentContainerStyle={{ flexGrow: 1 }}
        ListEmptyComponent={() => (
          <View style={{ flex: 1, alignItems: 'center', paddingTop: '50%' }}>
            <Text style={{ fontSize: 46 }}>
              🔓
            </Text>
            <Text style={{ textAlign: 'center', color: '#9dbdddff', marginTop: 16, fontSize: 18 }}>
              Nenhuma senha segura cadastrada.
            </Text>
          </View>
        )}
      />
      <CreateSecurePasswordModal
        visible={ViewService.showCreateModal}
        onClose={ViewService.cancelCreateSecurePassword}
        onSubmit={ViewService.createSecurePassword}
        nickname={ViewService.nickname}
        setNickName={ViewService.setNickname}
        password={ViewService.password}
        setPassword={ViewService.setPassword}
        confirmPassword={ViewService.confirmPassword}
        setConfirmPassword={ViewService.setConfirmPassword}
      />
      <RevealSecurePasswordModal
        onClose={ViewService.closeRevealHandler}
        onSubmit={ViewService.RevealSecurePassword}
        visible={ViewService.showRevealModal}
        password={ViewService.revealPasswordAuth}
        setPassword={ViewService.setRevealPasswordAuth}
        authenticated={ViewService.showSecurePassword}
        securePasswordData={ViewService.selectedSecurePasswordData}
      />
    </SafeAreaView>
  );
}
