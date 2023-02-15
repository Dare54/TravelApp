import React from 'react';
import {View, Text} from 'react-native'
import Home from './components/Home';
import Details from './components/Details';
import Liked from './components/Liked';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Liked' component={Liked}/>
      <Tab.Screen name='Profile' component={Profile}/>
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <View>
      <Text>App.js</Text>
    </View>
  );
};

export default App;