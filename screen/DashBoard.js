import {StyleSheet, View} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import DashScreen from './DashScreen';
import SettingsScreen from './SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SectionListScreen from './SectionScreen';
import UserProfileScreen from './UserProfileScreen';

const Tab = createMaterialBottomTabNavigator();

const DashBoard = () => {
  return (
    <>
      <Tab.Navigator activeColor="white" inactiveColor="red" fontWeight="bold">
        <Tab.Screen
          name="LoadMore"
          component={DashScreen}
          options={{
            tabBarLabel: 'LoadMore',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="CardView"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'CardView',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="id-card" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="SectionView"
          component={SectionListScreen}
          options={{
            tabBarLabel: 'SectionView',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="bell" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={UserProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="face-man-profile"
                size={20}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  textStyle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DashBoard;
