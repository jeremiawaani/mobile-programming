import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconBack, Profile} from '../../../assets';
import Gap from '../Gap';

const HeaderUser = ({title, onPress}) => {
  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={onPress}>
            <IconBack style={styles.iconBack} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 5, alignItems: 'center'}}>
          <Text style={styles.txt}>{title}</Text>
        </View>
        <View style={{alignItems: 'flex-end', flex: 1}}>
          <Profile />
        </View>
      </View>
    </View>
  );
};

export default HeaderUser;

const styles = StyleSheet.create({
  container: {
    height: 94,
    marginLeft: 28,
    marginRight: 28,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  txt: {
    fontSize: 15,
    color: '#000000',
    fontFamily: 'Segoe UI Bold',
    alignSelf: 'center',
  },
});
