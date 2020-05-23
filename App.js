import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Screens/Home';
import SigninHome from './src/Screens/SigninHome';
import PhoneSignIn from './src/Screens/PhoneSignIn';
const Stack = createStackNavigator();
const App =()=>{
return (
  <NavigationContainer>
      <Stack.Navigator initialRouteName="SigninHome"  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SigninHome" component={SigninHome} />
        <Stack.Screen name="PhoneSignIn" component={PhoneSignIn} />
        
      </Stack.Navigator>
    </NavigationContainer>
)
}
export default App;

