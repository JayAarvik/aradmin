import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BGC, BGR } from '../../Utils/Import';
import Stores from '../stores/Stores';
import AddStore from '../AddStore/AddStore';
import ProfileScreen from '../Profile/ProfileScreen';


const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
      <Tab.Navigator screenOptions={{ 
        headerShown: false,
        }}>
        <Tab.Screen name="Stores" component={Stores}
        options={{
            tabBarLabel: 'All Stores',
            tabBarIcon: ({ color, size, focused }) => (
                <MaterialCommunityIcons size={25} color={focused ? BGR : "gray"} name="store" />
            ),
            tabBarActiveTintColor:BGR
          }}
        />
        <Tab.Screen name="AddStore" component={AddStore}
        options={{
            tabBarLabel: 'Add New',
            tabBarIcon: ({ color, size, focused }) => (
                <MaterialCommunityIcons size={25} color={focused ? BGR : "gray"} name="store-plus" />
            ),
            tabBarActiveTintColor:BGR
          }}
        />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen}
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size, focused }) => (
                <MaterialCommunityIcons size={25} color={focused ? BGR : "gray"} name="account" />
            ),
            tabBarActiveTintColor:BGR
          }}
        />
      </Tab.Navigator>
  );
}