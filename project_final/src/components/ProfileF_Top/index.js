import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pencil, Profile } from '../../../assets'
import Gap from '../Gap'

const ProfileF_Top = ({name='Erick Chang', status='Senior Designer'}) => {
  return (
    <View style={styles.page}>
    <View style={styles.container}>
      <Profile height={70} width={70}/>
      <Gap width={23} />
      <View>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.statusName}>{status}</Text>
      </View>
      <Gap width={60} />
      <Pencil />
      
      
    </View>
    
    <Text style={{marginLeft: 50, marginTop: 17, fontFamily: 'Segoe UI', fontSize: 13}}>My Status</Text>
    </View>
    
  )
}

export default ProfileF_Top

const styles = StyleSheet.create({
  page:{
    paddingVertical: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  container: {
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textName: {
    fontFamily: 'Segoe UI Bold',
    fontSize: 16, 
    color: 'black',
  },
  statusName: {
    fontFamily: 'Segoe UI'
  }
})