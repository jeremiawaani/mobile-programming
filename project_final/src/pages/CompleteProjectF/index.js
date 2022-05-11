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
  InfoJob,
  JobPicture1,
  JobPicture2,
  JobPicture3,
  JobPicture4,
  Profile,
} from '../../../assets';

const CompleteProjectF = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <PendingProjectF_Header
        headerText={'My\nProjects'}
        sideHeaderText="Complete Project"
        width={110}
        tab1Text="Current Projects"
        tab2Text="Complete Projects"
        widthBorder={126}
        mR={37}
        mL={155}
        fontFamilyTab1={'Segoe UI'}
        fontFamilyTab2={'Segoe UI Bold'}
        profile={<Profile />}
        onPress={() => navigation.navigate('ProjectF')}
        onPress2={() => navigation.navigate('CurrentProjectF')}
      />
      <Gap height={13} />
      <PendingProjectF_Content />
      <ScrollView style={{height: 340}}>
        <PendingProjectF_JobDetails
          title={'Design Interface'}
          subTitle={'PT. Shopee'}
          JobImg={<JobPicture1 />}
          icons={<InfoJob />}
        />
        <PendingProjectF_JobDetails
          title={'Server Security'}
          subTitle={'PT. Tokopedia'}
          JobImg={<JobPicture2 />}
          icons={<InfoJob />}
        />
        <PendingProjectF_JobDetails
          title={'Database Management'}
          subTitle={'PT. Traveloka'}
          JobImg={<JobPicture3 />}
          icons={<InfoJob />}
        />
        <PendingProjectF_JobDetails
          title={'Software Analyst'}
          subTitle={'PT. Bukalapak'}
          JobImg={<JobPicture4 />}
          icons={<InfoJob />}
        />
      </ScrollView>
    </View>
  );
};

export default CompleteProjectF;

const styles = StyleSheet.create({});
