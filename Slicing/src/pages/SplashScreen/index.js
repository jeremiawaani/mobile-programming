import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.txt}>Money Tracker</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  txt: {
    fontFamily: 'Poppins-Medium',
    fontSize: 32,
    color: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#02CF8E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
