import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Gap from '../Gap';

const PendingProjectF_Bottom = () => {
  return (
    <View style={styles.container}>
      <Gap height={4} />
      <TouchableOpacity activeOpacity={0.7}>
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
    height: 67,
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
