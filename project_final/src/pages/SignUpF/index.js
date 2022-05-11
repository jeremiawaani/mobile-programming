import {StyleSheet, View, TouchableOpacity, Button, Modal} from 'react-native';
import React, {useState} from 'react';
import {
  Gap,
  RegisterModal,
  SignUpF_Button,
  SignUpF_Footer,
  SignUpF_Header,
  SignUpF_TextInput,
} from '../../components';

const SignUpF = ({navigation}) => {
  const [isModalVisible, setisModalVisible] = useState(false);

  const changeModalVisible = bool => {
    setisModalVisible(bool);
  };
  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        nRequestClose={() => changeModalVisible(false)}>
        <View style={{height: 640, backgroundColor: '#000000AA'}}></View>
        <RegisterModal
          changeModalVisible={changeModalVisible}
          title="Account created!"
        />
      </Modal>
      <SignUpF_Header />
      <Gap height={12} />
      <View style={styles.content}>
        <SignUpF_TextInput title={'Name'} placeholder={'Name'} />
        <Gap height={8} />
        <SignUpF_TextInput
          title={'Phone Number'}
          placeholder={'Phone Number'}
        />
        <Gap height={8} />
        <SignUpF_TextInput title={'Username'} placeholder={'Username'} />
        <Gap height={8} />
        <SignUpF_TextInput title={'Password'} placeholder={'Password'} />
        <Gap height={33} />
        <SignUpF_Button onPress={() => changeModalVisible(true)} />
      </View>
      <View style={styles.footer}>
        <SignUpF_Footer onPress={() => navigation.navigate('LoginF')} />
      </View>
    </View>
  );
};

export default SignUpF;

const styles = StyleSheet.create({
  container: {
    marginRight: 7,
    backgroundColor: '#fff',
  },
  content: {
    marginLeft: 55,
    marginTop: 12,
  },
  footer: {
    marginLeft: 66,
    borderTopWidth: 1,
    borderColor: '#C0C0C0',
    marginRight: 66,
    marginTop: 46,
    backgroundColor: '#fff',
  },
});
