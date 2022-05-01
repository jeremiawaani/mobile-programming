import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Gap, ProfileF_Button} from '../../components'
import { Profile, Pencil, Info, Achievement, Skills, IconBack } from '../../../assets'

const ProfileF_Bottom = () => {
  return (
    <View style={styles.page}>
      <Text style={{marginLeft: 50, marginTop: 17, fontFamily: 'Segoe UI', fontSize: 13}}>Dashboard</Text>
      <Gap height={12} />
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ProfileF_Button width={40} title={<Info/>} color='#D2F5FD'></ProfileF_Button>
        <Gap width={20} />
        <Text style={{fontFamily: 'Segoe UI Bold', color: 'black', fontSize: 16}}>Information</Text>
        <Gap width={70} />
        <IconBack style={{transform: [{ rotateY: '180deg' }]}} />
        </View>
      </View>
    </View>
  )
}

export default ProfileF_Bottom

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
 
})