import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import SplashScreen from './SplashScreen';
import DashBoard from './DashBoard';
import ItemClick from './ItemClick';

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
          options={{animationEnabled: true, header: () => null}}
        />
        <Stack.Screen
          name="ItemClick"
          component={ItemClick}
          options={{animationEnabled: true, header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
