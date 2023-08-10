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
          
      <Text style={styles.textEs}   
       onPress={() => navigation.navigate("FormRegister")}
               
      >Don't have an account?</Text>

      <Pressable onPress={Keyboard.dismiss}>
        {/* <Text style={styles.label}>Email</Text> */}
        <TextInput
          style={styles.Input}
          placeholder="Email"
        />

        {/* <Text style={styles.label}>Senha</Text> */}
        <TextInput
          style={styles.Input}
          placeholder="Password"
        />

        <Text style={styles.textEs}  
                onPress={() => navigation.navigate("FORGOTPASSWORD")}
               
        >Forgot Password?</Text>

        <TouchableOpacity style={styles.Button} 
         onPress={() => navigation.navigate("FEED")}
        >
          <Text style={styles.ButtonText}>SIGN IN</Text>
        </TouchableOpacity>

            {/* <View style={styles.EsqueceuContainer}>
        
               <Text style={styles.textEs}  
                onPress={() => navigation.navigate("FORGOTPASSWORD")}
               
               >Forgot Password?</Text>
            
               <Text style={styles.textEs}   
               onPress={() => navigation.navigate("FormRegister")}
               
               >Don't have an account?</Text>
            
            </View> */}

               <Text style={styles.textSign}   
               onPress={() => navigation.navigate("FormRegister")}
               
               >or sign in with</Text>

        <TouchableOpacity style={styles.ButtonGoogle}>

          <AntDesign name="google" size={28} color="white" style={styles.Icon} />
          <Text style={styles.ButtonTextGoogle}>GOOGLE</Text>
        </TouchableOpacity>
      </Pressable>
    </View>
  );
}
