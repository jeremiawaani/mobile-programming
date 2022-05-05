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
} from '../../../assets';

const PendingProjectF = () => {
  return (
    <View>
      <ScrollView>
        <PendingProjectF_Header />
        <Gap height={13} />
        <PendingProjectF_Content />
        <PendingProjectF_JobDetails
          title={'Design Interface'}
          subTitle={'PT. Shopee'}
          iconsPass={<JobPicture1 />}
        />
        <PendingProjectF_JobDetails
          title={'Server Security'}
          subTitle={'PT. Tokopedia'}
          iconsPass={<JobPicture2 />}
        />
        <PendingProjectF_JobDetails
          title={'Database Management'}
          subTitle={'PT. Traveloka'}
          iconsPass={<JobPicture3 />}
        />
        <PendingProjectF_JobDetails
          title={'Software Analyst'}
          subTitle={'PT. Bukalapak'}
          iconsPass={<JobPicture4 />}
        />
        <PendingProjectF_Bottom />
      </ScrollView>
    </View>
  );
};

export default PendingProjectF;

const styles = StyleSheet.create({});
