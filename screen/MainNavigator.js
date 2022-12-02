import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import SplashScreen from './SplashScreen';
import DashBoard from './DashBoard';
import ItemClick from './ItemClick';
import NextItem from './NextItem';
import LastItem from './LastItem';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{animationEnabled: false, header: () => null}}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Home"
          options={{animationEnabled: true, header: () => null}}
          component={HomeScreen}
        />
        <Stack.Screen
          name="DashBoard"
          component={DashBoard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ItemClick"
          component={ItemClick}
          options={{
            title: 'Product Details',
            presentation: 'modal',
            animationTypeForReplace: 'popover',
            animation: 'slide_from_right',
            headerStyle: {
              backgroundColor: '#5c4d79',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="NextItem"
          component={NextItem}
          options={{
            title: 'NextItem',
            presentation: 'modal',
            animationTypeForReplace: 'popover',
            animation: 'slide_from_right',
            headerStyle: {
              backgroundColor: '#5c4d79',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="LastItem"
          component={LastItem}
          options={{
            title: 'LastItem',
            presentation: 'modal',
            animationTypeForReplace: 'popover',
            animation: 'slide_from_right',
            headerStyle: {
              backgroundColor: '#5c4d79',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
