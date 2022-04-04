import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconBack, Profile} from '../../../../assets';
import {Gap} from '../../atoms';

const Header = ({title, onBack, subTitle}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity onPress={onBack} activeOpacity={0.7}>
          <View style={styles.back}>
            <IconBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.txt}>{title}</Text>
        <Text style={styles.subTxt}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingVertical: 38,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  back: {
    paddingBottom: 17,
    marginRight: 32,
  },
  subTxt: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },
});
