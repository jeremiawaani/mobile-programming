import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {JobPicture1, Remove} from '../../../assets';
import Gap from '../Gap';

const PendingProjectF_JobDetails = ({
  title,
  subTitle,
  JobImg,
  icons = <Remove />,
}) => {
  return (
    <View style={styles.content}>
      <View style={styles.contentWrapper}>
        {JobImg}
        {/* <JobPicture1 /> */}
        <Gap width={10} />
        <View style={styles.jobCategory}>
          <Text style={styles.txtTitle}>{title}</Text>
          <Text style={styles.txtSubtitle}>{subTitle}</Text>
        </View>
        <Gap width={46} />
        {icons}
      </View>
      <Gap height={7} />
      <Text style={styles.txtContent}>
        {
          'Lorem ipsum dolor sit amet, consectetur adipis\nelit. Aliquam mi mauris vestibulum aliquam viverra\nmolestie nibh.'
        }
      </Text>
    </View>
  );
};

export default PendingProjectF_JobDetails;

const styles = StyleSheet.create({
  content: {
    height: 120,
    // backgroundColor: 'yellow',
    marginLeft: 28,
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
    width: 275,
  },
  jobCategory: {
    width: 190,
  },
});
