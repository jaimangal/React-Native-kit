import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Intro from '../Screens/Auth/IntroScreen';
import Login from '../Screens/Auth/Login';

const RootStack = createStackNavigator();

const AuthStackNav = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
      <RootStack.Screen name="Intro" component={Intro}/>
      <RootStack.Screen name="Login" component={Login}/>
    </RootStack.Navigator>
);

export default AuthStackNav;
