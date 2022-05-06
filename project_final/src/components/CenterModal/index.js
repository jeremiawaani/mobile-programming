import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const CenterModal = props => {
  //   const closeModal = bool => {
  //     props.changeModalVisible(bool);
  //   };
  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.modal}></View>
    </TouchableOpacity>
  );
};

export default CenterModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    width: 300,
    height: 210,
    backgroundColor: 'yellow',
    borderRadius: 30,
  },
});
