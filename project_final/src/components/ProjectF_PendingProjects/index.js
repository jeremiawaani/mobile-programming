import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProjectF_Label, Gap, ProjectF_Button } from '../../atoms'
import { Present, Monitor, Keyboard, Pencil } from '../../../assets'
const ProjectF_PendingProjects = () => {
  return (
    <View style={styles.container}>
          {/* <View style={{}}> */}
          <View style={{flexDirection: 'row', height: 21}}>
            <ProjectF_Label labelFamily='Segoe UI Bold' labelSize={16} title="Pending Projects"/>
              <View style={{marginLeft: 71}}>
              <Present />
              </View>
          </View>

          <ProjectF_Label title="12 Pending Projects"/>
          <Gap height={17}/>

          <View style={{flexDirection: 'row'}}>
            <Monitor />
            <Gap width={5}/>
            <Pencil />
            <Gap width={5}/>
            <Keyboard />
            <Gap width={110} />
            <View style = {styles.btn}>
              <ProjectF_Button title="View"/>
            </View>
          </View>
        </View>
        
  )
}

export default ProjectF_PendingProjects

const styles = StyleSheet.create({
    container:
    {
        backgroundColor:'#E2D4FE', 
        height: 139,  
        borderRadius: 10, 
        paddingLeft: 19,
        paddingTop: 33, 
        marginLeft: 36, 
        marginRight: 31
    },
    btn:
    {
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 20, 
        backgroundColor: '#000000',  
        width: 65
    }
})