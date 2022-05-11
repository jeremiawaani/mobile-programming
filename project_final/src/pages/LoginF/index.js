import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInputRN,
} from 'react-native';
import React from 'react';
import {LoginF_Header, LoginF_Content, LoginF_Footer} from '../../components';

const LoginF = ({navigation}) => {
  return (
    <View style={{marginRight: 7, backgroundColor: '#fff'}}>
      {/* Header */}
      <LoginF_Header
        text="Sense"
        onPress={() => navigation.navigate('SelectUser')}
      />
      {/* <Text>Halo</Text> */}
      {/* Content */}
      <LoginF_Content onPress={() => navigation.navigate('HomeF')} />
      {/* Footer */}
      <LoginF_Footer onPress={() => navigation.navigate('SignUpF')} />
    </View>
  );
};

export default LoginF;
