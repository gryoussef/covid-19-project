import React from 'react';
import {View ,StyleSheet,Text,Image, Button} from 'react-native';
import GoogleSignIn from './GoogleSignIn';


const SigninHome =({ navigation })=>{
    
    return (
        <View style={Styled}>
        <Image
        style={logo}
            source={require('../assets/images/logo.png')}
          />
        <View style={{paddingTop:50}}>
        <GoogleSignIn navigation={navigation}></GoogleSignIn>
        <View style={{marginTop:20 }} >
        <Button title="Sign in with phone" color="#85a392"  onPress={()=>{navigation.navigate('PhoneSignIn')}}></Button></View>
        </View>
        </View>
    )
    }
    export default SigninHome;


    const Styled={
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }
  
    const logo={
      marginBottom:50,
      width: 150,
      height: 150,
      
    }
   