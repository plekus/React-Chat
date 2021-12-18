import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {getAvatar} from '../../avatar.util';
import {getMessageTime} from '../../date.util';

export const ChatItem = ({item}) => {
  var avatar = getAvatar(item.author_id);
  return (
    <View style={styles.main}>
      <View style={styles.itemUser}>
        <Text style={styles.messageUser}>{item.message}</Text>
        <Text style={styles.dateUser}>{getMessageTime(item.ctime)}</Text>
      </View>
      <Image style={styles.avatar} source={avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginVertical: 20,
    marginStart: 35,
    marginEnd: 35,
  },
  itemUser: {
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  messageUser: {
    fontSize: 15,
    color: '#000',
    opacity: 0.6,
    alignSelf: 'flex-start',
  },
  dateUser: {
    fontSize: 13,
    color: '#000',
    alignSelf: 'flex-start',
    opacity: 0.5,
    marginTop: 20,
  },
  avatar: {
    width: 22,
    height: 22,
    alignSelf: 'flex-start',
    borderRadius: 11,
    resizeMode: 'cover',
    marginStart: -8,
    marginTop: -11,
  },
});
