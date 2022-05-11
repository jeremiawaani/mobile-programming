import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ProjectF_Button = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <Text style={styles.txt}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProjectF_Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#000000',
    width: 65,
    height: 28,
  },
  txt: {
    borderRadius: 10,
    fontFamily: 'Segoe UI Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
});
