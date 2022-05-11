import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import Gap from '../Gap';
import ApplyModal from '../ApplyModal';

const PendingProjectF_Bottom = ({title}) => {
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
        <View style={{height: 600, backgroundColor: '#000000AA'}}></View>
        <ApplyModal changeModalVisible={changeModalVisible} title={title} />
      </Modal>
      <Gap height={4} />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => changeModalVisible(true)}>
        <View style={styles.buttonStyles}>
          <Text style={styles.txt}>Confirm</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PendingProjectF_Bottom;

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 80,
    alignItems: 'center',
  },
  buttonStyles: {
    width: 302,
    height: 31,
    backgroundColor: '#50DFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontFamily: 'Segoe UI',
    fontSize: 13,
    color: '#FFFFFF',
  },
});
