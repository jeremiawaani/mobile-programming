import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';
import {IconBack} from '../../../assets';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign Up" onBack={() => navigation.goBack('SignIn')} />
      <Gap height={24} />

      <View style={styles.contentWrapper}>
        <View style={styles.avatarWrapper}>
          <View style={styles.border}>
            <View style={styles.addPhoto}>
              <Text style={styles.addPhotoText}>Add Photo</Text>
            </View>
          </View>
        </View>
        <TextInput title="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          title="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput title="Password" placeholder="Type your password" />

        <Gap height={24} />
        <Button title="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 24,
  },
  addPhoto: {
    width: 90,
    height: 90,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
  },
  addPhotoText: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
    maxWidth: 40,
    textAlign: 'center',
  },
  border: {
    borderWidth: 1,
    borderRadius: 110,
    width: 110,
    height: 110,
    borderColor: '#8D92A3',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
  avatarWrapper: {
    marginTop: 26,
    marginBottom: 16,
    alignItems: 'center',
  },
});
