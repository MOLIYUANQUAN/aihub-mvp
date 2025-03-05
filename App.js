import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import TutorialScreen from './screens/TutorialScreen';
import ExploreScreen from './screens/ExploreScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Chat" component={ChatScreen} />
          <Tab.Screen name="Tutorial" component={TutorialScreen} />
          <Tab.Screen name="Explore" component={ExploreScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
