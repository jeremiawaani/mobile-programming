import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Calendar, IconBack, Profile} from '../../../assets';
import Gap from '../Gap';

const PendingProjectF_Header = ({
  headerText = 'Waiting\nfor approval',
  width = 85,
  sideHeaderText = 'Job Apply',
  widthBorder = 60,
  tab1Text = 'Projects',
  tab2Text = 'Client Profile',
  mR = 48,
  mL = 28,
  fontFamilyTab1 = 'Segoe UI Bold',
  fontFamilyTab2 = 'Segoe UI',
  profile,
  onPress,
  onPress2,
  onPress3,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Gap width={25} />
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
          <View style={styles.borderIconBack}>
            <IconBack />
          </View>
        </TouchableOpacity>
        <Gap width={240} />
        {profile}
      </View>
      <View style={styles.header2}>
        <View style={styles.header2Border}>
          <Text style={styles.txt}>{headerText}</Text>
          <View style={styles.jobApply(width)}>
            <View style={styles.jobQuantity}>
              <Text style={styles.txtQuantity}>5</Text>
            </View>
            <Text style={styles.txtJob}>{sideHeaderText}</Text>
          </View>
        </View>
        <View style={styles.calendarBorder}>
          <Calendar />
          <Text style={styles.txtDate}>Desember 12 - Desember 19</Text>
        </View>
      </View>
      <View style={styles.header3}>
        <TouchableOpacity onPress={onPress2}>
          <Text style={styles.projectTxt(mR, fontFamilyTab1)}>{tab1Text}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress3}>
          <Text style={styles.profileTxt(fontFamilyTab2)}>{tab2Text}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.borderSelect(widthBorder, mL)} />
      <View style={styles.border} />
    </View>
  );
};

export default PendingProjectF_Header;

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
    width: 118,
  },
  header2Border: {
    flexDirection: 'row',
  },
  jobApply: width => ({
    width: width,
    height: 19,
    borderRadius: 8,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 55,
  }),
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
  projectTxt: (mR, fontFamilyTab1) => ({
    fontFamily: fontFamilyTab1,
    fontSize: 13,
    color: '#030303',
    marginRight: mR,
  }),
  profileTxt: fontFamilyTab2 => ({
    fontFamily: fontFamilyTab2,
    fontSize: 13,
    color: '#030303',
  }),
  border: {
    borderColor: '#C5C5C5',
    borderTopWidth: 1,
  },
  borderSelect: (widthBorder, mL) => ({
    borderColor: '#50DFFF',
    borderBottomWidth: 3,
    width: widthBorder,
    marginLeft: mL,
    borderTopEndRadius: 5,
    borderTopLeftRadius: 5,
  }),
});
