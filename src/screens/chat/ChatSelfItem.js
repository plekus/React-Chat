import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {getMessageTime} from '../../date.util';

export const ChatSelfItem = ({item}) => {
  return (
    <View style={styles.main}>
      <View style={styles.itemSelf}>
        <Text style={styles.messageSelf}>{item.message}</Text>
        <Text style={styles.dateSelf}>{getMessageTime(item.ctime)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginVertical: 20,
    marginStart: 35,
    marginEnd: 35,
  },
  itemSelf: {
    backgroundColor: '#9ACDFD',
    borderRadius: 10,
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  messageSelf: {
    fontSize: 15,
    color: '#000',
    opacity: 0.6,
    alignSelf: 'flex-end',
  },
  dateSelf: {
    fontSize: 13,
    color: '#000',
    alignSelf: 'flex-end',
    opacity: 0.5,
    marginTop: 20,
  },
});
