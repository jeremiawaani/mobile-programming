import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Gap from '../Gap';
import CenterModal from '../CenterModal';

const ApplyModal = ({changeModalVisible, title}) => {
  // const [isModalCenterVisible, setisModalCenterVisible] = useState(false);

  const closeModal = bool => {
    changeModalVisible(bool);
  };

  // const changeModalCenterVisible = bool => {
  //   setisModalCenterVisible(bool);
  // };

  // const deleteData = () => {
  //   Alert.alert('Request Sent', 'Please wait until you are accepted', [
  //     {
  //       text: 'Cancel',
  //       onPress: () => console.log('Cancel Pressed'),
  //       style: 'cancel',
  //     },
  //     {text: 'OK', onPress: () => console.log('OK Pressed')},
  //   ]);
  // };

  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.txt}>{title}</Text>
        <View style={styles.btnContainer}>
          <Gap width={59} />
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.7}
            onPress={() => closeModal(false)}>
            <Text style={styles.btnTxt}>Yes</Text>
          </TouchableOpacity>
          <Gap width={13} />
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.7}
            onPress={() => closeModal(false)}>
            <Text style={styles.btnTxt}>No</Text>
          </TouchableOpacity>
        </View>
        {/* <Modal
          transparent={true}
          animationType="fade"
          visible={isModalCenterVisible}
          nRequestClose={() => changeModalCenterVisible(false)}>
          <CenterModal />
        </Modal> */}
      </View>
    </TouchableOpacity>
  );
};

export default ApplyModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  modal: {
    height: 210,
    width: 354,
    paddingTop: 10,
    backgroundColor: '#464646',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 200,
  },
  txt: {
    fontFamily: 'Segoe UI Bold',
    fontSize: 15,
    color: '#FFFFFF',
    marginTop: 53,
    marginLeft: 75,
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  btn: {
    width: 66,
    height: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    fontFamily: 'Segoe UI Bold',
    fontSize: 15,
    color: '#464646',
  },
});
