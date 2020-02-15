import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import HomeScreen from '../screens/Home';
import DownloadScreen from '../screens/Downloads';

const Stack = createStackNavigator();
const StackScreen = Stack.Screen;
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <StackScreen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: props => <Header {...props} /> }}
      />
    </Stack.Navigator>
  );
};

const DownloadsStack = () => {
  return (
    <Stack.Navigator>
      <StackScreen
        name="Download"
        component={DownloadScreen}
        options={{ headerTitle: props => <Header {...props} /> }}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const Screen = Tab.Screen;
const MainTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{ activeTintColor: 'red', inactiveTintColor: 'gray' }}
    >
      <Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              focused={focused}
              name="md-home"
              size={26}
              color={color}
            />
          )
        }}
      />
      <Screen
        name="Downloads"
        component={DownloadsStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              focused={focused}
              name="md-folder"
              size={26}
              color={color}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
