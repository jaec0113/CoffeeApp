import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Card from '../components/Card';
import {NewCoffeeButton} from '../components/Button';

export default function PreviousCoffee({navigation}) {
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
    {
      coffee: 'COE #5',
      roaster: 'Onyx',
      origin: 'Ethiopia',
      varietal: '74118',
      processing: 'washed',
      cupProfile: 'Tea-like, dried fruits, clean after',
      key: '3',
    },
    {
      coffee: 'Inmaculada',
      roaster: 'Center Coffee',
      origin: 'Colombia',
      varietal: 'Geisha',
      processing: 'washed',
      cupProfile: 'Clean, sweet, green apple',
      key: '4',
    },
    {
      coffee: 'Eugenioides',
      roaster: 'Onyx',
      origin: 'Colombia',
      varietal: 'Eugenioides',
      processing: 'natural',
      cupProfile: 'Chocolate, strawberry, sweet',
      key: '5',
    },
    {
      coffee: 'Finca Tamana',
      roaster: 'Tim Wendelboe',
      origin: 'Honduras',
      varietal: 'SL28',
      processing: 'washed',
      cupProfile: 'Dried fruit, milk chocolate',
      key: '6',
    },
    {
      coffee: 'Brazil 2019 COE #5',
      roaster: 'Be Brave',
      origin: 'Brazil',
      varietal: 'Yellow Catuai',
      processing: 'anaerobic natural',
      cupProfile: 'Raisin, winey, acacia honey',
      key: '7',
    },
    {
      coffee: 'Los Pirineos',
      roaster: 'Tim Wendelboe',
      origin: 'El Salvador',
      varietal: 'Bourbon',
      processing: 'honey',
      cupProfile: 'Dried fruit, dark chocolate, roasted nuts',
      key: '8',
    },
    {
      coffee: 'Worka',
      roaster: 'Onyx',
      origin: 'Ethiopia',
      varietal: '71410',
      processing: 'natural',
      cupProfile: 'Bergamot, honeysuckle, silky',
      key: '9',
    },
    {
      coffee: 'Pink Blend',
      roaster: 'Wato Coffee',
      origin: 'Ethiopia 50%, Kenya 50%',
      varietal: 'unknown',
      processing: 'natural',
      cupProfile: 'Red fruit, blueberry, bright acidity',
      key: '10',
    },
  ]);

  return (
    <View style={styles.coffeeContainer}>
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
      <NewCoffeeButton
        text="+"
        onPress={() => navigation.navigate('CoffeeTabs')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  coffeeContainer: {
    height: 700,
    marginBottom: 50,
  },
});
