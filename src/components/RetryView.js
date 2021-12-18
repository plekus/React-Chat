import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const RetryView = ({retryHandler}) => (
  <View style={styles.container}>
    <Button onPress={() => retryHandler()} title="Retry" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RetryView;
