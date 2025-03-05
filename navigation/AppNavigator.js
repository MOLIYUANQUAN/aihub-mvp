import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import TutorialScreen from '../screens/TutorialScreen';
import ExploreScreen from '../screens/ExploreScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="首页" component={HomeScreen} />
      <Tab.Screen name="聊天" component={ChatScreen} />
      <Tab.Screen name="教程" component={TutorialScreen} />
      <Tab.Screen name="探索" component={ExploreScreen} />
    </Tab.Navigator>
  );
}
