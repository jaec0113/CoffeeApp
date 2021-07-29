import React, {useState} from 'react';
import {View, Text, FlatList, Button, Modal} from 'react-native';
import uuid from 'react-native-uuid';
import Card from '../components/Card';
import {globalStyles} from '../global/globals';

export default function PreviousCoffee({navigation}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [coffees, setCoffees] = useState([
    {
      coffee: 'Gori Gesha',
      roaster: 'Be Brave',
      origin: 'Ethiopia',
      varietal: 'Geisha',
      processing: 'natural',
      cupProfile: 'Fruity, nice body, bright acidity',
      key: '1',
    },
  ]);

  const addCoffee = coffee => {
    coffee.key = uuid.v4();
    setCoffees(currentCoffees => {
      return [coffee, ...currentCoffees];
    });
  };

  return (
    <View style={globalStyles.container}>
      <Text>See a Previous Coffee Session</Text>
      <FlatList
        data={coffees}
        renderItem={({item}) => (
          <Card>
            <Text>Origin: {item.origin}</Text>
            <Text>Name: {item.coffee}</Text>
            <Text>Roaster: {item.roaster}</Text>
          </Card>
        )}
      />
      <Button
        title="Add New Coffee"
        onPress={() => navigation.navigate('CoffeeTabs')}
      />
    </View>
  );
}
