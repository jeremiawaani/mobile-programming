import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Footer, HeaderUser } from '../../components';

const SearchJob = () => {
  return (
    <View>
      <HeaderUser title='Search Job' />
      <Footer />
    </View>
  );
};

export default SearchJob;

const styles = StyleSheet.create({});
