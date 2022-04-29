import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconBack, Profile} from '../../../assets';
import Gap from '../Gap';

const DetailsF_Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <IconBack />
      </View>
      <Gap width={240} />
      <Profile />
    </View>
  );
};

export default DetailsF_Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  border: {
    width: 30,
    height: 30,
    backgroundColor: '#EDF5F7',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 3,
    marginLeft: 25,
  },
});
