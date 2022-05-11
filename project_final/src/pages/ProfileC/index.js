import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  HeaderUser,
  ProfileC_Bottom,
  ProfileC_Top,
  Footer,
  HeaderClient,
} from '../../components';
import {AddTabBottom} from '../../../assets';

const ProfileC = ({navigation}) => {
  return (
    <View>
      <HeaderClient
        title="My Profile"
        onPress={() => navigation.navigate('HomeC')}
      />
      <ProfileC_Top />
      <ProfileC_Bottom onPress={() => navigation.navigate('SelectUser')} />
      <Footer search={<AddTabBottom />} />
    </View>
  );
};

export default ProfileC;

const styles = StyleSheet.create({});
