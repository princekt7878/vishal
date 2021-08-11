import React, { useState, useEffect, useCallback } from 'react';
import { View, ScrollView, Text, Button, StyleSheet } from 'react-native';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



export default function Message({ route, navigation }) {
  const [messages, setMessages] = useState([]);
  const [screen, setScreen] = useState(null);


  const mongoose = require('mongoose');
  const msgSchema = new mongoose.Schema({
    msg: {
      type: String,
      require: true
    }
  })

  const Msg = mongoose.model('msg', msgSchema);
  module.exports = Msg;




  useEffect(() => {
    let { screen } = route.params;
    setScreen(screen)
  }, [screen])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hello ',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },

    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  const renderSend = (props) => {
    return (
      <>
        <Send {...props} >
          <View >
            <MaterialIcons name="send" size={24} color="black"
              style={{ marginBottom: 5, marginRight: 5 }}
              size={32}
              color="#03254B" />
          </View>
        </Send>
      </>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#03254B',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };


  const scrollToBottomComponent = () => {
    return (
      <Feather name="chevron-down" size={24} color='black' />
    );
  }
  return (
    <>
      <View style={{ flex: 1, backgroundColor: COLORS.black }}>
        <View style={{
          height: 70,
          backgroundColor: COLORS.black,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 30
        }}>
          <Text></Text>
        </View>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
          renderBubble={renderBubble}
          alwaysShowSend
          renderSend={renderSend}
          scrollToBottom
          scrollToBottomComponent={scrollToBottomComponent}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
  headerText: {
    flex: 1,
    marginHorizontal: 70,
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',

  },
  left: {
    justifyContent: 'center',

  },
});