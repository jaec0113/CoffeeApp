import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  screenTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
  },
  formError: {
    color: 'red',
    textAlign: 'center',
  },
  formWarning: {
    color: 'gold',
    textAlign: 'center',
  },
});
