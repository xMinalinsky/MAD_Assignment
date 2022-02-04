/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {FirstScreenNavigator, SecondScreenNavigator, ThirdScreenNavigator,FourthScreenNavigator,FifthScreenNavigator} from './CustomNavigation'
import HandRank from './screens/HandRank'

const Tab = createBottomTabNavigator()

const App: () => NavContainer = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle:{fontSize:15},
            activeTintColor: 'grey',
            inactiveTintColor:'black',
          }}
        >
          <Tab.Screen
            name="History"
            component={FourthScreenNavigator} 
                     
          />
          <Tab.Screen
            name="Hand Rank"
            component={HandRank} 
          />
           <Tab.Screen
            name="Home"
            component={FirstScreenNavigator} 
                     
          />
          <Tab.Screen
            name="Session"
            component={ThirdScreenNavigator} 
          />
           <Tab.Screen
            name="Notes"
            component={SecondScreenNavigator} 
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};



export default App;
