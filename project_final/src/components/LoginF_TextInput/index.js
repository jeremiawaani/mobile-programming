import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'
import React from 'react'


const LoginF_TextInput = ({placeholder}) => {
  return (
    <View>
      <TextInputRN style={styles.txtInput}>{placeholder}</TextInputRN>
    </View>
  )
}

export default LoginF_TextInput

const styles = StyleSheet.create({

    txtInput:{
        borderColor: '#8DEAFF',
        borderRadius: 10,
        borderWidth: 1,
        // marginLeft: 62,
        // justifyContent: 'center',
        // alignItems: 'center',
        // alignSelf: 'center',
        paddingTop: 10,
        width: 251,
        height: 37,
        paddingLeft: 14,
        fontFamily: 'Segoe UI',
        fontSize: 13,
        color: '#808080',
    }
})