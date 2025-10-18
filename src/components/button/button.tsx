import { Pressable, Text } from "react-native";

interface ButtonProps {
  text: string;
  onPress?: () => void;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button = ({ text, onPress, type = 'primary', disabled = false }: ButtonProps) => {
  const isPrimary = type === 'primary';

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({pressed}) => [{
        height: 48,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        backgroundColor: isPrimary ? '#0D3B66' : '#E2E8F0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 2,
        opacity: pressed ? 0.7 : 1,
      }]}
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
    </Pressable>
  );
};
