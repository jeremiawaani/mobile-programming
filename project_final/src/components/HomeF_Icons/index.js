import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeF_IconsContEarn = ({icons}) => {
  return (
    <View style={styles.iconStyle}>
        <View style={styles.iconWrapper}>
            {icons}
        </View>
    </View>
  )
}

export default HomeF_IconsContEarn

const styles = StyleSheet.create({
    iconWrapper: {
        width: 40, 
        height: 40, 
        backgroundColor: 'white', 
        borderRadius: 40, 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    iconStyle: {
        flexDirection: 'column', 
        alignItems: 'center'
    },
})