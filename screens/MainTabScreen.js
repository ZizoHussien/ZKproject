import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#e91e63"
    style={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
    />
    <Tab.Screen
      name="Details"
      component={DetailsScreen}
    />
    
  </Tab.Navigator>
  
  );
  
  export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor : 'red'
      },
      headerTintColor:"blue",
      headerTitleStyle : {
        fontWeight:'bold'
      }
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Overview',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
           backgroundColor="black" onPress ={ () => navigation.openDrawer
          ()}> </Icon.Button>
        )
      }} />
    </HomeStack.Navigator>      
  );
  
  const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor : 'red'
      },
      headerTintColor:"blue",
      headerTitleStyle : {
        fontWeight:'bold'
      }
    }}>
      <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25}
         backgroundColor="black" onPress ={ () => navigation.openDrawer
        ()}> </Icon.Button>
      )
      }}
      />
    </DetailsStack.Navigator>      
  );
  