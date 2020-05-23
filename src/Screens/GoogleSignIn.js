import {Alert} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin , GoogleSigninButton} from '@react-native-community/google-signin';
import firestore from '@react-native-firebase/firestore'
GoogleSignin.configure({
    webClientId: '488076642820-4uor3a4hs3el60629rdh177ttt2lkfqt', 
  });

export default function SignIn(){
    return(
      <GoogleSigninButton  style={{ width: 192, height: 48 }}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}  onPress={() => onGoogleButtonPress().then(signin)}>
      </GoogleSigninButton>
    )
}
async function onGoogleButtonPress() {
    // Get the users ID token
     res= await GoogleSignin.signIn();
     //console.log(res)
     const { idToken }=res
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
   // console.log(googleCredential);
    // Sign-in the user with the credential
    console.log(auth().currentUser)
    return auth().signInWithCredential(googleCredential);
  }
  
const signin=(data)=>{
  console.log(auth().currentUser)
  const usersCollection = firestore().collection('user');
  usersCollection.add({
    id:data.user.uid,
    name:data.user.displayName,
    photo:data.user.photoURL,
    email:data.user.email,
    

  })
  Alert.alert("successfully signedIn")

}