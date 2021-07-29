import React, {useState} from 'react';
import {View, Text, FlatList, Button, TouchableOpacity} from 'react-native';
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
    {
      coffee: 'Kirinyagi',
      roaster: 'Onyx',
      origin: 'Kenya',
      varietal: '',
      processing: 'washed',
      cupProfile: 'Fruity, juicy, bright acidity',
      key: '2',
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <Text>See a Previous Coffee Session</Text>
      <FlatList
        data={coffees}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('Coffee', item)}>
            <Card>
              <Text>Origin: {item.origin}</Text>
              <Text>Name: {item.coffee}</Text>
              <Text>Roaster: {item.roaster}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
      <Button
        title="Add New Coffee"
        onPress={() => navigation.navigate('CoffeeTabs')}
      />
    </View>
  );
}
