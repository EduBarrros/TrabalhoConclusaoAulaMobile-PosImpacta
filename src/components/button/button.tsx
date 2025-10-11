import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  text: string;
  onPress?: () => void;
  type?: 'primary' | 'secondary';
}

export const Button = ({ text, onPress, type = 'primary' }: ButtonProps) => {
  const isPrimary = type === 'primary';

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        height: 48,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        backgroundColor: isPrimary ? '#0D3B66' : '#E2E8F0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 2,
      }}
    >
      <Text
        style={{
          color: isPrimary ? '#F9FAFB' : '#0D3B66',
          fontWeight: 'bold',
          fontSize: 16,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
