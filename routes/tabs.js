import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewCoffee from '../screens/newCoffee';
import BrewCoffee from '../screens/brewCoffee';

const Tab = createBottomTabNavigator();

export default function CoffeeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Brew Your Coffee" component={BrewCoffee} />
      <Tab.Screen name="Enter Coffee Information" component={NewCoffee} />
    </Tab.Navigator>
  );
}
