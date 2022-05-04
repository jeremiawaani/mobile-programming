import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {
  Gap,
  PendingProjectF_Bottom,
  PendingProjectF_Content,
  PendingProjectF_Header,
  PendingProjectF_JobDetails,
} from '../../components';

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
        />
        <PendingProjectF_JobDetails
          title={'Design Interface'}
          subTitle={'PT. Shopee'}
        />
        <PendingProjectF_JobDetails
          title={'Design Interface'}
          subTitle={'PT. Shopee'}
        />
        <PendingProjectF_Bottom />
      </ScrollView>
    </View>
  );
};

export default PendingProjectF;

const styles = StyleSheet.create({});
