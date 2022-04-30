import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const DetailsF_BarClient = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/BarUngu.png')}
        style={styles.bar}
      />
      <Text style={styles.txt}>Your Client</Text>
      <Text style={styles.txtContent}>{'John Doe’s Co.'}</Text>
    </View>
  );
};

export default DetailsF_BarClient;

const styles = StyleSheet.create({
  bar: {
    width: 80,
    height: 11,
  },
  txt: {
    position: 'absolute',
    fontFamily: 'Segoe UI Bold',
    fontSize: 15,
    color: '#030303',
    marginLeft: 7,
    marginTop: 2,
  },
  txtContent: {
    fontFamily: 'Segoe UI',
    fontSize: 12,
    color: '#000000',
    marginLeft: 7,
    marginTop: 12,
  },
});
