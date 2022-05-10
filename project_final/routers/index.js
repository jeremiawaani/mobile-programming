import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SplashScreen,
  SignUpF,
  HomeF,
  ProjectF,
  SearchJob,
  ProfileF,
  SelectUser,
  LoginF,
} from '../src';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Routers = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectUser"
        component={SelectUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeF"
        component={TabFooter}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpF"
        component={SignUpF}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginF"
        component={LoginF}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routers;

export function TabFooter() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeF"
        component={HomeF}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="SearcJob"
        component={SearchJob}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Chat"
        component={SearchJob}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ProfileF"
        component={ProfileF}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
