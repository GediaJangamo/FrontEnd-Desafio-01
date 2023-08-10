import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './style';


export default function Home({navigation}){
    
   return(
   <View style = {styles.container}>
        <Text style = {styles.texto}> Awary </Text>
        <Text style = {styles.Welcome}> Welcome </Text>

        <TouchableOpacity style = {styles.Button} 
          onPress={() => navigation.navigate("FormLogin")}>
           <Text style = {styles.ButtonText}>GET STARTED</Text>
        </TouchableOpacity>
    </View>
   )
}