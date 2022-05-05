import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Pencil, Profile, ProfileLomoBesar} from '../../../assets';
import {Gap, Profile_Button} from '../../components';

const ProfileC_Top = ({name = 'Salomo Mandagi', status = 'JCOs Director'}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <ProfileLomoBesar height={70} width={70} />
        <Gap width={23} />
        <View>
          <Text style={styles.textName}>{name}</Text>
          <Text style={styles.statusName}>{status}</Text>
        </View>
        <Gap width={60} />
        <Pencil />
      </View>
      <Text
        style={{
          marginLeft: 50,
          marginTop: 17,
          fontFamily: 'Segoe UI',
          fontSize: 13,
        }}>
        My Status
      </Text>
      <Gap height={10} />
      <View style={styles.container}>
        <Profile_Button title="Online" color="#E2D4FE" />
        <Gap width={9} />
        <Profile_Button title="Offline" color="#D1FBEA" />
        <Gap width={9} />
        <Profile_Button title="Looking for Service" color="#D2F5FD" />
      </View>
    </View>
  );
};

export default ProfileC_Top;

const styles = StyleSheet.create({
  page: {
    paddingVertical: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textName: {
    fontFamily: 'Segoe UI Bold',
    fontSize: 16,
    color: 'black',
  },
  statusName: {
    fontFamily: 'Segoe UI',
  },
});
