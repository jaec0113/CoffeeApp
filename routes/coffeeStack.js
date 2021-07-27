import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Coffee from '../screens/coffee';

const {Navigator, Screen} = createStackNavigator();

const Screens = () => (
  <Navigator screenOptions={{headerStyle: {backgroundColor: '#ccc'}}}>
    <Screen name="Coffee" component={Coffee} />
  </Navigator>
);

export const CoffeeStack = () => <Screens />;
