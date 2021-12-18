import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {getMessageSectionTime} from '../../date.util';

export const ChatSection = ({item}) => {
  return (
    <View style={styles.main}>
      <View style={styles.dateView}>
        <Text style={styles.date}>
          {getMessageSectionTime(item).toLowerCase()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateView: {
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    borderRadius: 25,
  },
  date: {
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 47,
    color: '#000',
    fontWeight: 'bold',
  },
});
