import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Gap from '../Gap'
import { Pencil, StackJob, WebShield } from '../../../assets'
import HomeF_ContentBorder from '../HomeF_ContentBorder'

const HomeF_ContentJobCat = ({color='#D1FBEA'}) => {
  return (
    <View style={{backgroundColor: '#FFFFFF', height: 176}}>
            <Text style={{fontFamily: 'Segoe UI Bold', fontSize: 14, marginTop: 2, marginLeft: 36, color: '#000000'}}>Job Category</Text>
            <Gap height={15}/>
           <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <HomeF_ContentBorder icons={<Pencil/>} title={"Design"} totJobs={"3.2K Jobs"}/>
                <Gap width={11} />
                <HomeF_ContentBorder icons={<StackJob/>} title={"Network"} totJobs={"2.6K Jobs"} color={'#D2F5FD'}/>
                <Gap width={11} />
                <HomeF_ContentBorder icons={<WebShield/>} title={"Security"} totJobs={"1.6K Jobs"} color={'#E2D4FE'}/>
           </View>
    </View>
  )
}

export default HomeF_ContentJobCat

const styles = StyleSheet.create({
   
})