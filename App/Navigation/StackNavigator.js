import React from 'react';
import { Icon } from "react-native-elements";
import Login from '../Screens/Auth/Login';
import Screen2 from '../Screens/Screen2';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerScreen from './DrawerNavigation';
import {
  Button,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    paddingLeft: 10
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 90
  },
  iconContainerMenu: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 60,
    paddingRight: 20
  }
});


const Stack = createStackNavigator();

const RootNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationEnabled: false, // hack
      }}
    >
      <Stack.Screen
        name="Screen"
        component={Login}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignSelf: 'center',
            fontWeight: 'bold'
          },
          headerLeft: () => (
            <TouchableOpacity
              style={styles.iconContainerMenu}
              onPress={() => {
                navigation.toggleDrawer()
                // alert('Open Drawer.............')
              }}
            >
              <Icon
                containerStyle={styles.icon}
                type="ionicon"
                size={35}
                color="#fff"
                name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{
          title: 'Screen211',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignSelf: 'center',
            fontWeight: 'bold'
          },
        }}
      />
      <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
