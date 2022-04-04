import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, TextInput, Gap} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" />
      <View style={styles.contentWrapper}>
        <TextInput
          title="Email Address"
          placeholder="Type your email address"
        />

        <Gap height={16} />
        <TextInput title="Password" placeholder="Type your password" />

        <Gap height={24} />
        <Button title="Sign In" />

        <Gap height={12} />
        <Button
          title="Create New Account"
          color="#8D92A3"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    marginTop: 24,
    paddingTop: 26,
  },
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
