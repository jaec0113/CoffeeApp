import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../global/globals';

export default function NewCoffee() {
  return (
    <View style={globalStyles.container}>
      <Text>Start a New Coffee Session</Text>
    </View>
  );
}
