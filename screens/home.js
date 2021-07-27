import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {globalStyles} from '../global/globals';

export default function Home({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Text>Hello CoffeeApp</Text>
      <TouchableOpacity onPress={() => navigation.navigate('CoffeeTabs')}>
        <View>
          <Text>Start New Coffee Session</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('PreviousCoffee')}>
        <View>
          <Text>See a Previous Session</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
