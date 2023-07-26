import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/Home'
import FormRegister from './src/components/Home'
import FormLogin from './src/components/Home'
import {useFonts} from 'expo-font';




const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Lobster: require("./assets/fonts/Lobster/Lobster-Regular.ttf"),
  });

  if (!fontsLoaded) {
    
    //return <Preloader/>;
    return null;
  }

  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen  
              name="Home"
              component={Home}
              options={{
                headerTintColor:"#ffffff",
                 headerStyle: { backgroundColor: "#409092" }
                
              }}
            />

         <Stack.Screen name="Login" component={FormLogin} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}


