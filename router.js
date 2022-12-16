import React from "react";
import { TouchableOpacity } from "react-native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/auth/LoginScreen';
import RegistrationScreen from './screens/auth/RegistrationScreen';
import  CreatePostsScreen  from './screens/main/CreatePostsScreen';
import  PostsScreen  from './screens/main/PostsScreen';
import ProfileScreen from './screens/main/ProfileScreen';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth, handleSubmit) => {
  if (isAuth) {
    return (
      <MainTab.Navigator initialRouteName="Posts" screenOptions={{"tabBarShowLabel": false, "tabBarStyle": [{"display": "flex"}, null ], 'tabBarStyle': {'paddingHorizontal': 50,'paddingTop':10, 'paddingBottom':10, 'height': 60}}}>
        <MainTab.Screen
          name='Posts'
          component={PostsScreen}
          options={{
            headerShown: true,
            headerTitleStyle:{marginLeft: 160},
            headerRight: () => (<TouchableOpacity style={{marginRight: 20}}><Ionicons name="md-exit-outline" size={30} color='#BDBDBD' /></TouchableOpacity>),
            tabBarIcon: ({ focused, size, color }) => (<Ionicons name="grid-outline" size={size} color={color} />),
            tabBarActiveTintColor: '#FF6C00',
            tabBarInactiveTintColor: '#BDBDBD',
          }} />
        <MainTab.Screen
          name='Create'
          component={CreatePostsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => (<AntDesign name="plus" size={size} color={color} />),
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#BDBDBD',
            tabBarItemStyle: { backgroundColor: '#FF6C00', borderRadius: 50},
          }} />
        <MainTab.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => (<Feather name="user" size={size} color={color} />),
            tabBarActiveTintColor: '#FF6C00',
            tabBarInactiveTintColor: '#BDBDBD',
          }} />
      </MainTab.Navigator>
    );
  }
  return (
    <AuthStack.Navigator initialRouteName="login">
      <AuthStack.Screen name='login' component={LoginScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name='registration' component={RegistrationScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
};