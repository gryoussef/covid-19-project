import React, {Component} from 'react';
import Button from '../components/Button';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class First extends Component {
  render() {
    return (
      <LinearGradient colors={['#48A0B4', '#F0FBFD']} style={styles.container}>
        <Image source={require('../assets/logo1.png')} style={styles.image} />
        <View style={styles.text_view}>
          <Text style={styles.text}>
            Est ce que vous voulez que vous soyez{' '}
          </Text>
          <Text style={styles.text}>protéger si vous avez été en contact </Text>
          <Text style={styles.text}>étroit avec un cas COVID-19,que vous </Text>
          <Text style={styles.text}>connaissiez ou non la personne, </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.text, {color: '#66B2C0'}]}>StayAtHome</Text>
            <Text style={styles.text}>vous aide à contacter les</Text>
          </View>
          <Text style={styles.text}>traceurs pour vous appeler plus </Text>
          <Text style={styles.text}>rapidement.</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Second')}
          style={styles.btn}>
          <Text style={styles.btn_text}>je veux l'aide</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 350,
    flex: 3,
  },
  text: {
    fontSize: 18,
    paddingVertical: 5,
    marginHorizontal: 8,
  },
  btn: {
    flex: 0.5,
    alignSelf: 'center',
    backgroundColor: '#304092',
    padding: 10,
    // shadowColor:'black',
    // shadowRadius:12,
    marginVertical: 50,
  },
  btn_text: {
    color: 'white',
    fontSize: 20,
  },
  text_view: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
});
