import React, { useState, useEffect } from 'react';
import { Appearance, View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import { useAppContext } from '../hooks/AppContext';
import AISelector from '../components/AISelector';

// 主题文件
const themes = {
    light: {
        background: '#f9f9f9',
        text: '#000',
        userMessageBg: '#e1f5fe',
        aiMessageBg: '#f0f0f0',
        inputBg: '#fff',
        buttonBg: '#000',
        buttonText: '#fff',
    },
    dark: {
        background: '#121212',
        text: '#fff',
        userMessageBg: '#4a90e2',
        aiMessageBg: '#333',
        inputBg: '#1e1e1e',
        buttonBg: '#fff',
        buttonText: '#000',
    },
};

const HomeScreen = () => {
    const { selectedAI, chatHistories, addMessageToHistory } = useAppContext();
    const [input, setInput] = useState('');
    const [theme, setTheme] = useState(Appearance.getColorScheme() || 'light');

    // 监听系统主题切换
    useEffect(() => {
        const listener = Appearance.addChangeListener(({ colorScheme }) => {
            setTheme(colorScheme || 'light');
        });
        return () => listener.remove();
    }, []);

    const styles = createStyles(themes[theme]);
    const currentHistory = chatHistories[selectedAI.id] || [];

    const handleSend = () => {
        if (input.trim() === '') return;
        const userMessage = { role: 'user', content: input };
        const aiReply = { role: 'ai', content: `这是来自${selectedAI.name}的回复：${input}` };
        addMessageToHistory(selectedAI.id, userMessage);
        addMessageToHistory(selectedAI.id, aiReply);
        setInput('');
    };

    const renderMessage = ({ item }) => (
        <View style={[
            styles.messageContainer,
            item.role === 'user' ? styles.userMessage : styles.aiMessage
        ]}>
            <Text style={styles.messageText}>{item.content}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeContainer}>
            <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
            <View style={styles.header}>
                <Text style={styles.headerText}>{selectedAI.name} - {selectedAI.version}</Text>
            </View>

            {/* 推荐AI部分（滚动横向） 这里后面补充 */}
            <AISelector />

            {/* 聊天记录 */}
            <FlatList
                data={currentHistory}
                keyExtractor={(item, index) => `${item.role}-${index}`}
                renderItem={renderMessage}
                style={styles.chatList}
            />

            {/* 输入框 + 发送按钮 */}
            <View style={styles.inputContainer}>
                <TextInput
                    value={input}
                    onChangeText={setInput}
                    placeholder="请输入消息..."
                    placeholderTextColor={theme === 'dark' ? '#ccc' : '#888'}
                    style={styles.input}
                />
                <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
                    <Text style={styles.sendText}>发送</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const createStyles = (theme) => StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: theme.background,
    },
    header: {
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: theme.background,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerText: {
        color: theme.text,
        fontSize: 18,
        fontWeight: 'bold',
    },
    chatList: {
        flex: 1,
    },
    messageContainer: {
        padding: 12,
        marginVertical: 6,
        marginHorizontal: 12,
        borderRadius: 12,
        maxWidth: '75%',
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: theme.userMessageBg,
    },
    aiMessage: {
        alignSelf: 'flex-start',
        backgroundColor: theme.aiMessageBg,
    },
    messageText: {
        color: theme.text,
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: theme.inputBg,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    input: {
        flex: 1,
        backgroundColor: theme.inputBg,
        color: theme.text,
        paddingHorizontal: 12,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    sendButton: {
        marginLeft: 8,
        paddingHorizontal: 18,
        paddingVertical: 10,
        backgroundColor: theme.buttonBg,
        borderRadius: 24,
    },
    sendText: {
        color: theme.buttonText,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
