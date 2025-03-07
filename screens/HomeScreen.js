import React, { useState, useEffect } from 'react';
import { Appearance, View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, Platform, Image } from 'react-native';
import { useAppContext } from '../hooks/AppContext';
import AISelector from '../components/AISelector';

// 主题
const themes = {
    light: {
        background: '#f9f9f9',
        text: '#000',
        userMessageBg: '#e1f5fe',
        aiMessageText: '#000',
        inputBg: '#fff',
        buttonBg: '#000',
        buttonText: '#fff',
        userText: '#000',
    },
    dark: {
        background: '#121212',
        text: '#fff',
        userMessageBg: '#333',
        aiMessageText: '#fff',
        inputBg: '#1e1e1e',
        buttonBg: '#fff',
        buttonText: '#000',
        userText: '#fff',
    },
};

const HomeScreen = () => {
    const { selectedAI, chatHistories, addMessageToHistory } = useAppContext();
    const [input, setInput] = useState('');
    const [theme, setTheme] = useState(Appearance.getColorScheme() || 'light');
    const [showAISelector, setShowAISelector] = useState(false);

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
        const aiReply = { role: 'ai', content: `AI的回复：${input}` };

        addMessageToHistory(selectedAI.id, userMessage);
        addMessageToHistory(selectedAI.id, aiReply);
        setInput('');
    };

    const renderMessage = ({ item }) => (
        <View style={[styles.messageContainer, item.role === 'user' ? styles.userMessage : styles.aiMessage]}>
            <Text style={item.role === 'user' ? styles.userMessageText : styles.aiMessageText}>
                {item.content}
            </Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeContainer}>
            <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />

            {/* 顶部AI名称+点击展开AISelector */}
            <TouchableOpacity style={styles.header} onPress={() => setShowAISelector(!showAISelector)}>
                <Text style={styles.headerText}>{selectedAI.name}</Text>
            </TouchableOpacity>

            {showAISelector && <AISelector />}

            {/* 聊天历史 */}
            <FlatList
                data={currentHistory}
                keyExtractor={(item, index) => `${item.role}-${index}`}
                renderItem={renderMessage}
                style={styles.chatList}
            />

            {/* 输入+按钮区 */}
            <View style={styles.inputContainer}>
                {/* 预留按钮 */}
                <TouchableOpacity style={styles.iconButton}>
                    <Text style={styles.iconText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Text style={styles.iconText}>🔎</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Text style={styles.iconText}>🌐</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Text style={styles.iconText}>🎙</Text>
                </TouchableOpacity>

                {/* 输入框+发送 */}
                <TextInput
                    value={input}
                    onChangeText={setInput}
                    placeholder="输入消息..."
                    placeholderTextColor={theme === 'dark' ? '#aaa' : '#888'}
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
    safeContainer: { flex: 1, backgroundColor: theme.background },
    header: {
        paddingVertical: 12,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerText: { fontSize: 18, fontWeight: 'bold', color: theme.text },
    chatList: { flex: 1, paddingHorizontal: 12 },
    messageContainer: { marginVertical: 6, maxWidth: '75%' },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: theme.userMessageBg,
        padding: 12,
        borderRadius: 16,
    },
    aiMessage: { alignSelf: 'flex-start' },
    userMessageText: { color: theme.userText },
    aiMessageText: { color: theme.aiMessageText, fontSize: 16, lineHeight: 22 },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        backgroundColor: theme.inputBg,
    },
    input: {
        flex: 1,
        backgroundColor: theme.inputBg,
        color: theme.text,
        paddingHorizontal: 10,
        borderRadius: 20,
        height: 40,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    sendButton: {
        backgroundColor: theme.buttonBg,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
        marginLeft: 8,
    },
    sendText: { color: theme.buttonText, fontWeight: 'bold' },
    iconButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 6,
    },
    iconText: { fontSize: 18 },
});

export default HomeScreen;
