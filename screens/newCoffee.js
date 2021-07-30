import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import * as yup from 'yup';
import {SubmitCoffeeButton} from '../components/Button';
import {globalStyles} from '../global/globals';

const reviewSchema = yup.object({
  coffee: yup.string().required().min(4),
  roaster: yup.string().required().min(4),
  origin: yup.string(),
  varietal: yup.string(),
  processing: yup.string(),
  cupProfile: yup.string().required().min(5),
});

export default function NewCoffee({addCoffee}) {
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
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          addCoffee(values);
          actions.resetForm();
        }}>
        {formikProps => (
          <KeyboardAwareScrollView>
            <View style={styles.coffeeForm}>
              <TextInput
                placeholder="Coffee Name"
                style={styles.input}
                onChangeText={formikProps.handleChange('coffee')}
                value={formikProps.values.coffee}
                onBlur={formikProps.handleBlur('coffee')}
              />

              <Text style={globalStyles.formError}>
                {formikProps.touched.coffee && formikProps.errors.coffee}
              </Text>

              <TextInput
                placeholder="Roaster"
                style={styles.input}
                onChangeText={formikProps.handleChange('roaster')}
                value={formikProps.values.roaster}
                onBlur={formikProps.handleBlur('roaster')}
              />
              <Text style={globalStyles.formError}>
                {formikProps.touched.roaster && formikProps.errors.roaster}
              </Text>
              <TextInput
                placeholder="Origin"
                style={styles.input}
                onChangeText={formikProps.handleChange('origin')}
                value={formikProps.values.origin}
                onBlur={formikProps.handleBlur('origin')}
              />
              {formikProps.touched.origin &&
              formikProps.values.origin === '' ? (
                <Text style={globalStyles.formWarning}>
                  Do you want to add an origin?
                </Text>
              ) : null}
              <TextInput
                placeholder="Varietal"
                style={styles.input}
                onChangeText={formikProps.handleChange('varietal')}
                value={formikProps.values.varietal}
                onBlur={formikProps.handleBlur('varietal')}
              />
              {formikProps.touched.varietal &&
              formikProps.values.varietal === '' ? (
                <Text style={globalStyles.formWarning}>
                  Do you want to add a varietal?
                </Text>
              ) : null}
              <TextInput
                placeholder="Processing Method"
                style={styles.input}
                onChangeText={formikProps.handleChange('processing')}
                value={formikProps.values.processing}
                onBlur={formikProps.handleBlur('processing')}
              />
              {formikProps.touched.processing &&
              formikProps.values.processing === '' ? (
                <Text style={globalStyles.formWarning}>
                  Do you want to add a processing method?
                </Text>
              ) : null}
              <TextInput
                placeholder="Cup Profile"
                style={styles.input}
                onChangeText={formikProps.handleChange('cupProfile')}
                value={formikProps.values.cupProfile}
                onBlur={formikProps.handleBlur('cupProfile')}
              />
              <Text style={globalStyles.formError}>
                {formikProps.touched.cupProfile &&
                  formikProps.errors.cupProfile}
              </Text>
              <SubmitCoffeeButton text="Add Coffee" />
            </View>
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    margin: 2,
    marginVertical: 15,
    padding: 10,
    paddingHorizontal: 80,
    fontSize: 18,
    borderRadius: 6,
    textAlign: 'center',
  },
});
