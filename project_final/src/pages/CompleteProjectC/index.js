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
  ProfileLomoKecil,
} from '../../../assets';

const CompleteProjectC = ({navigation}) => {
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
        profile={<ProfileLomoKecil />}
        onPress={() => navigation.navigate('HomeC')}
        onPress2={() => navigation.navigate('CurrentProjectC')}
      />
      <Gap height={13} />
      <PendingProjectF_Content />
      <ScrollView style={{height: 340}}>
        <PendingProjectF_JobDetails
          title={'Design Interface'}
          subTitle={'Andre Waani'}
          JobImg={<JobPicture1 />}
          icons={<InfoJob />}
        />
        <PendingProjectF_JobDetails
          title={'Server Security'}
          subTitle={'Salomo Mandagi'}
          JobImg={<JobPicture2 />}
          icons={<InfoJob />}
        />
        <PendingProjectF_JobDetails
          title={'Database Management'}
          subTitle={'Wahyu Agung'}
          JobImg={<JobPicture3 />}
          icons={<InfoJob />}
        />
        <PendingProjectF_JobDetails
          title={'Software Analyst'}
          subTitle={'Gerald Wuysang'}
          JobImg={<JobPicture4 />}
          icons={<InfoJob />}
        />
      </ScrollView>
    </View>
  );
};

export default CompleteProjectC;

const styles = StyleSheet.create({});
