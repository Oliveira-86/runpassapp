import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Garmin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Garmin</Text>
    </View>
  );
};

export default Garmin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
});
