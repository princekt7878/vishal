import React from 'react';
import { Text, FlatList, View, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import {
    Container,
    Card,
    UserImg,
    UserImgWrapper,
    UserInfo,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection
} from '../constants/Chat';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { SafeAreaView } from 'react-native';


const Messages = [
    {
        id: '1',
        userName: 'SOS',
        userImg: require('../assets/images/manharModi.png'),
        messageTime: '4 mins ago',
        messageText:
            'Hey there, I am using SOS.',
    },
    {
        id: '2',
        userName: 'Yash Rabari',
        userImg: require('../assets/images/underland.jpg'),
        messageTime: '2 hours ago',
        messageText:
            'Hey there, I am using SOS.',
    },
    {
        id: '3',
        userName: 'Ravi Thakor',
        userImg: require('../assets/images/other_words_for_home.jpg'),
        messageTime: '1 hours ago',
        messageText:
            'Hey there, I am using SOS.',
    },
];


export default function ChatScreen({ navigation }) {
    return (
        <>
            <SafeAreaView style={{ backgroundColor: COLORS.black }}>
                <View style={{
                    alignItems: 'flex-start',
                    paddingHorizontal: SIZES.padding,
                    paddingVertical: SIZES.padding / 4,
                }}>

                    <Text style={{ color: COLORS.white, fontSize: SIZES.h1, }} >Chats</Text>
                </View>
            </SafeAreaView>
            <Container>
                <FlatList
                    data={Messages}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Card onPress={() => navigation.navigate('Message', { userName: item.userName })}>
                            <UserInfo>
                                <UserImgWrapper>
                                    <UserImg source={item.userImg} />
                                </UserImgWrapper>
                                <TextSection>
                                    <UserInfoText>
                                        <UserName>{item.userName}</UserName>
                                        <PostTime>{item.messageTime}</PostTime>
                                    </UserInfoText>
                                    <MessageText>{item.messageText}</MessageText>
                                </TextSection>
                            </UserInfo>
                        </Card>

                    )}
                />
            </Container>


        </>
    );
}

const styles = StyleSheet.create({

});