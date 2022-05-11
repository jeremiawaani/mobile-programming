import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BorderUser from '../../components/SelectUser_border';
import {Gap} from '../../components';
import {Male, People} from '../../../assets';

const SelectUser = ({navigation}) => {
  return (
    <View style={styles.containerInti}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi There,</Text>
        <Text style={styles.welcome}>Welcome</Text>
        <Gap height={18} />
        <Text style={styles.please}>Please select user</Text>
      </View>
      <View style={styles.container}>
        <BorderUser
          color="#D2F5FD"
          Title="Freelancer"
          SubTitle="Find Job"
          icons={<People />}
          onPress={() => navigation.navigate('LoginF')}
        />
        <Gap height={18} />
        <BorderUser
          color="#D1FBEA"
          Title="Client"
          SubTitle="Find Service"
          icons={<Male />}
          onPress={() => navigation.navigate('LoginC')}
        />
        <View style={{backgroundColor: '#fff', height: 150}}></View>
      </View>
    </View>
  );
};

export default SelectUser;

const styles = StyleSheet.create({
  header: {
    marginTop: 95,
    marginLeft: 43,
  },
  container: {
    marginTop: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Segoe UI',
  },
  please: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Segoe UI',
  },
  greeting: {
    color: '#000000',
    fontFamily: 'Segoe UI',
    fontSize: 14,
  },
  containerInti: {
    backgroundColor: '#fff',
  },
});
