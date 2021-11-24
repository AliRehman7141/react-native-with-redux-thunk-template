import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//Screens
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'
import ForgotPasswordScreen from './ForgotPasswordScreen'

/** Auth Stack of the app */
export default AuthStack = () => (
    <Stack.Navigator headerMode="none" initialRouteName='LoginScreen'>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
    </Stack.Navigator>
);