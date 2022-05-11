import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Gap from '../Gap';
import {ToDoList, JobSeeker, History} from '../../../assets';
import HomeF_IconsContEarn from '../HomeF_Icons';

const HomeF_ContentEarnings = ({marginLeft = 0, paddingLeft = 38, onPress}) => {
  return (
    <View style={styles.contentEarnings}>
      <View style={{alignSelf: 'center'}}>
        <View style={styles.content}>
          <Gap height={10} />
          <Text style={styles.earnings}>Earnings</Text>
          <Text style={styles.totalEarnings}>Rp 12.500.000</Text>
          <Gap height={17} />
          <View style={styles.TPH}>
            <HomeF_IconsContEarn icons={<ToDoList />} />
            <HomeF_IconsContEarn icons={<JobSeeker />} onPress={onPress} />
            <HomeF_IconsContEarn icons={<History />} />
          </View>
          <Gap height={3} />
          <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
            <Text style={styles.txtTPH(paddingLeft)}>To do List</Text>
            <Text style={styles.txtTPH((paddingLeft = 48))}>Projects</Text>
            <Text style={styles.txtTPH((paddingLeft = 51))}>History</Text>
          </View>
          <Gap height={17} />
          <View style={styles.progressWrapper}>
            <View style={styles.styleContProg(marginLeft)}>
              <Text style={styles.totalProgress}>25</Text>
              <Text style={styles.deskripsiProgress}>Complete</Text>
            </View>
            <View style={styles.lineVertical} />
            <View style={styles.styleContProg((marginLeft = 14))}>
              <Text style={styles.totalProgress}>25</Text>
              <Text style={styles.deskripsiProgress}>All Projects</Text>
            </View>
            <View style={styles.lineVertical} />
            <View style={styles.styleContProg((marginLeft = 17))}>
              <Text style={styles.totalProgress}>25</Text>
              <Text style={styles.deskripsiProgress}>In Complete</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeF_ContentEarnings;

const styles = StyleSheet.create({
  contentEarnings: {
    backgroundColor: 'white',
    height: 229,
    justifyContent: 'center',
    marginTop: 8,
  },
  content: {
    height: 216,
    width: 292,
    backgroundColor: '#D2F5FD',
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  earnings: {
    fontSize: 11,
    fontFamily: 'Segoe UI',
    color: '#000000',
  },
  TPH: {
    flexDirection: 'row',
    width: 210,
    justifyContent: 'space-between',
  },
  progressWrapper: {
    height: 61,
    width: 252,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 14,
  },
  totalProgress: {
    fontFamily: 'Segoe UI Bold',
    fontSize: 16,
    color: '#000000',
  },
  deskripsiProgress: {
    fontFamily: 'Segoe UI',
    fontSize: 11,
    color: '#000000',
  },
  lineVertical: {
    height: 41,
    width: 1,
    marginLeft: 13,
    backgroundColor: '#C0C0C0',
    marginTop: 8,
  },
  totalEarnings: {
    fontSize: 20,
    fontFamily: 'Segoe UI Bold',
    color: '#000000',
  },
  styleContProg: marginLeft => ({
    marginLeft: marginLeft,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  txtTPH: paddingLeft => ({
    paddingLeft: paddingLeft,
    color: '#000000',
    fontFamily: 'Segoe UI',
    fontSize: 10,
  }),
});
