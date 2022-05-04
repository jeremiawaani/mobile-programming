import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProjectF_SearchJob, ProjectF_MyProjects, Gap, ProjectF_PendingProjects, Footer, HeaderUser} from '../../components'


const ProjectF = () => {
  return (
    // 
    <View style={{marginRight: 7}}>
    {/* <Gap width={26} /> */}
    {/* Header */}
    {/* Header ambe dari component yang ada di repo github */}
      {/* <Header title="Projects"/> */}
      <HeaderUser title="Projects"/>
      <View style={{height: 450, marginTop: 15}}>
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