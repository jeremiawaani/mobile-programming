import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInputRN,
} from 'react-native';
import React from 'react';
import {LoginF_Header, LoginF_Content, LoginF_Footer} from '../../components';

const LoginC = ({navigation}) => {
  return (
    <View style={{marginRight: 7}}>
      {/* Header */}
      <LoginF_Header text="Sense" />
      {/* <Text>Halo</Text> */}
      {/* Content */}
      <LoginF_Content onPress={() => navigation.navigate('HomeC')} />
      {/* Footer */}
      <LoginF_Footer />
    </View>
  );
};

export default LoginC;
