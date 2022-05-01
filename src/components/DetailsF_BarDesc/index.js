import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const DetailsF_BarDesc = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/BarBiru.png')}
        style={styles.bar}
      />
      <Text style={styles.txt}>Description</Text>
      <Text style={styles.txtContent}>
        {
          'Lorem ipsum dolor sit amet, consectetur adipiscing\nelit. Aliquam mi mauris vestibulum aliquam viverra\nconsectetur molestie nibh. Id habitant sodales\nmalesuada ullamcorper faucibus hac in. Amet cras\nmassa tempus eu vitae vitae, ut. Mauris, turpis dapibus\norci donec risus.'
        }
      </Text>
    </View>
  );
};

export default DetailsF_BarDesc;

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
