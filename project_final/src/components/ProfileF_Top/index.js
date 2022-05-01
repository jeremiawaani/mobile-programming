import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Profile } from '../../../assets'
import Gap from '../Gap'

const ProfileF_Top = ({name='Erick Chang', status='Senior Designer'}) => {
  return (
    <View style={styles.container}>
      <Profile height={70} width={70}/>
      
    </View>
  )
}

export default ProfileF_Top

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
})