import React from 'react';
import {View, Text} from 'react-native'
import Home from './components/Home';
import Details from './components/Details';
import Liked from './components/Liked';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const stack = createNativeStackNavigator();
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