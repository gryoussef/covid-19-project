import React, { useState } from 'react';
import { Button,Text, View,TextInput, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function PhoneSignIn({ navigation }) {
  // If null, no SMS has been sent


  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
     const result= await confirm.confirm(code);
     console.log(result);
  
     Alert.alert("successfully signedIn")
    } catch (error) {
      console.log('Invalid code.');
    }
  }
  const numberEntered=()=>{
    return phoneNumber==='';
  }
  if (!confirm) {
    return (
        <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
          <Text  style={{paddingTop:18,paddingLeft:33,fontSize:55 ,color:'lightblue'}}>Mon Numéro est :</Text>
          <View style={{flexDirection:'row'}}>
       
            <Text  style={{paddingTop:18,paddingRight:15,fontSize:25 ,color:'grey'}}>+212</Text>
          <TextInput style={{fontSize:35,color:'grey'}} value={phoneNumber} placeholder="enter your number" onChangeText={text => setPhoneNumber(text)} />
          </View>
        <View style={{paddingTop:50}}>
        <Button style={{height:40}} disabled={numberEntered()} title="Continue" onPress={() => signInWithPhoneNumber("+212"+phoneNumber)}/></View>
        </View>
      
    );
  }

  return (
    
    <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      <TextInput value={code} placeholder="enter verification code" onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </View>
   
  );
}