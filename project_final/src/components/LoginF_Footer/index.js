import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LoginF_LabelActive } from '../../atoms'
import { Gap } from '../../atoms'
const LoginF_Footer = () => {
  return (
    <View style={styles.container}>
        <View style={{borderTopWidth:1, width:232, borderTopColor: '#C0C0C0'}}/>
        <Gap height={16} />
        <LoginF_LabelActive title="Don't have an account?" labelColor= '#808080' />
        <Gap height={10} />
        <LoginF_LabelActive title="Sign Up" labelColor= '#50DFFF'/>
    </View>
  )
}

export default LoginF_Footer

const styles = StyleSheet.create({
    container:
    {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    }
})