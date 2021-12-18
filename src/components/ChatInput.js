import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ChatInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Image
          style={styles.attachment}
          source={require('../../public/icons/ic_attachment.png')}
        />
        <Text style={styles.inputText}>Aa</Text>
        <Image
          style={styles.sticker}
          source={require('../../public/icons/ic_stickers.png')}
        />
      </View>
      <Image
        style={styles.microphone}
        source={require('../../public/icons/ic_microphone.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 82,
    flexDirection: 'row',
    paddingHorizontal: 35,
  },
  inputView: {
    flex: 1,
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#F3F3F3',
    borderRadius: 23,
    marginTop: 8,
  },
  inputText: {
    flex: 1,
    fontSize: 15,
    color: '#000',
    opacity: 0.3,
    alignSelf: 'center',
    marginStart: 15,
  },
  attachment: {
    width: 16,
    height: 16,
    alignSelf: 'center',
    marginStart: 22,
  },
  sticker: {
    width: 16,
    height: 16,
    alignSelf: 'center',
    marginEnd: 16,
  },
  microphone: {
    width: 16,
    height: 24,
    marginStart: 22,
    marginTop: 21,
  },
});

export default ChatInput;
