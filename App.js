import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import Home from './components/Home';
import Details from './components/Details';
import Liked from './components/Liked';
import Profile from './components/Profile';
import colors from './assets/colors/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
/*import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';*/

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

/*Entypo.loadFont();
MaterialCommunityIcons.loadFont();*/

const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
      styles: styles.tabBar,
      tabBarActiveTintColor: colors.orange,
      tabBarInactiveTintColor: colors.grey,
      tabBarShowLabel: false,
    }}
    >
      <Tab.Screen 
        name='Home' 
        component={Home}
        options={{tabBarIcon: ({color}) => (
      <Ionicons 
        name="home" 
        size={32} 
        color={color} />), 
    }}
      />
      <Tab.Screen 
        name='Liked' 
        component={Liked}
        options={{tabBarIcon: ({color}) => (
      <Ionicons 
        name="heart" 
        size={32} 
        color={color} />), 
    }}
      />
      <Tab.Screen 
        name='Profile' 
        component={Profile}
        options={{tabBarIcon: ({color}) => (
      <Ionicons 
        name="person" 
        size={32} 
        color={color} />), 
    }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen 
        name="TabNavigator" 
        component={TabNavigator} 
        options={{headerShown:false}}/>
        <stack.Screen 
        name="Details" 
        component={Details} 
        options={{headerShown:false}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default App; 