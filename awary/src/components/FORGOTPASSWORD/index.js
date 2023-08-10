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


export default function FORGOTPASSWORD({ navigation }) {
  const [fontsLoaded] = useFonts({
    Lobster: require("../../../assets/fonts/Lobster/Lobster/Lobster-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Reset Password</Text>

      <Pressable onPress={Keyboard.dismiss}>
        <Text style={styles.label}>New Password</Text>
        <TextInput
          style={styles.Input}
          placeholder="Enter you new Password"
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.Input}
          placeholder="Enter the same Password"
        />

        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>Reset Password</Text>
        </TouchableOpacity>

            <View style={styles.EsqueceuContainer}>
               <Text style={styles.textEs}   
               onPress={() => navigation.navigate("FormLogin")}
               
               >Login? Click here</Text>
            
            </View>
       
      </Pressable>
    </View>
  );
}
