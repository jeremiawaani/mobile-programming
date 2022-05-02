import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gap, ProjectF_Label } from '../../atoms'
import { Search, Monitor, Pencil, Keyboard} from '../../../assets'
import ProjectF_Button from '../../atoms/ProjectF_Button'

const ProjectF_SearchJob = ({labelPassiveColor, labelPassiveFamily, labelActiveColor}) => {
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', height: 21}}>
            <ProjectF_Label labelSize={16} labelFamily= 'Segoe UI Bold' title= "Looking for a job"/>
            <View style={{marginLeft: 60}}>
            <Search />
            </View>
        </View>

        <ProjectF_Label labelSize={13} title= "12 Job Available"/>
        <Gap height={17}/>

        <View style={{flexDirection: 'row'}}>
          <Monitor />
          <Gap width={5}/>
          <Pencil />
          <Gap width={5}/>
          <Keyboard />
          <Gap width={110} />
          <ProjectF_Button title="Find" />
        </View>
      </View>
  )
}

export default ProjectF_SearchJob

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#D1FBEA',
        height: 139,
        borderRadius: 10,
        paddingLeft: 19,
        paddingTop: 33,
        marginLeft: 36,
        marginRight: 31,
      },
      txt:
      {
        fontFamily: 'Segoe UI Bold',
        fontSize: 16,
        color: '#000000'
      }
})