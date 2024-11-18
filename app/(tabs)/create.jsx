import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const chats = [
  {
    id: '1',
    name: 'Mary😊',
    message: 'Cent!! Salamat sa tanan ha ikaw akong nauban',
    image: 'https://randomuser.me/api/portraits/women/1.jpg', // Use any image URL
  },
  {
    id: '2',
    name: 'Will Kenny',
    message: 'I know... I’m trying to get the funds.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: '3',
    name: 'Beth Williams',
    message: 'I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm...',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: '4',
    name: 'Rev Shawn',
    message: 'Wanted to ask if you’re available for a portrait shoot next week.',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
];

const ChatItem = ({ chat }) => {
  return (
    <TouchableOpacity style={styles.chatItem}>
      <Image source={{ uri: chat.image }} style={styles.avatar} />
      <View style={styles.chatContent}>
        <Text style={styles.chatName}>{chat.name}</Text>
        <Text style={styles.chatMessage} numberOfLines={1}>{chat.message}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatItem chat={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  chatContent: {
    flex: 1,
    justifyContent: 'center',
  },
  chatName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  chatMessage: {
    fontSize: 14,
    color: '#777',
    marginTop: 3,
  },
});

export default ChatScreen;
