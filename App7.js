import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

const App = () => {
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
      <Input text="Name" />
      <Input text="Email" />
      <Input text="Password" />
      <Input text="City" />
      <Input text="Phone" />
    </View>
  );
};

const Input = ({text}) => {
  return (
    <View style={{margin: 3}}>
      <TextInput
        style={{
          borderColor: '#00BCD4',
          borderWidth: 1,
          width: 150,
          height: 40,
          fontSize: 14,
        }}
        placeholderTextColor={'grey'}
        placeholder={text}
      />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({});
