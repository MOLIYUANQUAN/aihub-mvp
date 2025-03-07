import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useAppContext } from '../hooks/AppContext';

// 推荐AI数据（最多12个，图标已经放在assets/ai-icons里）
const recommendedAIs = [
    { id: 'chatgpt', name: 'ChatGPT', icon: require('../assets/ai-icons/chatgpt.png') },
    { id: 'claude', name: 'Claude-3', icon: require('../assets/ai-icons/claude.png') },
    { id: 'deepseek', name: 'DeepSeek V1', icon: require('../assets/ai-icons/deepseek.png') },
    { id: 'gemini', name: 'Gemini', icon: require('../assets/ai-icons/deepseek.png') }, // 示例
    { id: 'llama', name: 'LLaMA', icon: require('../assets/ai-icons/deepseek.png') },
];

const HomeScreen = () => {
    const { selectedAI, chatHistories, addMessageToHistory } = useAppContext();
    const [input, setInput] = useState('');
    const currentHistory = chatHistories[selectedAI.id] || [];

    // 推荐AI滑动区域
    const renderAIIcon = ({ item }) => (
        <TouchableOpacity style={styles.aiItem}>
            <Image source={item.icon} style={styles.aiIcon} />
            <Text style={styles.aiLabel}>{item.name}</Text>
        </TouchableOpacity>
    );

    // 发送消息
    const handleSend = () => {
        if (input.trim() === '') return;
        const userMessage = { role: 'user', content: input };
        const aiReply = { role: 'ai', content: `这是来自${selectedAI.name}的回复：${input}` };

        addMessageToHistory(selectedAI.id, userMessage);
        addMessageToHistory(selectedAI.id, aiReply);
        setInput('');
    };

    // 渲染消息
    const renderMessage = ({ item }) => (
        <View style={[styles.messageBubble, item.role === 'user' ? styles.userBubble : styles.aiBubble]}>
            <Text style={styles.messageText}>{item.content}</Text>
        </View>
    );

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
            {/* 顶部区域 */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.menuButton}>
                    <Text style={styles.menuText}>☰</Text>
                </TouchableOpacity>
                <Text style={styles.aiTitle}>{selectedAI.name} - {selectedAI.version}</Text>
                <TouchableOpacity style={styles.switchButton}>
                    <Text style={styles.switchText}>切换AI</Text>
                </TouchableOpacity>
            </View>

            {/* 推荐AI滑动列表 */}
            <View style={styles.aiSelector}>
                <FlatList
                    data={recommendedAIs}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderAIIcon}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.aiList}
                />
            </View>

            {/* 聊天内容区 */}
            <FlatList
                data={currentHistory}
                keyExtractor={(item, index) => `${item.role}-${index}`}
                renderItem={renderMessage}
                style={styles.chatList}
            />

            {/* 底部输入区域 */}
            <View style={styles.inputArea}>
                <TouchableOpacity style={styles.plusButton}>
                    <Text style={styles.plusText}>+</Text>
                </TouchableOpacity>
                <TextInput
                    value={input}
                    onChangeText={setInput}
                    placeholder="输入消息..."
                    placeholderTextColor="#aaa"
                    style={styles.input}
                />
                <TouchableOpacity style={styles.thinkButton}>
                    <Text style={styles.thinkText}>🧠</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                    <Text style={styles.sendText}>发送</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

// 样式
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',  // 白色背景
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 12,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    aiTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    menuButton: {
        padding: 5,
    },
    menuText: {
        fontSize: 20,
        color: '#333',
    },
    switchButton: {
        padding: 5,
    },
    switchText: {
        fontSize: 14,
        color: '#007aff',
    },
    aiSelector: {
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    aiList: {
        paddingHorizontal: 10,
    },
    aiItem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        width: 70,
    },
    aiIcon: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    aiLabel: {
        fontSize: 12,
        marginTop: 5,
        color: '#555',
    },
    chatList: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    messageBubble: {
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 15,
        borderRadius: 12,
        maxWidth: '75%',
    },
    userBubble: {
        alignSelf: 'flex-end',
        backgroundColor: '#007aff',
    },
    aiBubble: {
        alignSelf: 'flex-start',
        backgroundColor: '#e5e5ea',
    },
    messageText: {
        color: '#fff',
    },
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    plusButton: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#eee',
        marginRight: 5,
    },
    plusText: {
        fontSize: 18,
        color: '#555',
    },
    input: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        color: '#333',
    },
    thinkButton: {
        padding: 8,
        marginLeft: 5,
    },
    thinkText: {
        fontSize: 20,
    },
    sendButton: {
        backgroundColor: '#007aff',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginLeft: 5,
    },
    sendText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default HomeScreen;
