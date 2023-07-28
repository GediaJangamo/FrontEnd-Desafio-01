import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/Home'
import FormRegister from './src/components/FormRegister'
import FormLogin from './src/components/FormLogin'
import {useFonts} from 'expo-font';


const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    Lobster: require("./assets/fonts/Lobster/Lobster/Lobster-Regular.ttf"),
  });

  if (!fontsLoaded) {
    
    //return <Preloader/>;
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
                 headerStyle: { backgroundColor: "#409092" },
                 headerShadowVisible: true,
                 headerTitle: null,
                
              }}
            />

         <Stack.Screen name="FormLogin" component={FormLogin}  
               options={{
                 headerTintColor:"#ffffff",
                 headerStyle: { backgroundColor: "#409092" },
                 headerShadowVisible: true,
                 headerTitle: '',
                
              }}/>
         
         <Stack.Screen name="FormRegister" component={FormRegister} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}


