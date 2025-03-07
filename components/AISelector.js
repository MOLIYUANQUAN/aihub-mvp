import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useAppContext } from '../hooks/AppContext';

// 获取屏幕宽度，保证适配所有机型（包括iPhone 15 Pro等）
const screenWidth = Dimensions.get('window').width;

// 每个AI图标的宽度，适当留白和居中，最多4个
const ITEM_WIDTH = screenWidth / 4.5;

// 推荐AI数据（以后直接扩展这里即可）
const recommendedAIs = [
    { id: 'chatgpt', name: 'ChatGPT-4o', icon: require('../assets/ai-icons/chatgpt.png') },
    { id: 'claude', name: 'Claude-3', icon: require('../assets/ai-icons/claude.png') },
    { id: 'deepseek', name: 'DeepSeek V1', icon: require('../assets/ai-icons/deepseek.png') },
    // 可以继续补充更多
];

const AISelector = () => {
    const { selectedAI, selectAI } = useAppContext();

    // 渲染单个AI图标+名称
    const renderItem = ({ item }) => {
        const isSelected = selectedAI.id === item.id;
        return (
            <TouchableOpacity
                style={[styles.aiItem, isSelected && styles.selectedItem]}
                onPress={() => selectAI(item)}
            >
                <Image source={item.icon} style={styles.icon} />
                <Text style={[styles.name, isSelected && styles.selectedName]}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={recommendedAIs}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}  // 隐藏滚动条，更干净
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        backgroundColor: 'white',  // 你希望白色为主调
    },
    listContainer: {
        paddingHorizontal: 10,  // 左右留点空白，整体更美观
    },
    aiItem: {
        width: ITEM_WIDTH,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        paddingVertical: 5,
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    name: {
        marginTop: 5,
        fontSize: 12,
        color: '#666',
    },
    selectedItem: {
        borderBottomWidth: 3,
        borderBottomColor: '#007AFF',  // 选中的AI加个底部高亮线，符合iOS风格
    },
    selectedName: {
        color: '#007AFF',
        fontWeight: 'bold',
    },
});

export default AISelector;
