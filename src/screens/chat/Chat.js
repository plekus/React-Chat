import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  SectionList,
} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {getAvatar} from '../../avatar.util';
import ChatInput from '../../components/ChatInput';
import LoadingView from '../../components/LoadingView';
import RetryView from '../../components/RetryView';
import {groupMessagesToSections} from '../../date.util';
import {ChatItem} from './ChatItem';
import {ChatSection} from './ChatSection';
import {ChatSelfItem} from './ChatSelfItem';

export const Chat = ({navigation}) => {
  const [state, setState] = useState({
    isLoading: true,
    error: null,
    messages: null,
    header: null,
  });

  const getChatMessagesAsync = async () => {
    try {
      const response = await fetch(
        'https://run.mocky.io/v3/703655f1-6f16-48be-a5c5-3317d080bf93',
      );
      const json = await response.json();
      setState({
        ...state,
        isLoading: false,
        messages: groupMessagesToSections(json.messages),
        error: null,
        header: json.options,
      });
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        error: error,
      });
      console.error(error);
    }
  };

  useEffect(() => {
    getChatMessagesAsync();
  }, []);

  return state.isLoading ? (
    <LoadingView />
  ) : state.error !== null ? (
    <RetryView retryHandler={() => getChatMessagesAsync()} />
  ) : (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backView}
          onPress={() => navigation.goBack()}>
          <Image
            style={styles.backIcon}
            source={require('../../../public/icons/ic_nav_back.png')}
          />
        </TouchableOpacity>
        <Image style={styles.avatar} source={getAvatar(state.header.chat_id)} />
        <View style={{flex: 1, marginStart: 15, alignSelf: 'center'}}>
          <Text style={styles.title} numberOfLines={1}>
            {state.header.title}
          </Text>
          <Text style={styles.subtitle} numberOfLines={1}>
            {state.header.description}
          </Text>
        </View>
      </View>
      <SectionList
        sections={state.messages}
        renderItem={({item}) =>
          state.header.chat_id === item.author_id ? (
            <ChatItem item={item} />
          ) : (
            <ChatSelfItem item={item} />
          )
        }
        renderSectionHeader={({section}) => (
          <ChatSection item={section.title} />
        )}
        keyExtractor={(item, index) => index}
      />
      <ChatInput />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  backView: {
    width: 40,
    height: 45,
    marginStart: 20,
    justifyContent: 'center',
  },
  backIcon: {
    width: 8,
    height: 16,
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: '#000',
    opacity: 0.9,
    fontWeight: 'bold',
    flex: 1,
  },
  subtitle: {
    fontSize: 13,
    color: '#000',
    opacity: 0.5,
  },
  avatar: {
    width: 40,
    height: 40,
    marginStart: 8,
    alignSelf: 'center',
    borderRadius: 20,
    resizeMode: 'cover',
  },
});
