import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconBack, Profile} from '../../../assets';
import Gap from '../Gap';

const HeaderUser = ({title}) => {
  return (
    <View style={styles.container}>
      <Gap width={29} />
      <IconBack style={styles.iconBack} />
      <Gap width={91} />
      <Text style={styles.txt}>{title}</Text>
      <Gap width={78} />
      <Profile />
      <Gap width={38} />
    </View>
  );
};

export default HeaderUser;

const styles = StyleSheet.create({
  container: {
    height: 94,
    alignItems: 'center',
    flexDirection: 'row',
  },
  txt: {
    fontSize: 15,
    color: '#000000',
    fontFamily: 'Segoe UI Bold',
  },
});
