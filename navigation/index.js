import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useSelector } from 'react-redux'

import {
  navigationRef,
  isReadyRef,
} from './RootNavigation';

//Creating Instance of Stack
const Stack = createStackNavigator();

//Screens
import SplashScreen from '../screens/SplashScreen'

//Stacks
import AuthStack from '../screens/AuthStack'
import HomeStack from '../screens/HomeStack'

/** Main Stack of the app */
const MainStack = () => {
  const { isSignedIn } = useSelector((state) => state.userSession)

  return (
    <Stack.Navigator headerMode="none" initialRouteName={"SplashScreen"}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      {isSignedIn ?
        <Stack.Screen name="AfterSplash" component={HomeStack} />
        :
        <Stack.Screen name="AfterSplash" component={AuthStack} />
      }
    </Stack.Navigator>
  );
}

/** Theme will help to change app light mode to dark mode */
export default AppNavigator = () => {
  const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(255, 255, 255)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  return (
    <NavigationContainer
      theme={MyTheme}
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <MainStack />
    </NavigationContainer>
  )
};
