import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Profile_Button} from '../../components';
import {
  Profile,
  Pencil,
  Info,
  Achievement,
  Skills,
  IconBack,
} from '../../../assets';

const ProfileC_Bottom = ({onPress}) => {
  return (
    <View style={styles.page}>
      <Text
        style={{
          marginLeft: 50,
          marginTop: 17,
          fontFamily: 'Segoe UI',
          fontSize: 13,
        }}>
        Dashboard
      </Text>
      <Gap height={12} />
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Profile_Button
              style={{flex: 1}}
              width={40}
              title={<Info />}
              color="#D2F5FD"></Profile_Button>
          </View>
          <View style={{flex: 3, alignItems: 'flex-start'}}>
            <Text
              style={{
                fontFamily: 'Segoe UI Bold',
                color: 'black',
                fontSize: 16,
              }}>
              Company Profile
            </Text>
          </View>
          <View style={{alignItems: 'flex-end', flex: 1}}>
            <IconBack style={{transform: [{rotateY: '180deg'}]}} />
          </View>
        </View>
        <Gap height={11} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Profile_Button
              style={{flex: 1}}
              width={40}
              title={<Achievement />}
              color="#D1FBEA"></Profile_Button>
          </View>
          <View style={{flex: 3, alignItems: 'flex-start'}}>
            <Text
              style={{
                fontFamily: 'Segoe UI Bold',
                color: 'black',
                fontSize: 16,
              }}>
              Achievement
            </Text>
          </View>
          <View style={{alignItems: 'flex-end', flex: 1}}>
            <IconBack style={{transform: [{rotateY: '180deg'}]}} />
          </View>
        </View>
        <Gap height={11} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Profile_Button
              style={{flex: 1}}
              width={40}
              title={<Pencil />}
              color="#E2D4FE"></Profile_Button>
          </View>
          <View style={{flex: 3, alignItems: 'flex-start'}}>
            <Text
              style={{
                fontFamily: 'Segoe UI Bold',
                color: 'black',
                fontSize: 16,
              }}>
              Skills
            </Text>
          </View>
          <View style={{alignItems: 'flex-end', flex: 1}}>
            <IconBack style={{transform: [{rotateY: '180deg'}]}} />
          </View>
        </View>
        <Gap height={30} />
        <Profile_Button
          width={270}
          title="Log Out"
          color="#D1FBEA"
          onPress={onPress}></Profile_Button>
      </View>
    </View>
  );
};

export default ProfileC_Bottom;

const styles = StyleSheet.create({
  page: {
    paddingVertical: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  container: {
    marginLeft: 60,
    marginRight: 45,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
