import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import About from '../screens/about';

const {Navigator, Screen} = createStackNavigator();

const Screens = () => (
  <Navigator screenOptions={{headerStyle: {backgroundColor: '#ccc'}}}>
    <Screen name="About" component={About} />
  </Navigator>
);

export const AboutStack = () => <Screens />;
