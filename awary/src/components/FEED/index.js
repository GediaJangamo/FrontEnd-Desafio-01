import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import styles from "./style";
import { useFonts } from "expo-font";
import {Feather} from "@expo/vector-icons"

export default function FEED ({ navigation }) {
  const [fontsLoaded] = useFonts({
    Lobster: require("../../../assets/fonts/Lobster/Lobster/Lobster-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Awary</Text>
      <Text style={styles.Historias}>Historias</Text>
          
      <View style = {styles.Feed}>

         <Image
          source={require("../../../assets/im2.jpg")}
          style={styles.imagem} 
         />

         <Image
          source={require("../../../assets/mm.jpg")}
          style={styles.imagem} 
         />

         <Image
          source={require("../../../assets/im2.jpg")}
          style={styles.imagem} 
         />

         <Image
          source={require("../../../assets/mm.jpg")}
          style={styles.imagem} 
         />

         <Image
          source={require("../../../assets/im2.jpg")}
          style={styles.imagem} 
         />

      </View>

      <View style = {styles.MyProfile}>
        <View style = {styles.Perfil}>
            <Image
            source={require("../../../assets/im2.jpg")}
            style={styles.imagem} 
            />

            <Text style = {styles.PerfilText}>Gedia Jangamo</Text>
        </View>

        <View style = {styles.moreMenu}>
            <Feather name="more-vertical" size={24} color="black" />
        </View>

      </View>

      <View>
        <Text style = {styles.TextPost}>Celebrando o meu casamento</Text>

        <View>
        <Image
            source={require("../../../assets/casa.jpg")}
            style={styles.imagemPost} 
            resizeMode="cover"
            />

        </View>

        <View style = {styles.Comentarios}>
           <Text>Parabens</Text>
        </View>

      </View>

       
   
    </View>
  );
}
