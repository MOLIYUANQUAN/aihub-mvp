import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ChatInput from '../components/ChatInput';
import MessageBubble from '../components/MessageBubble';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    const newMessage = { id: messages.length + 1, text, sender: 'user' };
    setMessages([...messages, newMessage]);

    // 模拟AI回复
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, text: 'AI回复: ' + text, sender: 'AI' }
      ]);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <MessageBubble message={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <ChatInput onSend={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 10,
  },
});
