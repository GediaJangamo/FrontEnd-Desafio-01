import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Keyboard,
} from "react-native";
import styles from "./style";
import { useFonts } from "expo-font";
import {AntDesign} from "@expo/vector-icons"

export default function FormLogin({ navigation }) {
  const [fontsLoaded] = useFonts({
    Lobster: require("../../../assets/fonts/Lobster/Lobster/Lobster-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Awary</Text>

      <Pressable onPress={Keyboard.dismiss}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.Input}
          placeholder="ex:gedyahgennyfah@gmail.com"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.Input}
          placeholder="introduza uma senha forte"
        />

        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>SIGN IN</Text>
        </TouchableOpacity>

            <View style={styles.EsqueceuContainer}>
        
               <Text style={styles.textEs}>Esqueceu a senha?</Text>
            
               <Text style={styles.textEs}>Não tem conta?</Text>
            
            </View>



        <TouchableOpacity style={styles.ButtonGoogle}>

          <AntDesign name="google" size={28} color="white" style={styles.Icon} />
          <Text style={styles.ButtonTextGoogle}> SIGN IN WITH GOOGLE</Text>
        </TouchableOpacity>
      </Pressable>
    </View>
  );
}
