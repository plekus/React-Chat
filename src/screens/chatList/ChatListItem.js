import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {getAvatar} from '../../avatar.util';
import {getRelativeHumanTime} from '../../date.util';

export const ChatListItem = ({item, clickHandler}) => {
  var avatar = getAvatar(item.chat_id);
  return (
    <TouchableOpacity style={styles.main} onPressIn={() => clickHandler()}>
      <View style={styles.item}>
        <Image style={styles.avatar} source={avatar} />
        <View style={{flex: 1, marginStart: 15, alignSelf: 'center'}}>
          <Text style={styles.title} numberOfLines={1}>
            {item.message}
          </Text>
          <Text style={styles.subtitle} numberOfLines={1}>
            {item.author}
          </Text>
        </View>
        <Text style={styles.date} numberOfLines={1}>
          {getRelativeHumanTime(item.ctime)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 47,
    marginVertical: 20,
    paddingLeft: 36,
    paddingRight: 36,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
  },
  avatar: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    borderRadius: 20,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 15,
    color: '#000',
    opacity: 0.7,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 15,
    color: '#000',
    opacity: 0.5,
  },
  date: {
    fontSize: 15,
    paddingTop: 3.5,
    color: '#000',
    justifyContent: 'flex-end',
    opacity: 0.5,
  },
});
