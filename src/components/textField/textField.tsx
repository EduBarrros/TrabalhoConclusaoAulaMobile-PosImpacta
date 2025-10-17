import { TextInput } from 'react-native';

interface TextFieldProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
}

export const TextField = ({ placeholder, value, onChangeText, secureTextEntry = false }: TextFieldProps) => {
  return (
    <TextInput
      placeholderTextColor="#94A3B8"
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      style={{
        color: '#0D3B66',
        padding: 16,
        backgroundColor: '#F1F5F9',
        height: 56,
        borderRadius: 12,
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)'
      }} />
  );
}