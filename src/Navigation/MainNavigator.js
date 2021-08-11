import * as React from 'react';
import { 
  Button,
  BackHandler,
  Alert 
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/Home';
import ListViewSreen from '../Screens/ListView';
import Login from '../Screens/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const hederCenter = {
  headerTitleAlign: 'center'
}

  export default function MainNavigator(){
    const navigationRef = React.createRef();
      return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={hederCenter}  />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
               options={{ headerTitleAlign: 'center'}}
            />       
            <Stack.Screen name="ListView" component={ListViewSreen} options={hederCenter}  />
        </Stack.Navigator>
      )
  }
