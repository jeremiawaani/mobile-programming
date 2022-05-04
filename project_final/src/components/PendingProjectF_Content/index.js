import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Filter, Sort} from '../../../assets';
import Gap from '../Gap';
import PendingProjectF_JobDetails from '../PendingProjectF_JobDetails';

const PendingProjectF_Content = () => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Gap height={7} />
        <Text style={styles.txtBold}>Thursday, 13 Desember 2022</Text>
        <Gap height={12} />
        <View style={styles.sortWrapper}>
          <Sort />
          <Gap width={7} />
          <Text style={styles.txtBold}>Sort By</Text>
          <Gap width={38} />
          <Filter />
          <Gap width={7} />
          <Text style={styles.txtBold}>Filter</Text>
        </View>
        <Gap height={10} />
        <Gap height={18} />
        <View style={styles.content}>
          <Gap height={8} />
          <PendingProjectF_JobDetails
            title={'Design Interface'}
            subTitle={'PT. Shopee'}
          />
          <Gap height={31} />
          <PendingProjectF_JobDetails
            title={'Design Interface'}
            subTitle={'PT. Shopee'}
          />
          <Gap height={31} />
        </View>
      </View>
    </View>
  );
};

export default PendingProjectF_Content;

const styles = StyleSheet.create({
  head: {
    // backgroundColor: 'yellow',
    height: 64,
    marginLeft: 29,
  },
  txtBold: {
    fontFamily: 'Segoe UI Semi Bold',
    color: '#474747',
    fontSize: 11,
  },
  sortWrapper: {
    flexDirection: 'row',
  },
  content: {
    // backgroundColor: 'yellow',
  },
});
