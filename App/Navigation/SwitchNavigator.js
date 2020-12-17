// import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';

// import BottomTabNavigator from './BottomTabNavigator';
// import DrawerNavigator from './DrawerNavigator';
// import Intro from '../screen/Intro';
// import MaterialBottomTabNavigator from './MaterialBottomTabNavigator';
// import MaterialTopTabNavigator from './MaterialTopTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './StackNavigator';
import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';


const Stack = createStackNavigator();

function RootNavigator(): React.ReactElement {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {

          },

        }}
      >
        <Stack.Screen name="StackNavigator" component={StackNavigator} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
