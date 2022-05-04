import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Gap,
  PendingProjectF_Bottom,
  PendingProjectF_Content,
  PendingProjectF_Header,
} from '../../components';

const PendingProjectF = () => {
  return (
    <View>
      <PendingProjectF_Header />
      <Gap height={13} />
      <View style={styles.content}>
        <PendingProjectF_Content />
      </View>
      <PendingProjectF_Bottom />
    </View>
  );
};

export default PendingProjectF;

const styles = StyleSheet.create({
  content: {
    height: 330,
  },
});
