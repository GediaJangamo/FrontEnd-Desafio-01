import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/Home'
import FormRegister from './src/components/FormRegister'
import FormLogin from './src/components/FormLogin'
import {useFonts} from 'expo-font';
import FORGOTPASSWORD from './src/components/FORGOTPASSWORD';
import FEED from './src/components/FEED';


const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    Lobster: require("./assets/fonts/Lobster/Lobster/Lobster-Regular.ttf"),
  });

  if (!fontsLoaded) {
    
    return null;
  }

  return (
        <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen  
              name="Home"
              component={Home}
              options={{
                 headerTintColor:"#409092",
                 headerStyle: { backgroundColor: "#6F8BAB" },
                 headerShadowVisible: true,
                 headerTitle: '',
                
              }}
            />

         <Stack.Screen name="FormLogin" component={FormLogin}  
               options={{
                 headerTintColor:"#ffffff",
                 headerStyle: { backgroundColor: "#B0BEC5" },
                 headerShadowVisible: true,
                 headerTitle: '',
                
              }}/>
         
         <Stack.Screen name="FormRegister" component={FormRegister}  
          options={{
            headerTintColor:"#ffffff",
            headerStyle: { backgroundColor: "#B0BEC5" },
            headerShadowVisible: true,
            headerTitle: '',
           
         }}
         
         
         />
         <Stack.Screen name="FORGOTPASSWORD" component={FORGOTPASSWORD} 
           options={{
            headerTintColor:"#ffffff",
            headerStyle: { backgroundColor: "#6F8BAB" },
            headerShadowVisible: true,
            headerTitle: '',
           
         }}
         
         
         />

         <Stack.Screen name="FEED" component={FEED} 
           options={{
            headerTintColor:"#ffffff",
            headerStyle: { backgroundColor: "#6F8BAB" },
            headerShadowVisible: true,
            headerTitle: '',
           
         }}
         
         
         />
          </Stack.Navigator>
        </NavigationContainer>
  );
}


