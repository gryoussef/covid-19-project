import React from 'react';
import {View, StyleSheet, Dimensions, Image, Text} from 'react-native';
import {Button} from './Button';
import {color} from 'react-native-reanimated';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'column',
    color: '#fff',
  },
  icon: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: 380,
    width: 320,
  },
  mystyle: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  buttonStyle: {
    position: 'absolute',
    bottom: -5,
    right: 15,
    width: 200,
  },
});
export const Alert = ({malade, visible}) => {
  if (!visible) return null;

  const icon = malade
    ? require('../assets/check.jpg')
    : require('../assets/good.png');
  return (
    <View style={styles.container}>
      <View style={styles.mystyle}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>
      <View style={styles.buttonStyle}>
        <Button text="Merci" />
      </View>
    </View>
  );
};
