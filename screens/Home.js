import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
// import { MaterialCommunityIcons } from "@expo/vector-icons";

import  CreatePostsScreen  from './main/CreatePostsScreen';
import  PostsScreen  from './main/PostsScreen';
import ProfileScreen from './main/ProfileScreen';

const MainTab = createBottomTabNavigator();

import { } from 'react-native';

const Home = ({navigation}) => {

    return (
      <MainTab.Navigator initialRouteName="Posts" screenOptions={{ "tabBarShowLabel": false, "tabBarStyle": [{ "display": "flex" }, null], 'tabBarStyle': { 'paddingHorizontal': 50, 'paddingTop': 10, 'paddingBottom': 10, 'height': 60 } }}>
        <MainTab.Screen
          name='Posts'
          component={PostsScreen}
          options={{
            headerShown: true,
            headerTitleStyle:{marginLeft: 160},
            headerRight: () => (<TouchableOpacity style={{marginRight: 20}} onPress={()=>{navigation.navigate('login')}}><Ionicons name="md-exit-outline" size={30} color='#BDBDBD' /></TouchableOpacity>),
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
      </MainTab.Navigator>)
};


export default Home;