import React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useAppContext } from '../hooks/AppContext';
import AISelector from '../components/AISelector';

const HomeScreen = () => {
    const { selectedAI, chatHistories, addMessageToHistory } = useAppContext();
    const [input, setInput] = React.useState('');

    const currentHistory = chatHistories[selectedAI.id] || [];

    const handleSend = () => {
        if (input.trim() === '') return;

        const userMessage = { role: 'user', content: input };
        const aiReply = { role: 'ai', content: `这是来自${selectedAI.name}的回复：${input}` };  // 模拟AI回复

        addMessageToHistory(selectedAI.id, userMessage);
        addMessageToHistory(selectedAI.id, aiReply);

        setInput('');
    };

    const renderMessage = ({ item }) => (
        <View style={[styles.messageContainer, item.role === 'user' ? styles.userMessage : styles.aiMessage]}>
            <Text style={styles.messageText}>{item.content}</Text>
        </View>
    );

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={styles.container}
        >
            <View style={styles.header}>
                <Text style={styles.headerText}>{selectedAI.name} - {selectedAI.version}</Text>
            </View>

            <AISelector />

            <FlatList
                data={currentHistory}
                keyExtractor={(item, index) => `${item.role}-${index}`}
                renderItem={renderMessage}
                style={styles.chatList}
            />

            <View style={styles.inputContainer}>
                <TextInput
                    value={input}
                    onChangeText={setInput}
                    placeholder="输入消息..."
                    placeholderTextColor="#888"
                    style={styles.input}
                />
                <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
                    <Text style={styles.sendText}>发送</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    header: {
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
    },
    headerText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    chatList: {
        flex: 1,
        backgroundColor: '#121212',
    },
    messageContainer: {
        padding: 10,
        marginVertical: 4,
        marginHorizontal: 10,
        borderRadius: 8,
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#4caf50',
    },
    aiMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#333',
    },
    messageText: {
        color: 'white',
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#1e1e1e',
    },
    input: {
        flex: 1,
        backgroundColor: '#333',
        color: 'white',
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    sendButton: {
        marginLeft: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#4caf50',
        borderRadius: 5,
    },
    sendText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default HomeScreen;
