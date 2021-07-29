import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from '../components/Card';

export default function Coffee({route}) {
  const {coffee} = route.params;
  const {roaster} = route.params;
  const {origin} = route.params;
  const {varietal} = route.params;
  const {processing} = route.params;
  const {cupProfile} = route.params;

  return (
    <View>
      <Text style={styles.coffeeTitle}>My Coffee Record</Text>
      <Card style={styles.coffeeCard}>
        <Text style={styles.coffeeText}>Coffee Name: </Text>
        <Text style={styles.coffeeInfo}>{coffee}</Text>
        <Text style={styles.coffeeText}>Roaster: </Text>
        <Text style={styles.coffeeInfo}>{roaster}</Text>
        <Text style={styles.coffeeText}>Origin: </Text>
        <Text style={styles.coffeeInfo}>{origin}</Text>
        <Text style={styles.coffeeText}>Varietal: </Text>
        <Text style={styles.coffeeInfo}>{varietal}</Text>
        <Text style={styles.coffeeText}>Processing Method: </Text>
        <Text style={styles.coffeeInfo}>{processing}</Text>
        <Text style={styles.coffeeText}>Cup Profile: </Text>
        <Text style={styles.coffeeInfo}>{cupProfile}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  coffeeTitle: {
    padding: 12,
    fontSize: 36,
    textAlign: 'center',
    marginTop: 24,
  },
  coffeeText: {
    fontSize: 24,
    marginTop: 12,
    fontWeight: 'bold',
  },
  coffeeInfo: {
    fontSize: 16,
    marginLeft: 24,
    marginTop: 6,
  },
});
