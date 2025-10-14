// storageService.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import CryptoJS from "crypto-js";
import Constants from "expo-constants";

const SECRET = Constants.expoConfig?.extra?.ENCRYPTION_KEY;

export async function setSecureItem(key: string, value: any) {
  try {
    const json = JSON.stringify(value);
    const encrypted = CryptoJS.AES.encrypt(json, SECRET).toString();
    await AsyncStorage.setItem(key, encrypted);
  } catch (err) {
    console.error("Erro ao salvar item criptografado:", err);
  }
}

export async function getSecureItem(key: string) {
  try {
    const encrypted = await AsyncStorage.getItem(key);
    if (!encrypted) return null;
    const bytes = CryptoJS.AES.decrypt(encrypted, SECRET);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decrypted);
  } catch (err) {
    console.error("Erro ao ler item criptografado:", err);
    return null;
  }
}
