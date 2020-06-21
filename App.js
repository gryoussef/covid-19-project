import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Screens/Home';
import SigninHome from './src/Screens/SigninHome';
import PhoneSignIn from './src/Screens/PhoneSignIn';

import First from './src/Screens/First';
import Second from './src/Screens/Second';
import Quiz from './src/Screens/Quiz';
import SignIn from './src/Screens/GoogleSignIn';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="First"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Fisrt" component={First} />
        <Stack.Screen name="Second" component={Second} />

        <Stack.Screen name="SigninHome" component={SigninHome} />
        <Stack.Screen name="PhoneSignIn" component={PhoneSignIn} />
        <Stack.Screen name="GoogleSignin" component={SignIn} />
        <Stack.Screen name="Quiz" component={Quiz} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
