import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { Gap, LoginF_Button, LoginF_LabelActive, LoginF_TextInput} from '../../atoms'
import { ToggleOn } from '../../../assets'


const LoginF_Content = ({}) => {
  return (
    <View style={styles.container}>
        <LoginF_TextInput placeholder="Username" />
        <Gap height={10} />
        <LoginF_TextInput placeholder="Password"/>
        <View style={styles.rememberMe}>
          <ToggleOn />
          <Gap width={9} />
          <LoginF_LabelActive title="Remember Me" labelColor= '#808080' />
        </View>
        <Gap height={9} />
        <LoginF_Button title="Login" />
        <Gap height={20} />
        <LoginF_LabelActive title="Forgot Password?" labelColor= '#50DFFF'/>
    </View>
  )
}

export default LoginF_Content

const styles = StyleSheet.create({
    container:
    {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 26,
    },  
    rememberMe:
    {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 25,
      marginRight: 125
    }
    
})