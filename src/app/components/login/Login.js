import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Login = ({ onLogin, loading, error }) => {
  return (
    <View style={styles.container}>
      <Button title="Login" onPress={onLogin} disabled={loading} />
      {loading && <Text style={styles.info}>Logging in...</Text>}
      {error && <Text style={styles.error}>Error: {error.message || error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  info: {
    marginTop: 10
  },
  error: {
    color: 'red',
    marginTop: 10
  }
});

export default Login;
