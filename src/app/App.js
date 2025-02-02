import React from 'react';
import { Provider } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import store from './store';
import LoginContainer from './containers/login/LoginContainer';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to the React Native App</Text>
        <LoginContainer />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 20,
    marginBottom: 20
  }
});
