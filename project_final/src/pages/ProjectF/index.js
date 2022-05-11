import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Footer,
  Gap,
  HeaderUser,
  ProjectF_Content,
  ProjectF_SearchJob,
} from '../../components';
import {Present, ToDoListProjects} from '../../../assets';

const ProjectF = ({navigation}) => {
  return (
    //
    <View style={{backgroundColor: '#fff'}}>
      {/* <Gap width={26} /> */}
      {/* Header */}
      {/* Header ambe dari component yang ada di repo github */}
      {/* <Header title="Projects"/> */}
      <View style={{marginRight: 7}}>
        <HeaderUser
          title="Projects"
          onPress={() => navigation.navigate('HomeF')}
        />
        <View style={{height: 450, marginTop: 15}}>
          {/* Search Job */}

          <ProjectF_SearchJob
            onPress={() => navigation.navigate('SearchJob')}
          />
          <Gap height={11} />

          <ProjectF_Content
            title="My Projects"
            subTitle="12 Job Complete"
            txtBtn="View"
            icons={<ToDoListProjects />}
            backgroundColor="#D2F5FD"
            width={106}
            onPress={() => navigation.navigate('CompleteProjectF')}
          />

          <Gap height={11} />

          <ProjectF_Content
            title="Pending Projects"
            subTitle="12 Pending Projects"
            txtBtn="View"
            icons={<Present />}
            backgroundColor="#E2D4FE"
            width={66}
            onPress={() => navigation.navigate('PendingProjectF')}
          />
        </View>
        <Gap height={25} />
      </View>
      <Footer
        onPressHome={() => navigation.navigate('HomeF')}
        onPressSearch={() => navigation.navigate('SearchJob')}
        onPressChat={() => navigation.navigate('SearchJob')}
        onPressProfile={() => navigation.navigate('ProfileF')}
      />
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
