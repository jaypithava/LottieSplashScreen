import {StyleSheet, View} from 'react-native';
import {Platform, Button} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import DashScreen from './DashScreen';
import SettingsScreen from './SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import SectionListScreen from './SectionScreen';

const Tab = createMaterialBottomTabNavigator();

const DashBoard = () => {
  const navigation = useNavigation();

  const onLogout = () => {
    AsyncStorage.clear();
    navigation.navigate('Home');
  };

  return (
    <>
      <View style={styles.container}>
        <Button onPress={() => onLogout()} title="Logout" />
      </View>
      <Tab.Navigator activeColor="#f0edf6" inactiveColor="red">
        <Tab.Screen
          name="LoadMore"
          component={DashScreen}
          options={{
            tabBarLabel: 'LoadMore',
            tabBarIcon: () => <MaterialCommunityIcons name="home" size={20} />,
          }}
        />
        <Tab.Screen
          name="CardView"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'CardView',
            tabBarIcon: () => <MaterialCommunityIcons name="bell" size={20} />,
          }}
        />
        <Tab.Screen
          name="SectionView"
          component={SectionListScreen}
          options={{
            tabBarLabel: 'SectionView',
            tabBarIcon: () => <MaterialCommunityIcons name="bell" size={20} />,
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
