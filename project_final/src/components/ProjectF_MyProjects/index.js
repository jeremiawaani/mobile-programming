import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProjectF_Label, Gap, ProjectF_Button } from '../../atoms'
import { Search, Monitor, Pencil, Keyboard, ToDoList} from '../../../assets'


const ProjectF_MyProjects = () => {
  return (
    <View style={styles.container}>
          {/* <View style={{}}> */}
          <View style={{flexDirection: 'row', height: 21}}>
            <ProjectF_Label labelFamily= 'Segoe UI Bold' labelSize= {16} title="My Projects" />
              <View style={{marginLeft: 106}}>
                <ToDoList />
              </View>
          </View>

          <ProjectF_Label title="12 Job Complete" />
          <Gap height={17}/>

          <View style={{flexDirection: 'row'}}>
            <Monitor />
            <Gap width={5}/>
            <Pencil />
            <Gap width={5}/>
            <Keyboard />
            <Gap width={110} />
            <View style = {styles.btn}>
                <ProjectF_Button title="View" />
            </View>
          </View>
        </View>
  )
}

export default ProjectF_MyProjects

const styles = StyleSheet.create({
    container:
    {
        height: 139, 
        borderRadius: 10, 
        paddingLeft: 19,
        paddingTop: 33, 
        marginLeft: 36, 
        marginRight: 31, 
        backgroundColor: '#D2F5FD'
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