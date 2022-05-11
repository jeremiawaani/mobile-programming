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
  LoginC,
  SignUpC,
  PendingProjectF,
  CompleteProjectF,
  HomeC,
  AddJob,
  ProfileC,
  CurrentProjectC,
  PendingProjectC,
  DetailsF,
  CompleteProjectC,
  CurrentProjectF,
} from '../src';
import {AddTabBottom, Chat, Home, Search, User} from '../assets';

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
      {/* STACK SCREEN FREELANCER */}
      <Stack.Screen
        name="ProfileF"
        component={ProfileF}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CurrentProjectF"
        component={CurrentProjectF}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailsF"
        component={DetailsF}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PendingProjectF"
        component={PendingProjectF}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CompleteProjectF"
        component={CompleteProjectF}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeF"
        component={TabFooterF}
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
      <Stack.Screen
        name="ProjectF"
        component={ProjectF}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchJob"
        component={SearchJob}
        options={{headerShown: false}}
      />

      {/* STACK SCREEN CLIENT */}
      <Stack.Screen
        name="CurrentProjectC"
        component={CurrentProjectC}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileC"
        component={ProfileC}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddJob"
        component={AddJob}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeC"
        component={TabFooterC}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginC"
        component={LoginC}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PendingProjectC"
        component={PendingProjectC}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpC"
        component={SignUpC}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CompleteProjectC"
        component={CompleteProjectC}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routers;

export function TabFooterF() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarLabel: () => false}}>
      <Tab.Screen
        name="HomeF"
        component={HomeF}
        options={{
          tabBarIcon: () => <Home />,
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="ProjectF"
        component={ProjectF}
        options={{
          tabBarIcon: () => <Home />,
          headerShown: false,
        }}
      /> */}
      <Tab.Screen
        name="SearcJob"
        component={SearchJob}
        options={{
          tabBarIcon: () => <Search />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={SearchJob}
        options={{
          tabBarIcon: () => <Chat />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ProfileF"
        component={ProfileF}
        options={{
          tabBarIcon: () => <User />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export function TabFooterC() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarLabel: () => false}}>
      <Tab.Screen
        name="HomeC"
        component={HomeC}
        options={{
          tabBarIcon: () => <Home />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="AddJob"
        component={AddJob}
        options={{
          tabBarIcon: () => <AddTabBottom />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={AddJob}
        options={{
          tabBarIcon: () => <Chat />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ProfileC"
        component={ProfileC}
        options={{
          tabBarIcon: () => <User />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
