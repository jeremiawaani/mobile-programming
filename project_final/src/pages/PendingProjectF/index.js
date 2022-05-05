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
  Remove,
} from '../../../assets';

const PendingProjectF = () => {
  return (
    <View>
      <ScrollView>
        <PendingProjectF_Header profile={<Profile />} />
        <Gap height={13} />
        <PendingProjectF_Content />
        <PendingProjectF_JobDetails
          title={'Design Interface'}
          subTitle={'PT. Shopee'}
          JobImg={<JobPicture1 />}
          icons={<Remove />}
        />
        <PendingProjectF_JobDetails
          title={'Server Security'}
          subTitle={'PT. Tokopedia'}
          JobImg={<JobPicture2 />}
          icons={<Remove />}
        />
        <PendingProjectF_JobDetails
          title={'Database Management'}
          subTitle={'PT. Traveloka'}
          JobImg={<JobPicture3 />}
          icons={<Remove />}
        />
        <PendingProjectF_JobDetails
          title={'Software Analyst'}
          subTitle={'PT. Bukalapak'}
          JobImg={<JobPicture4 />}
          icons={<Remove />}
        />
        <PendingProjectF_Bottom />
      </ScrollView>
    </View>
  );
};

export default PendingProjectF;

const styles = StyleSheet.create({});
