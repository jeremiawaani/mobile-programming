import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Filter, JobPicture1, Remove, Sort} from '../../../assets';
import Gap from '../Gap';

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
        <Gap height={18} />
        <View style={styles.content}>
          <View style={styles.contentWrapper}>
            <JobPicture1 />
            <Gap width={10} />
            <View>
              <Text style={styles.txtTitle}>Design Interface</Text>
              <Text style={styles.txtSubtitle}>PT. Shopee</Text>
            </View>
            <Gap width={120} />
            <Remove />
          </View>
          <Gap height={7} />
          <Text style={styles.txtContent}>
            {
              'Lorem ipsum dolor sit amet, consectetur adipis\nelit. Aliquam mi mauris vestibulum aliquam viverra\nmolestie nibh.'
            }
          </Text>
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
    height: 238,
    // backgroundColor: 'yellow',
  },
  txtTitle: {
    fontFamily: 'Segoe UI Bold',
    fontSize: 15,
    color: '#030303',
  },
  txtSubtitle: {
    fontFamily: 'Segoe UI Semi Bold',
    fontSize: 12,
    color: '#474747',
  },
  contentWrapper: {
    flexDirection: 'row',
  },
  txtContent: {
    fontFamily: 'Segoe Ui Semi Light',
    fontSize: 12,
    color: '#474747',
  },
});
