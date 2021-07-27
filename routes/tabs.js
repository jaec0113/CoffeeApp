import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewCoffee from '../screens/newCoffee';
import BrewCoffee from '../screens/brewCoffee';

const Tab = createBottomTabNavigator();

export default function CoffeeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="NewCoffee" component={NewCoffee} />
      <Tab.Screen name="BrewCoffee" component={BrewCoffee} />
    </Tab.Navigator>
  );
}
