import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import CoffeeTabs from '../routes/tabs';
import PreviousCoffee from '../screens/previousCoffee';

const {Navigator, Screen} = createStackNavigator();

const Screens = () => (
  <Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#000'},
      headerTintColor: '#fff',
    }}>
    <Screen name="Home" component={Home} title="Home" />
    <Screen name="CoffeeTabs" component={CoffeeTabs} />
    <Screen name="PreviousCoffee" component={PreviousCoffee} />
  </Navigator>
);

export const HomeStack = () => <Screens />;
