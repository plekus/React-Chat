import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const MenuBar = () => {
  return (
    <View style={styles.menuBar}>
      <TouchableOpacity style={styles.menuBarItem}>
        <Image
          style={styles.menuBarIcon}
          source={require('../../public/icons/ic_nav_chats.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuBarItem}>
        <Image
          style={styles.menuBarIcon}
          source={require('../../public/icons/ic_nav_calls.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuBarItem}>
        <Image
          style={styles.menuBarIcon}
          source={require('../../public/icons/ic_nav_contacts.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuBarItem}>
        <Image
          style={styles.menuBarIcon}
          source={require('../../public/icons/ic_nav_settings.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuBarItem}>
        <Image
          style={styles.menuBarAddIcon}
          source={require('../../public/icons/ic_nav_add.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuBar: {
    flexDirection: 'row',
    height: 84,
    justifyContent: 'space-between',
    paddingLeft: 36,
    paddingRight: 36,
  },
  menuBarIcon: {
    height: 16,
    width: 16,
    alignSelf: 'center',
  },
  menuBarAddIcon: {
    height: 38,
    width: 38,
    alignSelf: 'center',
  },
  menuBarItem: {
    height: 38,
    width: 38,
    marginTop: 22,
    justifyContent: 'center',
  },
});
