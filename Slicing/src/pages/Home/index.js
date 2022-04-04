import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, HeaderHome, Label} from '../../components';
import {HomeButton, List, Profile} from '../../../assets';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <HeaderHome title="Money Tracker" subTitle={'Track your money'} />

      <Gap height={20} />
      <View style={styles.head}>
        <Label title="Your Balance" textSize={16} />
        <View style={styles.border}>
          <View style={styles.balanceWrapper}>
            <Label
              title="Rp. 10.000.000"
              textSize={24}
              textFam={'Poppins-SemiBold'}
            />
          </View>
        </View>
        <Gap height={20} />
        <View style={styles.txtWrapper}>
          <View style={{paddingRight: 20}}>
            <Label title="Cash On Hand" textFam="Poppins-Regular" />
            <Gap height={11} />
            <Label title="Cash On Bank" textFam="Poppins-Regular" />
          </View>
          <View>
            <Label title="Rp. 4.000.000" textFam="Poppins-Medium" />
            <Gap height={11} />
            <Label title="Rp. 6.000.000" textFam="Poppins-Medium" />
          </View>
        </View>

        <Gap height={40} />
        <View style={styles.transactionWrapper}>
          <Gap height={10.6} />
          <Label title="Add Transaction" textSize={16} />

          <Gap height={9} />
          <Button
            title="Cash On Hand"
            onPress={() => navigation.navigate('CashOnHand')}
          />
          <Gap height={18} />
          <Button
            title="Cash On Bank"
            onPress={() => navigation.navigate('CashOnBank')}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.footer2}>
          <HomeButton />
          <List style={styles.listStyle} />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  head: {
    flex: 1,
    marginHorizontal: 24,
  },
  balanceWrapper: {
    alignItems: 'center',
    marginRight: 24,
    paddingBottom: 18,
  },
  border: {
    borderBottomWidth: 1,
  },
  transactionWrapper: {
    flex: 1,
    marginTop: 20,
  },
  txtWrapper: {
    flexDirection: 'row',
  },
  footer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 50,
  },
  listStyle: {
    paddingLeft: 300,
  },
});
