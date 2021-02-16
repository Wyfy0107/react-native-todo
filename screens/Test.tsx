import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

function Test() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test tab</Text>
      <Text style={styles.title}>Experimenting</Text>
    </View>
  );
}

export default Test;
