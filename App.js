import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AppProvider } from './hooks/AppContext';

import HomeScreen from './screens/HomeScreen';
import TutorialScreen from './screens/TutorialScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <AppProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => {
                            let iconName;
                            if (route.name === 'Home') {
                                iconName = 'home';
                            } else if (route.name === 'Tutorial') {
                                iconName = 'book';
                            } else if (route.name === 'Profile') {
                                iconName = 'person';
                            }
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                    })}
                >
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Tutorial" component={TutorialScreen} />
                    <Tab.Screen name="Profile" component={ProfileScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </AppProvider>
    );
}
