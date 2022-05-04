import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconBack } from '../../assets/icons'
import { Gap } from '../../components/atoms'
import { UserPhoto, Monitor, Pencil, Keyboard, Search, ToDoList, Present } from '../../assets'
import Header from '../../components/molecules/Header'
import { ProjectF_SearchJob, ProjectF_MyProjects} from '../../components/molecules'
import ProjectF_PendingProjects from '../../components/molecules/ProjectF_PendingProjects'



const ProjectF = () => {
  return (
    // 
    <View style={{marginRight: 7}}>
    {/* <Gap width={26} /> */}
    {/* Header */}
    {/* Header ambe dari component yang ada di github */}
      {/* <Header title="Projects"/> */}
      <View style={{height: 450, marginTop: 11}}>
        {/* Search Job */}
        <ProjectF_SearchJob />
        <Gap height={11} />

        {/*My Projects*/}
        <ProjectF_MyProjects />
      
        <Gap height={11}/>

        {/* Pending Projects */}
        <ProjectF_PendingProjects />
  {/* Footer */}
  {/* Footer ambe di github */}
      </View>
    </View>
  )
}

export default ProjectF

const styles = StyleSheet.create({
  searchWrapper:{
    backgroundColor:'#D1FBEA',
    height: 139,
    borderRadius: 10,
    paddingLeft: 19,
    paddingTop: 33,
    marginLeft: 36,
    marginRight: 31,
  }
})