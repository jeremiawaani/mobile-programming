import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Footer, Gap, HomeF_ContentEarnings, HomeF_ContentJobCat, HomeF_Header } from '../../components'

const HomeF = () => {
  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
      <HomeF_Header/>
      <Gap height={8}/>
      <HomeF_ContentEarnings/>
      <Gap height={15}/>
      <HomeF_ContentJobCat/>
      <Gap height={1}/>
      <Footer/>
    </View>
  )
}

export default HomeF

const styles = StyleSheet.create({})