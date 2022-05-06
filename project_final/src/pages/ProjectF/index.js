import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ProjectF_SearchJob,
  ProjectF_MyProjects,
  Gap,
  ProjectF_PendingProjects,
  Footer,
  HeaderUser,
  ProjectF_Content,
} from '../../components';
import { Present, SearchProject, ToDoListProjects } from '../../../assets';

const ProjectF = () => {
  return (
    //
    <View style={{}}>
      {/* <Gap width={26} /> */}
      {/* Header */}
      {/* Header ambe dari component yang ada di repo github */}
      {/* <Header title="Projects"/> */}
      <View style={{marginRight: 7}}>
        <HeaderUser title="Projects" />
        <View style={{height: 450, marginTop: 15}}>
<<<<<<< HEAD
          <ProjectF_Content 
            title="Looking for A Job"
            subTitle="12 Job Available"  
            txtBtn="Find"  
            icons={<SearchProject/>} 
            backgroundColor='#D1FBEA'
            width={61}
            />

=======
          {/* Search Job */}

          <ProjectF_SearchJob />
>>>>>>> 04feef3c6189619008f27ae115a97ed9bd2f7675
          <Gap height={11} />

          <ProjectF_Content 
          title="My Projects" 
          subTitle="12 Job Complete"  
          txtBtn="View"  
          icons={<ToDoListProjects/>} 
          backgroundColor='#D2F5FD'
          width={106}
          />

          <Gap height={11} />

          <ProjectF_Content 
            title="Pending Projects" 
            subTitle="12 Pending Projects"  
            txtBtn="View"  
            icons={<Present/>} 
            backgroundColor='#E2D4FE'
            width={66}
          />
        </View>
        <Gap height={25} />
      </View>
      <Footer />
      {/* Footer ambe di github */}
    </View>
  );
};

export default ProjectF;

const styles = StyleSheet.create({
  searchWrapper: {
    backgroundColor: '#D1FBEA',
    height: 139,
    borderRadius: 10,
    paddingLeft: 19,
    paddingTop: 33,
    marginLeft: 36,
    marginRight: 31,
  },
});
