import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator, createTabNavigator, TabNavigator, SafeAreaView, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Header from './Header'
import Home from '../Screen/Home/Home';
import Videoplay from '../Screen/Home/VideoPlay'



const HomeStack = createStackNavigator({

  
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: true,
        header:()=> <Header navigationProps={navigation} type={1} router={'Location'} />
      };
    },
  },
  Videoplay: {
    screen: Videoplay,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: true,
        header:()=> <Header navigationProps={navigation} type={1} router={'Location'} />
      };
    },
  },
  
  
  

});





const AppRouter = createSwitchNavigator(

  {
     "Videoplay":Videoplay,
    "HomeStack":HomeStack,
    "initial":Videoplay ,

    
  },
  {
    initialRouteName: 'initial',
  },

);

export default createAppContainer(AppRouter);
