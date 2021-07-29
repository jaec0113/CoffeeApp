import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {HomeButton} from '../components/Button';

const backgroundImage = '../assets/home-img.jpg';

export default function Home({navigation}) {
  return (
    <View style={styles.homeContainer}>
      <ImageBackground
        source={require(backgroundImage)}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.titleText}>Coffee</Text>
        <Text style={styles.titleText}>Drinker's</Text>
        <Text style={styles.titleText}>Companion</Text>
        <HomeButton
          text="See My Coffees"
          onPress={() => navigation.navigate('MyCoffee')}
        />
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
    fontSize: 48,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 8,
    top: 10,
    textAlign: 'center',
  },
  selectionText: {
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
    fontSize: 24,
    top: 400,
    textAlign: 'center',
  },
});
