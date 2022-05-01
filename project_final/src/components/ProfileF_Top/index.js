import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Profile } from '../../../assets'
import Gap from '../Gap'

const ProfileF_Top = ({name='Erick Chang', status='Senior Designer'}) => {
  return (
    <View style={styles.container}>
      <Profile height={70} width={70}/>
      <Gap width={23} />
      <View>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.statusName}>{status}</Text>
      </View>
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
  textName: {
    fontFamily: 'Segoe UI Bold',
    fontSize: 16, 
  },
  statusName: {
    fontFamily: 'Segoe UI'
  }
})