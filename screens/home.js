import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';

const backgroundImage = '../assets/backgroundImage.jpg';

export default function Home({navigation}) {
  return (
    <View style={styles.homeContainer}>
      <ImageBackground
        source={require(backgroundImage)}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.titleText}>Hello CoffeeApp</Text>
        <TouchableOpacity onPress={() => navigation.navigate('MyCoffee')}>
          <View>
            <Text style={styles.selectionText}>See My Coffees</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
  },
  homeContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 40,
    color: 'white',
    left: 20,
    top: 150,
  },
  selectionText: {
    color: 'white',
    fontSize: 24,
    top: 642,
    left: 50,
  },
});
