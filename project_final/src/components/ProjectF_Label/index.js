import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ProjectF_Label = ({
  labelSize = 13, title, labelFamily= 'Segoe UI'
}) => {
  return (
      <Text style={styles.txt(labelSize, labelFamily)}>
              {title}
      </Text>
       
    
  );
};

export default ProjectF_Label;

const styles = StyleSheet.create({
  txt: (labelSize, labelFamily) => ({
    color: '#000000',
    fontSize: labelSize,
    fontFamily: labelFamily,
  }),
});
