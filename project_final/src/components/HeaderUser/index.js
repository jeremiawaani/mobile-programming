import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconBack, Profile} from '../../../assets';
import Gap from '../Gap';

const HeaderUser = ({title}) => {
  return (
    <View style={styles.container}>
      <Gap width={26}/>
      <View >
        <IconBack style={styles.iconBack} />
      </View>
      <Gap width={91} />
      <View style={{height: 20, width: 78}}>
        <Text style={styles.txt}>{title="Search Job"}</Text>
      </View>
      <Gap width={78} />
      <View >
        <Profile />
      </View>
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
    alignSelf: 'center'
  },
});
