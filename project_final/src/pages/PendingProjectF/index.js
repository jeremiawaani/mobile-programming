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
} from '../../../assets';

const PendingProjectF = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <PendingProjectF_Header
        profile={<Profile />}
        onPress={() => navigation.navigate('ProjectF')}
      />
      <Gap height={13} />
      <PendingProjectF_Content />
      <ScrollView style={{height: 238}}>
        <PendingProjectF_JobDetails
          title={'Design Interface'}
          subTitle={'PT. Shopee'}
          JobImg={<JobPicture1 />}
        />
        <PendingProjectF_JobDetails
          title={'Server Security'}
          subTitle={'PT. Tokopedia'}
          JobImg={<JobPicture2 />}
        />
        <PendingProjectF_JobDetails
          title={'Database Management'}
          subTitle={'PT. Traveloka'}
          JobImg={<JobPicture3 />}
        />
        <PendingProjectF_JobDetails
          title={'Software Analyst'}
          subTitle={'PT. Bukalapak'}
          JobImg={<JobPicture4 />}
        />
      </ScrollView>
      <PendingProjectF_Bottom title={'Cancel this job?'} />
    </View>
  );
};

export default PendingProjectF;

const styles = StyleSheet.create({});
