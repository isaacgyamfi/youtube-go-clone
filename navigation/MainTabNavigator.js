import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/Home';
import DownloadScreen from '../screens/Downloads';

// const Stack = createStackNavigator();
// const HomeStack = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name='Home' component={HomeScreen} />
//         </Stack.Navigator>
//     )
// }

const Tab = createBottomTabNavigator();
const Screen = Tab.Screen;
const MainTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray' }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
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
        component={DownloadScreen}
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
