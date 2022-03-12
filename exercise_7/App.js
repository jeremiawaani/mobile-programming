import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState('E');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const handleClick = () => {
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`City: ${city}`);
    console.log(`Phone: ${phone}`);
  };
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
      {/* TEXTINPUT NAME */}
      <View style={{margin: 3}}>
        <TextInput
          style={{
            borderColor: '#00BCD4',
            borderWidth: 1,
            width: 150,
            height: 40,
            fontSize: 16,
            color: '#000',
          }}
          placeholderTextColor={'grey'}
          placeholder="Name"
          onChangeText={value => setName(value)}
        />
      </View>

      <View style={{margin: 3}}>
        <TextInput
          style={{
            borderColor: '#00BCD4',
            borderWidth: 1,
            width: 150,
            height: 40,
            fontSize: 16,
            color: '#000',
          }}
          placeholderTextColor={'grey'}
          placeholder="Email"
          onChangeText={value => setEmail(value)}
        />
      </View>

      {/* TEXTINPUT PASSWORD */}
      <View style={{margin: 3}}>
        <TextInput
          style={{
            borderColor: '#00BCD4',
            borderWidth: 1,
            width: 150,
            height: 40,
            fontSize: 16,
            color: '#000',
          }}
          placeholderTextColor={'grey'}
          placeholder="Password"
          onChangeText={value => setPassword(value)}
        />
      </View>

      {/* TEXTINPUT PHONE */}
      <View style={{margin: 3}}>
        <TextInput
          style={{
            borderColor: '#00BCD4',
            borderWidth: 1,
            width: 150,
            height: 40,
            fontSize: 16,
            color: '#000',
          }}
          placeholderTextColor={'grey'}
          placeholder="Phone"
          onChangeText={value => setPhone(value)}
        />
      </View>

      <Text style={{fontSize: 16, color: '#000'}}>
        Name : {name}
        {'\n'}
        Email : {email}
        {'\n'}
        Password: {password}
        {'\n'}
        City : {city}
        {'\n'}
        Phone : {phone}
        {'\n'}
      </Text>

      <View style={{marginTop: 25}}>
        <Button title="Press Me!" onPress={handleClick} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
 