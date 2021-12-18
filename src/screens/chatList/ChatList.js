import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';
import {ChatListItem} from './ChatListItem';
import ic_search from '../../../public/icons/ic_search.png';
import {MenuBar} from '../../components/MenuBar';
import LoadingView from '../../components/LoadingView';
import RetryView from '../../components/RetryView';
import {SafeAreaView} from 'react-native-safe-area-context';

export const ChatList = ({navigation}) => {
  const [state, setState] = useState({
    isLoading: true,
    error: null,
    chats: null,
  });

  const getChatListAsync = async () => {
    try {
      const response = await fetch(
        'https://run.mocky.io/v3/121951ff-ba05-4327-8ff3-5eac440e60aa',
      );
      const json = await response.json();
      setState({
        ...state,
        isLoading: false,
        error: null,
        chats: json,
      });
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        error: error,
      });
      console.log(error);
    }
  };

  useEffect(() => {
    getChatListAsync();
  }, []);

  const clickHandler = () => {
    navigation.navigate('Chat');
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.title}>Chats</Text>
        <Image style={styles.searchIcon} source={ic_search} />
      </View>
      {state.isLoading ? (
        <LoadingView />
      ) : state.error !== null ? (
        <RetryView retryHandler={() => getChatListAsync()} />
      ) : (
        <FlatList
          data={state.chats}
          renderItem={({item}) => (
            <ChatListItem item={item} clickHandler={clickHandler} />
          )}
          keyExtractor={(item, index) => item.chat_id}
        />
      )}
      <MenuBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    height: 45,
    paddingLeft: 36,
    paddingRight: 36,
  },
  title: {
    fontSize: 36,
    color: '#000',
    opacity: 0.9,
    flex: 1,
  },
  searchIcon: {
    width: 19,
    height: 19,
    alignSelf: 'center',
  },
});
