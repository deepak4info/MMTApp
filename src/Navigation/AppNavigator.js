import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/SplashScreen/Splash'
import SelectLanguage from '../Screens/Lang/SelectLanguage';
import Login from '../Screens/Login/Login';
import Home from '../Screens/HomeScreen/Home';


const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash}  
          options={{headerShown:false}}
          />
           <Stack.Screen name="SelectLanguage" component={SelectLanguage}
          options={{headerShown:false}}
          />
          
           <Stack.Screen name="Login" component={Login}
          options={{headerShown:false}}
          /> 
          <Stack.Screen name="Home" component={Home}
          options={{headerShown:false}}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
export default AppNavigator
