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

const CurrentProjectF = ({navigation}) => {
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
        profile={<Profile />}
        onPress={() => navigation.navigate('ProjectF')}
        onPress3={() => navigation.navigate('CompleteProjectF')}
      />
      <Gap height={13} />
      <PendingProjectF_Content />
      <ScrollView style={{height: 238}}>
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
      </ScrollView>
      <PendingProjectF_Bottom title={'Cancel this job?'} />
    </View>
  );
};

export default CurrentProjectF;

const styles = StyleSheet.create({});
