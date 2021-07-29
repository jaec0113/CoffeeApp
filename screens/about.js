import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../global/globals';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.aboutTitle}>About The App</Text>
      <Text style={styles.aboutText}>
        This app is designed to hold basic information about the coffee you
        drink. You can use it to keep track of the coffee information like the
        who the roaster was, the varietal, processing method, origin, and a few
        cup notes.
      </Text>
      <Text style={styles.aboutTitle}>Using The App</Text>
      <Text style={styles.aboutText}>
        From the home screen, tap on 'See My Coffees' to see all of the coffees
        you have saved in the app. Tap on the individual coffee to see more
        information. From here you can update the information or delete an
        entry.
      </Text>
      <Text style={styles.aboutText}>
        From the 'See My Coffees' screen you can add a new coffee. Enter the
        brewing recipe you will use. Brew the coffee. Go to the 'Enter Coffee
        Information' screen and enter the coffee information. You must add at
        least the coffee name, roaster, and cup profile.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  aboutText: {
    fontSize: 16,
    marginHorizontal: 12,
    marginBottom: 12,
  },
});
