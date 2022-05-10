import {StyleSheet, TouchableOpacity, View, Modal} from 'react-native';
import React, {useState} from 'react';
import DetailsF_BarDesc from '../DetailsF_BarDesc';
import DetailsF_BarSkill from '../DetailsF_BarSkill';
import DetailsF_BarClient from '../DetailsF_BarClient';
import DetailsF_BarEmail from '../DetailsF_BarEmail';
import Gap from '../Gap';
import DetailsF_Button from '../DetailsF_Button';
import ApplyModal from '../ApplyModal';

const DetailsF_Content = () => {
  const [isModalVisible, setisModalVisible] = useState(false);

  const changeModalVisible = bool => {
    setisModalVisible(bool);
  };

  return (
    <View>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        nRequestClose={() => changeModalVisible(false)}>
        <View style={{height: 600, backgroundColor: '#000000AA'}}></View>
        <ApplyModal
          changeModalVisible={changeModalVisible}
          title="Apply this job?"
        />
      </Modal>
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
        <TouchableOpacity activeOpacity={0.7}>
          <DetailsF_Button title={'Contact'} />
        </TouchableOpacity>
        <Gap width={6} />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => changeModalVisible(true)}>
          <DetailsF_Button title={'Apply'} />
        </TouchableOpacity>
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
