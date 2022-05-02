import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ProfileF_Button = ({title, color='#02CF8E', textColor='#020202', onPress, mL, mT, width=85, height=40}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container(color, mL, mT, width, height)}>
        <Text style={styles.text(textColor)}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ProfileF_Button

const styles = StyleSheet.create({
  container: (color, mL, mT, width, height) => ({
    width: width,
    height: height,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: mL,
    marginTop: mT,

  }),
  text: (textColor) => ({
    fontSize: 14,
    fontFamily: 'Segoe UI',
    color: textColor,
  })
})