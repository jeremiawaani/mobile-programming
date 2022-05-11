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
  Ok,
  ProfileLomoKecil,
  Remove,
} from '../../../assets';

const PendingProjectC = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <PendingProjectF_Header
        profile={<ProfileLomoKecil />}
        tab2Text="Freelance Profile"
        onPress={() => navigation.navigate('HomeC')}
      />
      <Gap height={13} />
      <PendingProjectF_Content />
      <ScrollView style={{height: 238}}>
        <PendingProjectF_JobDetails
          title={'Design Interface'}
          subTitle={'Andre Waani'}
          JobImg={<JobPicture1 />}
          icons={<Ok />}
        />
        <PendingProjectF_JobDetails
          title={'Server Security'}
          subTitle={'Salomo Mandagi'}
          JobImg={<JobPicture2 />}
          icons={<Ok />}
        />
        <PendingProjectF_JobDetails
          title={'Database Management'}
          subTitle={'Wahyu Agung'}
          JobImg={<JobPicture3 />}
          icons={<Ok />}
        />
        <PendingProjectF_JobDetails
          title={'Software Analyst'}
          subTitle={'Gerald Wuysang'}
          JobImg={<JobPicture4 />}
          icons={<Ok />}
        />
      </ScrollView>
      <PendingProjectF_Bottom title={'Accept this job?'} />
    </View>
  );
};

export default PendingProjectC;

const styles = StyleSheet.create({});
