import React from 'react';
import { Text, View } from 'react-native';
import Ball from './src/Ball'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ball />
      </View>
    );
  }
}

const styles= {
  container: {
    flex: 1,
  }
}
