import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SelectUser');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.txt}>Sense</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 633,
  },
  txt: {
    fontSize: 32,
    color: '#8DEAFF',
    fontFamily: 'Segoe UI Bold',
  },
});
