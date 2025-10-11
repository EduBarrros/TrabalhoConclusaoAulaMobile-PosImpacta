import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  text: string;
  onPress?: () => void;
  type?: 'primary' | 'secondary';
}

export const Button = ({ text, onPress, type }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ backgroundColor: type === 'primary' ? '#F9FAFB' : '#F9FAFB', height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center', marginTop: 16, boxShadow: type === 'primary' ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <Text style={{ color: type === 'primary' ? '#0D3B66' : '#0D3B66', fontWeight: 'bold', fontSize: 16 }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}