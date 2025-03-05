import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function ChatInput({ onSend }) {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="输入消息..."
        placeholderTextColor="#bbb"
      />
      <Button title="发送" onPress={() => { onSend(text); setText(''); }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#222',
  },
  input: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
});
