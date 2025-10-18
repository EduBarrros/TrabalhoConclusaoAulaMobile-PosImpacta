import { Text, Pressable, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { SecurePassword } from "../../models/securePassword";

interface SecurePasswordCardProps {
    securePasswordData: SecurePassword;
    onReveal?: () => void;
    onOptions?: () => void;
}

export const SecurePasswordCard = ({ securePasswordData, onReveal, onOptions }: SecurePasswordCardProps) => {
    return (
        <View style={{
            backgroundColor: '#F9FAFB',
            marginLeft: 16,
            height: 60,
            borderTopStartRadius: 12,
            borderBottomStartRadius: 12,
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            marginBottom: 12,
            paddingLeft: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: 16,
        }}>
            <Text style={{ fontSize: 18, color: '#0D3B66' }}>
                {securePasswordData.name}
            </Text>
            <View style={{ flexDirection: 'row', gap: 24 }}>
                <Pressable
                    onPress={onReveal}
                    style={({ pressed }) => [{
                        opacity: pressed ? 0.7 : 1,
                    }]}
                >
                    <Ionicons name="eye" size={24} color="#0D3B66" />
                </Pressable>
                <Pressable
                    onPress={onOptions}
                    style={({ pressed }) => [{
                        opacity: pressed ? 0.7 : 1,
                    }]}
                >
                    <Entypo name="dots-three-vertical" size={24} color="#0D3B66" />
                </Pressable>
            </View>
        </View>
    )
}