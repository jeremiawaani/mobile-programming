import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {
  PendingProjectF_Bottom,
  PendingProjectF_Content,
  PendingProjectF_Header,
} from '../../components';

const Coba = () => {
  return (
    <View>
      <ScrollView>
        <PendingProjectF_Header />
        <PendingProjectF_Content />
        <PendingProjectF_Content />
        <PendingProjectF_Bottom />
      </ScrollView>
    </View>
  );
};

export default Coba;

const styles = StyleSheet.create({});
