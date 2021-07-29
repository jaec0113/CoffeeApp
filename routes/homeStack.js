import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import CoffeeTabs from '../routes/tabs';
import MyCoffee from '../screens/myCoffee';
import Coffee from '../screens/coffee';

const {Navigator, Screen} = createStackNavigator();

const Screens = () => (
  <Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#000'},
      headerTintColor: '#fff',
    }}>
    <Screen name="Home" component={Home} title="Home" />
    <Screen name="MyCoffee" component={MyCoffee} />
    <Screen name="Coffee" component={Coffee} />
    <Screen name="CoffeeTabs" component={CoffeeTabs} />
  </Navigator>
);

export const HomeStack = () => <Screens />;
