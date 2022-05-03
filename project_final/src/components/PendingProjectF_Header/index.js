import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Calendar, IconBack, Profile} from '../../../assets';
import Gap from '../Gap';

const DetailsF_Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Gap width={25} />
        <View style={styles.borderIconBack}>
          <IconBack />
        </View>
        <Gap width={240} />
        <Profile />
      </View>
      <View style={styles.header2}>
        <View style={styles.header2Border}>
          <Text style={styles.txt}>{'Waiting\nfor approval'}</Text>
          <View style={styles.jobApply}>
            <View style={styles.jobQuantity}>
              <Text style={styles.txtQuantity}>5</Text>
            </View>
            <Text style={styles.txtJob}>Job Apply</Text>
          </View>
        </View>
        <View style={styles.calendarBorder}>
          <Calendar />
          <Text style={styles.txtDate}>Desember 12 - Desember 19</Text>
        </View>
      </View>
      <View style={styles.header3}>
        <Text style={styles.projectTxt}>Projects</Text>
        <Text style={styles.profileTxt}>Client Profile</Text>
      </View>
      <View style={styles.borderSelect} />
      <View style={styles.border} />
    </View>
  );
};

export default DetailsF_Header;

const styles = StyleSheet.create({
  borderIconBack: {
    width: 30,
    height: 30,
    backgroundColor: '#EDF5F7',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 3,
  },
  header: {
    flexDirection: 'row',
    marginTop: 23,
    marginBottom: 17,
  },
  header2: {
    marginLeft: 29,
    marginTop: 8,
  },
  txt: {
    fontFamily: 'Segoe UI Bold',
    fontSize: 20,
    color: '#030303',
  },
  header2Border: {
    flexDirection: 'row',
  },
  jobApply: {
    width: 85,
    height: 19,
    borderRadius: 8,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 55,
  },
  txtJob: {
    fontFamily: 'Segoe UI Bold',
    fontSize: 10,
    color: '#030303',
    marginLeft: 6,
  },
  jobQuantity: {
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
  },
  txtQuantity: {
    fontFamily: 'Segoe UI Bold',
    fontSize: 10,
    color: '#030303',
  },
  calendarBorder: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  txtDate: {
    fontFamily: 'Segoe UI',
    fontSize: 12,
    color: '#474747',
    marginLeft: 4,
  },
  header3: {
    marginLeft: 29,
    flexDirection: 'row',
    marginTop: 18,
    height: 40,
    // backgroundColor: 'yellow',
    alignItems: 'center',
  },
  projectTxt: {
    fontFamily: 'Segoe UI Bold',
    fontSize: 13,
    color: '#030303',
  },
  profileTxt: {
    fontFamily: 'Segoe UI',
    fontSize: 13,
    color: '#030303',
    marginLeft: 48,
  },
  border: {
    borderColor: '#C5C5C5',
    borderTopWidth: 1,
  },
  borderSelect: {
    borderColor: '#50DFFF',
    borderBottomWidth: 3,
    width: 60,
    marginLeft: 28,
    borderTopEndRadius: 5,
    borderTopLeftRadius: 5,
  },
});
