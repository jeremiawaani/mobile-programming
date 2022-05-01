import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DetailsF_BarDesc from '../DetailsF_BarDesc';
import DetailsF_BarSkill from '../DetailsF_BarSkill';
import DetailsF_BarClient from '../DetailsF_BarClient';
import DetailsF_BarEmail from '../DetailsF_BarEmail';
import Gap from '../Gap';
import DetailsF_Button from '../DetailsF_Button';

const DetailsF_Content = () => {
  return (
    <View>
      <DetailsF_BarDesc />
      <Gap height={15} />
      <View style={styles.flexD}>
        <DetailsF_BarSkill />
        <Gap width={38} />
        <DetailsF_BarEmail />
      </View>
      <Gap height={27} />
      <View style={styles.flexD}>
        <DetailsF_BarClient />
        <Gap width={60} />
        <DetailsF_Button title={'Contact'} />
        <Gap width={6} />
        <DetailsF_Button title={'Apply'} />
      </View>
    </View>
  );
};

export default DetailsF_Content;

const styles = StyleSheet.create({
  flexD: {
    flexDirection: 'row',
  },
});
