import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookDonateScreen from '../screens/BookDonateScreen';
import BookRequestScreen from '../screens/BookRequestScreen';
import BiographyScreen from '../screens/BiographyScreen';



export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: BookDonateScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/record.jpg")} style={{width:30, height:30}}/>,
      tabBarLabel : "Policy Record",
    }
  },
  BookRequest: {
    screen: BookRequestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/ins.jpg")} style={{width:30, height:30}}/>,
      tabBarLabel : "Vehicle Details Form",
    }
  },
  Biography: {
    screen: BiographyScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/bio.png")} style={{width:30, height:30}}/>,
      tabBarLabel : "Biography",
    }
  }
});
