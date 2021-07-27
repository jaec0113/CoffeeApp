import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {globalStyles} from '../global/globals';

const reviewSchema = yup.object({
  coffee: yup.string().required().min(4),
  roaster: yup.string().required().min(4),
  origin: yup.string(),
  varietal: yup.string(),
  processing: yup.string(),
  cupProfile: yup.string().required().min(5),
});

export default function NewCoffee() {
  return (
    <View style={globalStyles.form}>
      <View>
        <Text style={globalStyles.screenTitle}>Coffee Information</Text>
      </View>
      <Formik
        initialValues={{
          coffee: '',
          roaster: '',
          origin: '',
          varietal: '',
          processing: '',
          cupProfile: '',
        }}
        validationSchema={reviewSchema}>
        <View>
          <TextInput placeholder="Coffee Name" style={styles.input} />
          <TextInput placeholder="Roaster" style={styles.input} />
          <TextInput placeholder="Origin" style={styles.input} />
          <TextInput placeholder="Varietal" style={styles.input} />
          <TextInput placeholder="Processing Method" style={styles.input} />
          <TextInput placeholder="Cup Profile" style={styles.input} />
        </View>
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#333',
    margin: 2,
    marginVertical: 15,
    padding: 10,
    paddingHorizontal: 80,
    fontSize: 18,
    borderRadius: 6,
    textAlign: 'center',
  },
});
