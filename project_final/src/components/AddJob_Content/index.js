import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';

const AddJob_Content = ({title, barImg, text, widthInput, bottomColor}) => {
  return (
    <View>
      <Image 
        style={styles.bar}
        source={barImg}
      />
      <Text style={styles.txt}>{title}</Text>
      <TextInput style={styles.txtInput(widthInput, bottomColor)}
      placeholder={text}
      placeholderTextColor='#474747'
      ></TextInput>
    </View>
  );
};

export default AddJob_Content;

const styles = StyleSheet.create({
  bar: {
    width: 80,
    height: 11,
  },
  txt: {
    position: 'absolute',
    fontFamily: 'Segoe UI Bold',
    fontSize: 15,
    color: '#030303',
    marginLeft: 7,
    marginTop: 2,
  },
    txtInput: (widthInput, bottomColor) =>
    ({
      marginTop: 8,
      fontFamily: 'Segoe UI',
      width: widthInput,
      height: 50,
      fontSize: 12,
      borderWidth: 3,
      borderRadius: 10,
      borderTopColor: '#FFFFFF',
      borderBottomColor: bottomColor,
      borderLeftColor: '#FFFFFF',
      borderRightColor: '#FFFFFF'
    }),
});
