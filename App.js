import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import Home from './components/Home';
import Details from './components/Details';
import Liked from './components/Liked';
import Profile from './components/Profile';
import colors from './assets/colors/colors';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      styles: styles.tabBar,
      activeTintColor: colors.orange,
      inactiveTintColor: colors.grey,
    }}
    >
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Liked' component={Liked}/>
      <Tab.Screen name='Profile' component={Profile}/>
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="TabNavigator" component={TabNavigator}/>
      </stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {},
})

export default App; 