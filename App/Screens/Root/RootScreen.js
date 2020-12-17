import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from "../../Navigation/StackNavigator";
import DrawerNavigator from "../../Navigation/DrawerNavigation";
import AuthNavigator from "../../Navigation/AuthNavigator";

const RootScreen = () => {
 return (
  <NavigationContainer>
    {(false) ?
      <DrawerNavigator /> :
      <AuthNavigator />
    }
  </NavigationContainer>
 );
}

export default RootScreen;
