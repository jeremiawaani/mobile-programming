import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {
  Gap,
  PendingProjectF_Bottom,
  PendingProjectF_Content,
  PendingProjectF_Header,
  PendingProjectF_JobDetails,
} from '../../components';
import {
  JobPicture1,
  JobPicture2,
  JobPicture3,
  JobPicture4,
  Profile,
  ProfileLomoKecil,
  Remove,
} from '../../../assets';

const CurrentProjectC = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <PendingProjectF_Header
        headerText={'My\nProjects'}
        sideHeaderText="Current Project"
        width={110}
        tab1Text="Current Projects"
        tab2Text="Complete Projects"
        widthBorder={107}
        mR={37}
        profile={<ProfileLomoKecil />}
        onPress={() => navigation.navigate('HomeC')}
        onPress3={() => navigation.navigate('CompleteProjectC')}
      />
      <Gap height={13} />
      <PendingProjectF_Content />
      <ScrollView style={{height: 238}}>
        <PendingProjectF_JobDetails
          title={'Design Interface'}
          subTitle={'Andre Waani'}
          JobImg={<JobPicture1 />}
          icons={<Remove />}
        />
        <PendingProjectF_JobDetails
          title={'Server Security'}
          subTitle={'Salomo Mandagi'}
          JobImg={<JobPicture2 />}
          icons={<Remove />}
        />
        <PendingProjectF_JobDetails
          title={'Database Management'}
          subTitle={'Wahyu Agung'}
          JobImg={<JobPicture3 />}
          icons={<Remove />}
        />
        <PendingProjectF_JobDetails
          title={'Software Analyst'}
          subTitle={'Gerald Wuysang'}
          JobImg={<JobPicture4 />}
          icons={<Remove />}
        />
      </ScrollView>
      <PendingProjectF_Bottom title={'Cancel this job?'} />
    </View>
  );
};

export default CurrentProjectC;

const styles = StyleSheet.create({});
