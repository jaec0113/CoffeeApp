import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export function HomeButton({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.homeButton}>
        <Text style={styles.homeButtonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function NewCoffeeButton({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.newCoffeeButton}>
        <Text style={styles.newCoffeeButtonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  homeButton: {
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 2,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: 'black',
    width: 200,
    left: 90,
    top: 400,
  },
  homeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
  newCoffeeButton: {
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 325,
    zIndex: 10,
  },
  newCoffeeButtonText: {
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 36,
    textAlign: 'center',
  },
});
